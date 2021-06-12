import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  View,
  BackHandler,
} from 'react-native';
import {useOverlay} from './useOverlay';

interface Props {
  backgroundImgUri: string;
}

const Overlay: React.FC<Props> = ({backgroundImgUri}) => {
  const {isVisible, OverlayContent: children, onBackdropPress} = useOverlay();

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
    elevation: 1000,
  },
  innerWrapper: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  overlayWrapperImage: {
    opacity: 0.85,
  },
});

export default Overlay;
