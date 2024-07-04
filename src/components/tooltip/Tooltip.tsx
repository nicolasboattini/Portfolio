import React, { useEffect, useRef, useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip = ({ text, children, position = 'top' }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    timerRef.current = window.setTimeout(() => {
      setVisible(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const tooltipPosition = () => {
    switch (position) {
      case 'top':
        return 'bottom-full mb-2 left-1/2 transform -translate-x-1/2';
      case 'bottom':
        return 'top-full mt-2 left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'right-full mr-2 top-1/2 transform -translate-y-1/2';
      case 'right':
        return 'left-full ml-2 top-1/2 transform -translate-y-1/2';
      default:
        return 'bottom-full mb-2 left-1/2 transform -translate-x-1/2';
    }
  };

  const arrowPosition = () => {
    switch (position) {
      case 'top':
        return 'left-1/2 -translate-x-1/2 top-full border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 dark:border-t-AMARILLO border-t-AZUL';
      case 'bottom':
        return 'left-1/2 -translate-x-1/2 bottom-full border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 dark:border-b-AMARILLO border-b-AZUL';
      case 'left':
        return 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 dark:border-l-AMARILLO border-l-AZUL';
      case 'right':
        return 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 dark:border-r-AMARILLO border-r-AZUL';
      default:
        return 'left-1/2 -translate-x-1/2 top-full border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 dark:border-t-AMARILLO border-t-AZUL';
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center">
        {children}
      </div>
      {visible && (
        <div
          ref={tooltipRef}
          className={`absolute ${tooltipPosition()} px-2 py-1 w-auto text-xs text-center rounded text-white bg-DARK-BG-light border-2 dark:border-AMARILLO border-AZUL`}
          style={{ zIndex: 9999 }}
        >
          {text}
          <div
            className={`absolute transform w-0 h-0 ${arrowPosition()}`}
            style={{ zIndex: 9999 }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
