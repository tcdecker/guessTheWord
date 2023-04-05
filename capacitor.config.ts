import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'guessTheWordv4',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: { SplashScreen: {backgroundColor: "#ffffffff"}}
};

export default config;
