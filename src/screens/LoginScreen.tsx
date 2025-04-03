import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

export default function LoginScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 인사 문구 */}
      <View style={styles.header}>
        <Text style={styles.title}>어서오세요!</Text>
        <Text style={styles.subtitle}>여정입니다</Text>
      </View>

      {/* 이메일 입력 */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일 주소</Text>
        <TextInput 
          style={styles.input} 
          placeholder="예) jypus2@inha.edu"
          keyboardType="email-address"
        />
      </View>

      {/* 비밀번호 입력 */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput 
          style={styles.input} 
          placeholder="비밀번호" 
          secureTextEntry
        />
      </View>

      {/* 옵션 (체크박스 & 비밀번호 찾기) 부분 */}
      <View style={styles.optionRow}>
        <TouchableOpacity style={styles.optionLeft}>
          {/* 체크박스 대신 단순 텍스트 처리 */}
          <View style={styles.checkBox} />
          <Text style={styles.optionText}>개발 정보 기억하기</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.optionText, { color: '#999' }]}>
            비밀번호를 잊으셨나요?
          </Text>
        </TouchableOpacity>
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Main')} // 예시
      >
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      {/* 하단 계정 없음 + 가입하기 */}
      <View style={styles.bottomTextRow}>
        <Text style={{ marginRight: 5 }}>계정이 없으신가요?</Text>
        <TouchableOpacity>
          <Text style={styles.joinText}>가입하기</Text>
        </TouchableOpacity>
      </View>

      {/* 소셜 로그인 아이콘 */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#03C75A' }]}>
          <Text style={styles.socialText}>N</Text> 
          {/* 실제 네이버 아이콘으로 교체 */}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc' }]}>
          <Text style={styles.socialText}>G</Text> 
          {/* 실제 구글 아이콘 */}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#FEE500' }]}>
          <Text style={styles.socialText}>K</Text> 
          {/* 실제 카카오 아이콘 */}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialIcon, { backgroundColor: '#000' }]}>
          <Text style={[styles.socialText, { color: '#fff' }]}></Text> 
          {/* 실제 애플 아이콘 */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
  inputWrapper: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 5,
  },
  optionText: {
    fontSize: 12,
    color: '#666',
  },
  loginButton: {
    backgroundColor: '#000',
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bottomTextRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  joinText: {
    color: '#000',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 45,
    height: 45,
    borderRadius: 45,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});