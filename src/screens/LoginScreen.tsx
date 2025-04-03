import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      <TextInput 
        style={styles.input} 
        placeholder="이메일 입력" 
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input} 
        placeholder="비밀번호 입력" 
        secureTextEntry
      />
      <Button 
        title="로그인" 
        onPress={() => navigation.navigate('Main')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24, 
    marginBottom: 20,
  },
  input: {
    width: '80%', 
    height: 40, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    marginBottom: 15, 
    paddingHorizontal: 10,
  },
});