import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Slopebed-Front',
  webDir: 'www',
  server: {
    androidScheme: 'http'
  },
  android: {
    allowMixedContent: true
  },
  cordova: {
    preferences: {
      bluetooth_restore_state: "true",
      accessBackgroundLocation: "false",
    },
  }
};

export default config;
