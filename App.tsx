import { ThemeProvider } from '@shopify/restyle';
import { StatusBar } from 'expo-status-bar';
import Navigation from 'navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from 'utils/theme';
import { SWRConfig } from "swr"

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SWRConfig>
          <Navigation />
        </SWRConfig>
        <StatusBar translucent />
      </SafeAreaProvider>
    </ThemeProvider>
    
  );
}

