import React, {useEffect, useState} from 'react';
import {useOverlay} from './useOverlay';

const OverlayContent: React.FC = ({children}) => {
  const {setOverlayContent} = useOverlay('OverlayContent.tsx');
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      setOverlayContent(children);
    }
  }, [isMounted, children, setOverlayContent]);

  return null;
};

export default OverlayContent;
