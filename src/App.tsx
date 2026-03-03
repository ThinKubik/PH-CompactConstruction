import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductPage from './ProductPage';

const COMPACT_PRODUCTS = [
  {
    name: 'Programmable Electronic Display - PHD',
    image: './images/PHD - Parker Programmable Electronic Display.jpg',
    description:
      "The PHD display family are rugged, general purpose displays offering full color, touch capable screen with built in CAN and I/O. The PHD displays offer a robust design to withstand the conditions found on today's mobile,\noff-road equipment.",
  },
  {
    name: 'Semi-Custom Controller Module - CM2723',
    image: './images/Semi-custom Controller Module - CM2723.jpg',
    description:
      "Parker's Controller Module 2723 is ideal for mobile equipment requiring cost-effective, robust, high-performance operation. The CM2723 module is a compact solution designed to withstand harsh environments without sacrificing reliability. The CM2723 can be used alone or with other controllers in a system.",
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
    name: 'Medium Pressure Mobile Pumps – P1M Series',
    image: './images/P1M.jpg',
    description:
      "Parker's P1M Series delivers higher speeds and efficiency that increases machine productivity, reduces operational costs, and extends pump life in a robust, compact envelope.",
  },
  {
    name: 'Mobile Directional Control Valve - P70CF Series',
    image: './images/P70CF.jpg',
    description:
      "Parker's P70CF is a robust valve with excellent controllability for mobile machinery. It is a sectional-built, directional control valve for mobile machinery used in open center systems and closed center systems.",
  },
  {
    name: 'Parker LORD Small Industrial Engine Mounts',
    image: './images/Parker LORD Small Industrial Engine Mounts.jpg',
    description:
      'Parker LORD Small Industrial Engine Mounts are specifically designed for mounting 2-, 3- and 4-cylinder gas or diesel engines in various types of vehicles and equipment.',
  },
  {
    name: 'High Performance Retention PIP Seals',
    image: './images/PIP Seals.jpeg',
    description:
      "Parker's precision-cut press-in-place (PIP) seals improve retention and speed installation over traditional static face seals. Custom engineered for complex grooves without stretching or added retention, they ensure reliable performance across diverse fluids, pressures, temperatures, and harsh environments.",
    udpSignal: 'CC_animation_09',
  },
  {
    name: 'Custom Cartridge Manifolds',
    image: './images/manifold cartridge.png',
    description:
      "Parker's cartridge manifold solutions offer a streamlined, space-saving alternative to CETOP or sectional valves. From concept to build, we transform your hydraulic schematic into a uniquely configured manifold to meet your application needs.",
    udpSignal: 'CC_animation_10',
  },
  {
    name: '510 D Hose',
    image: './images/510D-4inch.jpg',
    description:
      "Parker's 510D SAE 100R7 hose offers select field-attachable fittings, improved force-to-flex, and a low-friction matte cover for faster installs and changeouts.",
    udpSignal: 'CC_animation_11',
  },
  {
    name: 'Rapid Assembly Fittings',
    image: './images/Rapid Assembly Fittings.jpg',
    description:
      "Parker's Rapid Assembly (RA) quick-connect fittings provide a compact, economical plug-and-play system that installs without wrenches or orientation to cut plumbing time and tools.",
    udpSignal: 'CC_animation_11',
  },
  {
    name: 'Seal-Lok\u2122 O-Ring Face Seal Tube Fittings',
    image: './images/Seal-Lok O-Ring Face Seal Fittings.jpg',
    description:
      "Parker's Seal-Lok O-Ring Face Seal fitting design provides leak-free connections in applications with high-pressure, vibration and impulse environments. Using the new FastSeal nut, ORFS tube connections can be made in minutes without flanging or brazing.",
    udpSignal: 'CC_animation_11',
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
