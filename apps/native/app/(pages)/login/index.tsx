import { Ionicons } from '@expo/vector-icons';
import { api } from '@repo/convex-service/_generated/api';
import { useQuery } from 'convex/react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Native() {
  const topics = useQuery(api.topics.get);
  const [phoneInputFocused, setPhoneInputFocused] = useState(false);
  const [codeInputFocused, setCodeInputFocused] = useState(false);

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

        <Text style={styles.agreement}>
          注册即代表您同意 <Text style={styles.agreementLink}>《XXX社区协议》</Text>
        </Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
