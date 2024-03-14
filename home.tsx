import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'French', value: 'fr'},
  ]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={(value: any) => {
          i18n.changeLanguage(value);
        }}
      />

      <Text>{t('greeting')}</Text>
    </View>
  );
};

export default App;
