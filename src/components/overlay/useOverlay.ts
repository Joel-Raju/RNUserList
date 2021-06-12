import {useContext, useEffect, useState} from 'react';
import {OverlayContext} from './OverlayProvider';

export const useOverlay = (onPressBackdrop?: () => any) => {
  const {
    isVisible,
    setVisible,
    onBackdropPressCb,
    setBackdropPressCb,
    setOverlayContent,
    OverlayContent,
  } = useContext(OverlayContext);

  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      if (onPressBackdrop && typeof onPressBackdrop === 'function') {
        setBackdropPressCb(() => onPressBackdrop);
      }
    }
  }, [isMounted, onBackdropPressCb, onPressBackdrop, setBackdropPressCb]);

  return {
    setOverlayContent,
    OverlayContent,
    isVisible,
    setVisible,
    onBackdropPress: () => {
      if (onBackdropPressCb && typeof onBackdropPressCb === 'function') {
        onBackdropPressCb();
      }
    },
  };
};
