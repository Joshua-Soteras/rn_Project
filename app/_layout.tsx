import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'KHData': require('/CSULA/rn_Project/rn_Project/assets/fonts/KHData.otf'),
    'KHGummi': require('/CSULA/rn_Project/rn_Project/assets/fonts/KHGummi.otf'),
    'KHMenu': require('/CSULA/rn_Project/rn_Project/assets/fonts/KHMenu.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      
       {/* 
          Changes made: references (tabs) which has a differnet layout
          headerShown is chane to false, otherwise there would be two headers being shown
       */}
      <Stack.Screen 
        name="(tabs)"
        options = { 
          
          {headerShown: false}
        }
     
      />
    </Stack>
  );
}
