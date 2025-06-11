import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {DodoPaymentProvider} from 'dodopayments-sdk-react-native';
import PaymentScreen from './src/PaymentScreen';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const safePadding = '5%';

  return (
    <DodoPaymentProvider publishableKey={process.env.DODO_PAYMENTS_PUBLISHABLE_KEY}>
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              paddingHorizontal: safePadding,
              paddingBottom: safePadding,
              height: '100%',
              display: "flex",
              flexDirection: "column",
            }}>
            <PaymentScreen />
          </View>
        </ScrollView>
      </View>
    </DodoPaymentProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
