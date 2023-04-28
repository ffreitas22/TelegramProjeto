import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
   
    console.log(`Número de telefone ${phone} enviado para autenticação!`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./Telegram.png')} style={styles.logo} />
        <Text style={styles.logoText}>Telegram</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Inscreva-se para continuar</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de telefone ou E-mail"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhone(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>PRÓXIMO</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          Ao inscrever-se, você concorda com nossos Termos de Serviço e Política de Privacidade.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0088cc',
  },
  form: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#444',
  },
  input: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
    fontSize: 16,
    color: '#444',
  },
  loginButton: {
    backgroundColor: '#0088cc',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    marginTop: 20,
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});

export default LoginScreen;