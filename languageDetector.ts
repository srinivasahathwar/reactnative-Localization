import AsyncStorage from '@react-native-async-storage/async-storage';

const languageDetector:any = {
  type: 'languageDetector',
  async: true,
  detect: async (callback:any) => {
    const savedLanguage = await AsyncStorage.getItem('language');
    const userLanguage = savedLanguage || 'en'; // Default to 'en' if no language is stored
    callback(userLanguage);
  },
  init: () => {},
  cacheUserLanguage: (lng:any) => {
    AsyncStorage.setItem('language', lng);
  },
};

export default languageDetector;