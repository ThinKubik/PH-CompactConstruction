import { useRef, useState } from 'react';

const TAP_REQUIRED = 5;
const TAP_WINDOW_MS = 3000;

function exitApp() {
  if (typeof window !== 'undefined' && (window as any).require) {
    try {
      const { ipcRenderer } = (window as any).require('electron');
      ipcRenderer.send('quit-app');
    } catch (e) {
      console.warn('[ExitButton] Could not send quit signal');
    }
  } else {
    console.log('[ExitButton] (dev mode) Would quit app');
  }
}

export default function ExitButton() {
  const tapsRef = useRef<number[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleTap = () => {
    const now = Date.now();
    tapsRef.current = tapsRef.current.filter((t) => now - t < TAP_WINDOW_MS);
    tapsRef.current.push(now);
    if (tapsRef.current.length >= TAP_REQUIRED) {
      tapsRef.current = [];
      setShowConfirm(true);
    }
  };

  return (
    <>
      {/* Invisible 5-tap zone centred at the top of the screen */}
      <div
        onClick={handleTap}
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 300,
          height: 300,
          zIndex: 9999,
          opacity: 0,
          cursor: 'default',
        }}
      />

      {/* Exit confirmation modal */}
      {showConfirm && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <div
            style={{
              backgroundColor: '#424242',
              border: '0.833rem solid #ffb91d',
              borderRadius: '2rem',
              padding: '6rem 8rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5rem',
              minWidth: '60rem',
            }}
          >
            <p
              style={{
                fontSize: '4rem',
                fontWeight: 400,
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
            >
              Are you sure you want to quit?
            </p>
            <div style={{ display: 'flex', gap: '4rem' }}>
              <button
                onClick={() => setShowConfirm(false)}
                style={{
                  backgroundColor: '#d9d9d9',
                  border: 'none',
                  borderRadius: '5.556rem',
                  padding: '1.333rem 6rem',
                  fontSize: '3rem',
                  fontWeight: 500,
                  color: '#424242',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                }}
              >
                No
              </button>
              <button
                onClick={exitApp}
                style={{
                  backgroundColor: '#ffb91d',
                  border: 'none',
                  borderRadius: '5.556rem',
                  padding: '1.333rem 6rem',
                  fontSize: '3rem',
                  fontWeight: 500,
                  color: '#424242',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
