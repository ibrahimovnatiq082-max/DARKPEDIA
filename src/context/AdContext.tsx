import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdverticaAdConfig, AdverticaPlacement } from '../types';

interface AdContextType {
  adConfig: AdverticaAdConfig;
  updateAdConfig: (config: Partial<AdverticaAdConfig>) => void;
  resetAdConfig: () => void;
  isPlacementActive: (placement: AdverticaPlacement) => boolean;
}

const DEFAULT_ADVERTICA_CODE = `<ins style="width: 728px;height:90px" data-width="728" data-height="90" class="r495fc35294" data-domain="//data527.click" data-affquery="/ba4c3c3610ed1cc2a3c0/495fc35294/?placementName=default"><script src="//data527.click/js/responsive.js" async></script></ins>`;

const DEFAULT_ADVERTICA_CONFIG: AdverticaAdConfig = {
  enabled: true,
  publisherId: 'ADV-88492-DKP',
  headerZoneId: 'ADV_ZONE_HEADER_728x90',
  sidebarZoneId: 'ADV_ZONE_SIDEBAR_300x250',
  inContentZoneId: 'ADV_ZONE_INCONTENT_RESPONSIVE',
  footerZoneId: 'ADV_ZONE_FOOTER_970x90',
  customScriptCode: DEFAULT_ADVERTICA_CODE,
  showDemoNotice: true
};

const STORAGE_KEY = 'darkpedia_advertica_settings';

const AdContext = createContext<AdContextType | undefined>(undefined);

export const AdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adConfig, setAdConfig] = useState<AdverticaAdConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_ADVERTICA_CONFIG,
          ...parsed,
          customScriptCode: parsed.customScriptCode || DEFAULT_ADVERTICA_CODE
        };
      }
    } catch (e) {
      console.warn('Could not load Advertica settings from storage', e);
    }
    return DEFAULT_ADVERTICA_CONFIG;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(adConfig));
    } catch (e) {
      console.warn('Could not save Advertica settings to storage', e);
    }
  }, [adConfig]);

  const updateAdConfig = (config: Partial<AdverticaAdConfig>) => {
    setAdConfig(prev => ({ ...prev, ...config }));
  };

  const resetAdConfig = () => {
    setAdConfig(DEFAULT_ADVERTICA_CONFIG);
  };

  const isPlacementActive = (placement: AdverticaPlacement): boolean => {
    if (!adConfig.enabled) return false;
    switch (placement) {
      case 'header':
        return Boolean(adConfig.headerZoneId || adConfig.customScriptCode);
      case 'sidebar':
        return Boolean(adConfig.sidebarZoneId || adConfig.customScriptCode);
      case 'in_content':
        return Boolean(adConfig.inContentZoneId || adConfig.customScriptCode);
      case 'footer':
        return Boolean(adConfig.footerZoneId || adConfig.customScriptCode);
      default:
        return true;
    }
  };

  return (
    <AdContext.Provider
      value={{
        adConfig,
        updateAdConfig,
        resetAdConfig,
        isPlacementActive
      }}
    >
      {children}
    </AdContext.Provider>
  );
};

export const useAds = (): AdContextType => {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error('useAds must be used within an AdProvider');
  }
  return context;
};

export const useAd = useAds;

