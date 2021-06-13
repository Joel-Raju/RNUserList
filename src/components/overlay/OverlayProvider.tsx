import React, {createContext, useMemo, useState} from 'react';

interface OverlayCxtProps {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => any;
  OverlayContent: React.ReactNode;
  setOverlayContent: (node: React.ReactNode) => any;
  onBackdropPressCb: any;
  setBackdropPressCb: (cb: () => any) => any;
}

export const OverlayContext: React.Context<OverlayCxtProps> = createContext({});

export const OverlayProvider: React.FC = ({children}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [OverlayContent, setOverlayContent] = useState<React.ReactNode>();
  const [onBackdropPressCb, setBackdropPressCb] = useState(undefined);

  const value = useMemo(
    () => ({
      isVisible,
      setVisible,
      OverlayContent,
      setOverlayContent,
      onBackdropPressCb,
      setBackdropPressCb,
    }),
    [isVisible, OverlayContent, onBackdropPressCb],
  );

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
};
