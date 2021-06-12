import React from 'react';
import {useCallback} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
  View,
  BackHandler,
} from 'react-native';
import {useOverlay} from './useOverlay';

interface Props {
  backgroundImgUri: string;
}

const Overlay: React.FC<Props> = ({backgroundImgUri}) => {
  const {
    isVisible,
    OverlayContent: children,
    onBackdropPress,
  } = useOverlay('Overlay.tsx');

  const handleBackButtonClick = useCallback((): boolean => {
    onBackdropPress();
    return true;
  }, [onBackdropPress]);

  const handleBackdropPress = () => {
    onBackdropPress();
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {};
  }, [handleBackButtonClick]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={handleBackdropPress} style={{flex: 1}}>
        <ImageBackground
          style={styles.innerWrapper}
          source={{uri: backgroundImgUri}}
          imageStyle={styles.overlayWrapperImage}
          blurRadius={100}>
          {children}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  innerWrapper: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    opacity: 0.85,
  },
  overlayWrapperImage: {},
});

export default Overlay;
