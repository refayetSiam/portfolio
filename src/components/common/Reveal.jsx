import { useRef } from 'react';
import { useOnScreen } from '../../hooks';

export function Reveal({ children, delay = 0, className = "", style = {} }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
