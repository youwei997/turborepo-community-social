import { Ionicons } from '@expo/vector-icons';
import { api } from '@repo/convex/_generated/api';
import { useQuery } from 'convex/react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Native() {
  const topics = useQuery(api.topics.get);
  console.log(topics);
  const [phoneInputFocused, setPhoneInputFocused] = useState(false);
  const [codeInputFocused, setCodeInputFocused] = useState(false);
  const [codeBtnDisabled, setCodeBtnDisabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="close" size={24} color="#999" />
        </TouchableOpacity>
        <View style={styles.placeholder}></View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>手机验证码登录</Text>

        <View style={styles.inputContainer}>
          <View style={[styles.phoneContainer, phoneInputFocused && styles.inputFocused]}>
            <Text style={styles.countryCode}>+86</Text>
            <TextInput
              style={styles.input}
              placeholder="手机号"
              placeholderTextColor="#bbb"
              keyboardType="phone-pad"
              onFocus={() => setPhoneInputFocused(true)}
              onBlur={() => setPhoneInputFocused(false)}
              textAlignVertical="center"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={[styles.codeContainer, codeInputFocused && styles.inputFocused]}>
            <TextInput
              style={styles.codeInput}
              placeholder="请输入验证码"
              placeholderTextColor="#bbb"
              keyboardType="number-pad"
              onFocus={() => setCodeInputFocused(true)}
              onBlur={() => setCodeInputFocused(false)}
              textAlignVertical="center"
            />
            <TouchableOpacity style={styles.codeButton}>
              <Text style={styles.codeButtonText}>获取验证码</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={[styles.loginButton, { backgroundColor: '#FFB6B6' }]}>
          <Text style={styles.loginButtonText}>登录</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>账号密码登录</Text>
        </TouchableOpacity>
        <Text style={styles.footerDivider}>|</Text>
        <TouchableOpacity>
          <Text style={styles.footerText}>登录遇到问题</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <View style={styles.socialDivider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>社交账号登录</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <View style={[styles.socialIcon, { backgroundColor: '#1AAD19' }]}>
              <AntDesign name="wechat" size={28} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <View style={[styles.socialIcon, { backgroundColor: '#50B5FF' }]}>
              <AntDesign name="qq" size={28} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <View style={[styles.socialIcon, { backgroundColor: '#FF763B' }]}>
              <AntDesign name="weibo" size={28} color="#fff" />
            </View>
          </TouchableOpacity>
        </View> */}

        <Text style={styles.agreement}>
          注册即代表您同意 <Text style={styles.agreementLink}>《XXX社区协议》</Text>
        </Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 56,
  },
  backButton: {
    padding: 8,
  },
  placeholder: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'left',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 10, // Increased margin bottom for input containers
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2, // 更粗的底边
    borderBottomColor: '#e0e0e0', // 默认浅灰色
    paddingBottom: 8,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
  },
  inputFocused: {
    borderBottomColor: '#FFB6B6', // 确保与登录按钮颜色一致
  },
  countryCode: {
    fontSize: 18,
    color: '#333',
    marginRight: 8,
    fontWeight: '400',
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 18,
    color: '#333',
    padding: 0,
    textAlignVertical: 'center',
    includeFontPadding: false,
    lineHeight: 45,
    backgroundColor: 'transparent',
    borderWidth: 0,
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {}), // 仅对 Web 有效
  },

  codeInput: {
    flex: 1,
    height: 45,
    fontSize: 18,
    color: '#333',
    padding: 0,
    textAlignVertical: 'center',
    includeFontPadding: false,
    lineHeight: 45,
    backgroundColor: 'transparent',
    borderWidth: 0,
    ...(Platform.OS === 'web' ? { outlineStyle: 'none' } : {}), // 确保也对 Web 有效
  },
  codeButton: {
    backgroundColor: '#f5f5f5', // Lighter background for code button
    borderRadius: 18, // More rounded corners
    paddingVertical: 8,
    paddingHorizontal: 12, // Adjusted padding
    justifyContent: 'center',
    alignItems: 'center',
    height: 36, // Fixed height for the button
  },
  codeButtonText: {
    color: '#666', // Slightly darker text for code button
    fontSize: 13, // Slightly smaller font size
    fontWeight: '400',
  },
  loginButton: {
    backgroundColor: '#FFB6B6',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600', // Bolder text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30, // Increased margin top
  },
  footerText: {
    color: '#666', // Darker footer text
    fontSize: 14,
  },
  footerDivider: {
    color: '#ccc', // Lighter divider
    marginHorizontal: 12,
  },
  socialContainer: {
    position: 'absolute',
    bottom: 30, // Adjusted bottom position
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  socialDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25, // Increased margin bottom
    width: '70%', // Narrower divider
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0', // Lighter divider line
  },
  dividerText: {
    color: '#888', // Lighter divider text
    paddingHorizontal: 12,
    fontSize: 13,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute buttons more evenly
    marginBottom: 25, // Increased margin bottom
    width: '70%', // Consistent width with divider
  },
  socialButton: {
    // Removed marginHorizontal to rely on justifyContent: 'space-around'
  },
  socialIcon: {
    width: 48, // Slightly smaller icons
    height: 48,
    borderRadius: 24, // Half of width/height
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreement: {
    color: '#bbb',
    fontSize: 12,
    textAlign: 'center',
  },
  agreementLink: {
    color: '#FFB6B6',
    textDecorationLine: 'none',
  },
});
