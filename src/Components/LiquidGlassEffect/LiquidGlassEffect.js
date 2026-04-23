const LiquidGlassEffect = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ display: 'none' }}
    >
      <filter id="frosted">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="80" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
};

export default LiquidGlassEffect;

 