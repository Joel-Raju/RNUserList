import React, {createContext, useState} from 'react';

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

  return (
    <OverlayContext.Provider
      value={{
        isVisible,
        setVisible,
        OverlayContent,
        setOverlayContent,
        onBackdropPressCb,
        setBackdropPressCb,
      }}>
      {children}
    </OverlayContext.Provider>
  );
};
