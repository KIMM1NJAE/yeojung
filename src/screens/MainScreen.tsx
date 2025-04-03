import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>메인 화면</Text>
      <Text>여기는 여행 플랜 추천 등 주요 기능이 들어갈 예정입니다.</Text>
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
});