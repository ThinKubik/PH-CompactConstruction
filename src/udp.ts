// UDP signaling utility — broadcast to PixLite MK3 at 169.254.255.255:51680
// Actual dgram work happens in the Electron main process (electron/main.cjs).
// The renderer sends an IPC message; in dev/browser mode we just log.

// Animation command sent for each category card
export const CATEGORY_UDP_CODES: Record<number, string> = {
  0: 'SBW_animation_01',
  1: 'SBW_animation_02',
  2: 'SBW_animation_03',
  3: 'SBW_animation_04',
};

function dispatchUdp(message: string): void {
  if (typeof window !== 'undefined' && (window as any).require) {
    try {
      const { ipcRenderer } = (window as any).require('electron');
      ipcRenderer.send('send-udp', message);
      console.log(`[UDP] IPC → main process: "${message}"`);
    } catch (e) {
      console.warn('[UDP] ipcRenderer not available, logging instead:', message);
    }
  } else {
    console.log(`[UDP] (dev mode) Would send "${message}" to 169.254.255.255:51680`);
  }
}

/**
 * Send a UDP packet with the animation command string to the PixLite MK3.
 * In Electron the renderer forwards the request to the main process via IPC,
 * where Node.js `dgram` sends a broadcast UDP datagram with a CR terminator.
 * In a browser dev environment it just logs to console.
 *
 * Overload 1: sendUdpSignal(signal) — send a fully-formed string directly
 *   e.g. sendUdpSignal('CC_animation_10')
 *
 * Overload 2: sendUdpSignal(categoryId, productName) — generate CC_animation_##
 *   e.g. sendUdpSignal(0, 'PHD Display')  →  'CC_animation_01'
 *
 * Overload 3: sendUdpSignal(categoryId) — home page category signal
 *   e.g. sendUdpSignal(0)  →  'SBW_animation_01'
 */
export function sendUdpSignal(signal: string): void;
export function sendUdpSignal(categoryId: number, productName?: string): void;
export function sendUdpSignal(signalOrId: string | number, productName?: string): void {
  let message: string;
  if (typeof signalOrId === 'string') {
    message = signalOrId;
  } else if (productName) {
    // Product page: generate index-based CC_animation_## signal
    message = `CC_animation_${String(signalOrId + 1).padStart(2, '0')}`;
  } else {
    // Home page: use category code
    message = CATEGORY_UDP_CODES[signalOrId] ?? `UNKNOWN_${signalOrId}`;
  }
  dispatchUdp(message);
}
