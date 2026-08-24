import React, { useEffect, useRef } from 'react';

interface RealAdBannerProps {
  className?: string;
  id?: string;
}

export const RealAdBanner: React.FC<RealAdBannerProps> = ({ className = '', id }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Clear previous contents to prevent duplicates
    container.innerHTML = '';

    try {
      // Create the ins element with the exact required attributes
      const ins = document.createElement('ins');
      ins.style.width = '728px';
      ins.style.height = '90px';
      ins.style.display = 'inline-block';
      ins.setAttribute('data-width', '728');
      ins.setAttribute('data-height', '90');
      ins.className = 'r495fc35294';
      ins.setAttribute('data-domain', '//data527.click');
      ins.setAttribute('data-affquery', '/ba4c3c3610ed1cc2a3c0/495fc35294/?placementName=default');

      // Create the script element
      const script = document.createElement('script');
      script.src = '//data527.click/js/responsive.js';
      script.async = true;
      script.onerror = () => {
        // Silently handle adblock or network errors
      };

      ins.appendChild(script);
      if (isMounted) {
        container.appendChild(ins);
      }
    } catch {
      // Catch any unexpected DOM errors safely
    }

    return () => {
      isMounted = false;
      try {
        if (container) {
          container.innerHTML = '';
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <div 
      id={id}
      className={`w-full my-6 flex flex-col items-center justify-center font-sans ${className}`}
    >
      <div className="w-full max-w-[760px] flex items-center justify-between text-[10px] uppercase font-mono tracking-wider text-[#71717a] dark:text-[#a1a1aa] mb-1 px-2">
        <span className="flex items-center gap-1 font-semibold text-[#8B0000] dark:text-[#ef4444]">
          REKLAM
        </span>
        <span className="text-[9px] opacity-60">SPONSORED</span>
      </div>

      <div className="w-full max-w-full overflow-x-auto flex justify-center items-center py-2 px-1 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-[#e4e4e7] dark:border-[#27272a] min-h-[106px]">
        <div ref={containerRef} className="flex items-center justify-center min-w-[320px] max-w-full overflow-hidden" />
      </div>
    </div>
  );
};
