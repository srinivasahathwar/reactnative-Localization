import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import I18n from './i18n'; // Import the configured i18n object

const App = () => {
  const toggleLanguage = (ev:any) => {
    console.log(ev)
    const newLocale = I18n.locale === 'en' ? 'fr' : 'en';
    I18n.locale = newLocale;
    // Optionally, you can save the selected language preference
    // to AsyncStorage or any other persistent storage.
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{I18n.t('greeting')}</Text>
      <TouchableOpacity onPress={toggleLanguage}>
        <Text>{I18n.t('change_language')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;