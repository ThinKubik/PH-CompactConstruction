import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductPage from './ProductPage';

const COMPACT_PRODUCTS = [
  {
    name: 'Parker Programmable Electronic Display - PHD',
    image: './images/PHD - Parker Programmable Electronic Display.jpg',
    description:
      "The PHD display family are rugged, general purpose displays offering full color, touch capable screen with built in CAN and I/O. The PHD displays offer a robust design to withstand the conditions found on today's mobile,\noff-road equipment.",
  },
  {
    name: 'Semi-Custom Controller Module - CM2723',
    image: './images/Semi-custom Controller Module - CM2723.jpg',
    description:
      'This CM2723 is the 24V version. This controller module is a compact solution designed to withstand harsh environments without sacrificing reliability. The CM2723 can be used alone or with other controllers in a system.',
  },
  {
    name: 'Low Pressure Tank Top Filters - PT Series',
    image: './images/Low Pressure Tank Top Filters PT Series.jpg',
    description:
      'The PT Series Return Line Filters combine high efficiency Microglass filtration with low cost installation in a patented design. Allowable operating pressure of 150 PSI/10.3 Bar and capable of flows up to 50 GPM/180 LPM.',
  },
  {
    name: 'Heavy Duty Motor Torqmotor\u2122 - TGK Series',
    image: './images/Heavy Duty Motor Torqmotor TGK Series.jpg',
    description:
      'The rugged TGK Series heavy duty hydraulic motor uses an extra heavy drive train in a standard size motor to deliver up to 19,000 lb-in torque, with intermittent pressure ratings to 4000 psi.',
  },
  {
    name: 'Aluminum Motors - PGM511 Series',
    image: './images/Aluminum Motors \u2013 PGM511 Series.jpg',
    description:
      "Parker's Aluminum Motor PGM511 Series fixed displacement gear motor offers high performance and high power density due to its aluminum construction.",
  },
  {
    name: 'Mobile Open Circuit Medium Pressure Axial\nPiston Pump - P1M Series',
    image: './images/P1M.jpg',
    description:
      'P1M Series delivers higher speeds and efficiency that increases machine productivity, reduces costs, and extends pump life in a robust, compact envelope.',
  },
  {
    name: 'Mobile Directional Control Valve - P70CF Series',
    image: './images/P70CF.jpg',
    description:
      'Parker P70CF is a robust valve with excellent controllability for mobile machinery. It is a sectional-built, directional control valve for mobile machinery used in open center systems and closed center systems.',
  },
  {
    name: 'Parker LORD Small Industrial Engine Mounts',
    image: './images/Parker LORD Small Industrial Engine Mounts.jpg',
    description:
      'LORD Small Industrial Engine Mounts are especially designed for mounting 2-, 3- and 4-cylinder gas or diesel engines in various types of vehicles and equipment.',
  },
  {
    name: 'Hydraulic Hose - 510D - SAE 100R7 / ISO 3949-R7',
    image: '',
    description:
      'Matte cover for low coefficient of friction. Twin or multi-line available. Nylon Core tube provides\ngood chemical compatibility.',
    udpSignal: 'CC_animation_10',
  },
  {
    name: 'Rapid Assembly Fittings',
    image: '',
    description:
      'With one adapter, speed up assembly installations by 50%. Simply screw in the adapter and push the tube stub fitting into the adapter.',
    udpSignal: 'CC_animation_10',
  },
];

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProductPage
            categoryLabel="Compact Construction Solutions"
            products={COMPACT_PRODUCTS}
          />
        }
      />
    </Routes>
  );
}
