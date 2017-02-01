import React from 'react';
import { TextInput, View, Text } from 'react-native';

const SearchInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize='none'
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingLeft: 10,
    flex: 1,
    fontSize: 15
  },
  containerStyle: {
    height: 35,
    width: 150,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    // flexGrow: 1,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    }
  }
};

export { SearchInput };
