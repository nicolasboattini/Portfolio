import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full px-2 py-1 mb-2 w-auto text-xs text-center rounded transform -translate-x-1/2 left-1/2
        text-CREMA bg-gray-800 border-2 dark:border-AMARILLO border-AZUL">
          {text}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 
          border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 
          dark:border-t-AMARILLO border-t-AZUL
          "></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
