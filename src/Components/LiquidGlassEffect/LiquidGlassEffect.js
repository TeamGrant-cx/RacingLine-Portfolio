const LiquidGlassEffect = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none', overflow: 'hidden' }}
    >
      <defs>
        <filter id="frosted" primitiveUnits="objectBoundingBox" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.005 0.005" numOctaves="4" seed="2" result="map" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.015" result="blur" />
          <feDisplacementMap in="blur" in2="map" scale="0.3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
};

export default LiquidGlassEffect;

 