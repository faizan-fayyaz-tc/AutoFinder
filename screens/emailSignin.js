/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const EmailSignin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignUp = () => {
    // Handle the sign-up action here
    // For example: navigation to the sign-up screen or any other action
    console.log('Sign Up button pressed');
  };
  const handleSignIn = () => {
    // Logic for handling sign-in action
    console.log('Signing in...');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.signInText}>Sign in to AutoFinder</Text>
        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.boldLabel]}>Email</Text>
          <View style={styles.emailInputWrapper}>
            <TextInput
              style={styles.emailInput} // Apply the emailInput style here
              placeholder="username@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#A0A0A0"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.boldLabel]}>Password</Text>
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#A0A0A0"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text style={styles.passwordVisibilityText}>
                {passwordVisible ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.inputContainer}>
          <Text style={[styles.inputLabel, styles.boldLabel]}>Password</Text>
          <View style={styles.passwordInputWrapper}>
            <TextInput
              style={styles.passwordInput} // Apply the passwordInput style here
              placeholder="Enter  password"
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#A0A0A0"
            />
          </View>
          <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
        </View> */}

        <TouchableOpacity style={styles.signUpButton}>
          <Text>
            Don't have an account?{' '}
            <Text style={styles.signUpText} onPress={handleSignUp}>
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 120,
    textAlignVertical: 'center',
    textAlign: 'left',
    color: 'black',
  },
  inputContainer: {
    marginTop: 30,
  },
  inputLabel: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  boldLabel: {
    fontWeight: 'bold', // Make the label bold
  },
  emailInputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Black bottom border for email input
  },
  emailInput: {
    backgroundColor: 'white',
    paddingVertical: 8,
    fontSize: 16,
    color: 'black',
  },

  passwordInputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row', // To align the text label 'Hide'/'Show' to the right
    justifyContent: 'space-between', // To create space between password input and text label
    alignItems: 'center', // Align items vertically
  },
  passwordVisibilityText: {
    color: 'grey',
    fontSize: 16,
  },
  // passwordInputWrapper: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: 'black', // Black bottom border for password input
  // },
  // passwordInput: {
  //   backgroundColor: 'white',
  //   paddingVertical: 8,
  //   fontSize: 16,
  //   color: 'black',
  // },
  // passwordField: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  forgotPasswordButton: {
    marginLeft: 'left',
    marginTop: 20,
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  signUpText: {
    textDecorationLine: 'underline',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: 'coral', //(#ff7f50)
    padding: 15,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmailSignin;
