import React, { useEffect, useRef } from 'react';
import { useAds } from '../../context/AdContext';
import { AdverticaPlacement } from '../../types';
import { Shield, Sparkles, ExternalLink, Megaphone } from 'lucide-react';

interface AdverticaAdProps {
  placement: AdverticaPlacement;
  className?: string;
}

export const AdverticaAd: React.FC<AdverticaAdProps> = ({ placement, className = '' }) => {
  const { adConfig, isPlacementActive } = useAds();
  const scriptContainerRef = useRef<HTMLDivElement>(null);

  const active = isPlacementActive(placement);

  // If custom script code is provided in settings, render it into container and execute scripts
  useEffect(() => {
    if (!active || !adConfig.customScriptCode || !scriptContainerRef.current) return;

    const container = scriptContainerRef.current;
    container.innerHTML = '';

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(adConfig.customScriptCode, 'text/html');
      const nodes = Array.from(doc.body.childNodes);

      const recursivelyAppendAndExecute = (sourceNode: ChildNode, targetParent: Node) => {
        if (sourceNode.nodeType === Node.ELEMENT_NODE) {
          const elem = sourceNode as HTMLElement;
          if (elem.tagName.toLowerCase() === 'script') {
            const script = document.createElement('script');
            for (let i = 0; i < elem.attributes.length; i++) {
              const attr = elem.attributes[i];
              script.setAttribute(attr.name, attr.value);
            }
            if (elem.innerHTML) {
              script.text = elem.innerHTML;
            }
            targetParent.appendChild(script);
          } else {
            const newElem = document.createElement(elem.tagName);
            for (let i = 0; i < elem.attributes.length; i++) {
              const attr = elem.attributes[i];
              newElem.setAttribute(attr.name, attr.value);
            }
            elem.childNodes.forEach((child) => {
              recursivelyAppendAndExecute(child, newElem);
            });
            targetParent.appendChild(newElem);
          }
        } else if (sourceNode.nodeType === Node.TEXT_NODE) {
          targetParent.appendChild(document.createTextNode(sourceNode.textContent || ''));
        }
      };

      nodes.forEach((node) => {
        recursivelyAppendAndExecute(node, container);
      });
    } catch (err) {
      console.error('Advertica script injection error:', err);
      container.innerHTML = adConfig.customScriptCode;
    }
  }, [adConfig.customScriptCode, active, placement]);

  if (!active || !adConfig.enabled || !adConfig.customScriptCode) {
    return null;
  }

  // If custom script is present and rendered
  return (
    <div className={`w-full max-w-full overflow-hidden my-3 font-sans ${className}`}>
      <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#888] dark:text-[#777] mb-1 px-1">
        <span className="flex items-center gap-1 font-semibold text-[#8B0000] dark:text-[#ff6b6b]">
          <Megaphone className="w-3 h-3" />
          Reklam
        </span>
      </div>
      <div className="flex justify-center items-center overflow-x-auto py-1 min-h-[60px] rounded-lg bg-black/5 dark:bg-white/5 border border-dashed border-[#8B0000]/20 dark:border-white/10">
        <div ref={scriptContainerRef} className="max-w-full flex justify-center" />
      </div>
    </div>
  );
};
