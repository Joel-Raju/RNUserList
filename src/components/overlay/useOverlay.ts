import {useContext, useEffect, useState} from 'react';
import {OverlayContext} from './OverlayProvider';

export const useOverlay = (name: string, onPressBackdrop?: () => any) => {
  console.log('useoverlay hook...   component', name);
  console.log('useoverlay hook...', onPressBackdrop);
  const {
    isVisible,
    setVisible,
    onBackdropPressCb,
    setBackdropPressCb,
    setOverlayContent,
    OverlayContent,
  } = useContext(OverlayContext);

  const [cName, setCName] = useState('');

  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setCName(name);
  }, []);

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
      console.log('printing cName.......', cName);
      console.log('printing cName.......', onBackdropPressCb);
      if (onBackdropPressCb && typeof onBackdropPressCb === 'function') {
        onBackdropPressCb();
      }
    },
  };
};
