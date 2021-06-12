import React from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';
import Contacts from './src/containers/Contacts';
import {OverlayProvider, Overlay} from './src/components';
import {Colors} from './src/utils/colors';

const OVERLAY_BG_IMG =
  'https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.DARK_BG : Colors.LIGHT_BG,
  };

  return (
    <OverlayProvider>
      <SafeAreaView style={[{flex: 1}, backgroundStyle]}>
        <View>
          <Contacts />
          <Overlay backgroundImgUri={OVERLAY_BG_IMG} />
        </View>
      </SafeAreaView>
    </OverlayProvider>
  );
};

export default App;
