import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signUpSchema } from '../validations/signUpSchema'

const SignUp = ({navigation}) => {
  // estados
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPw, setConfirmPw] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPw, setErrorPw] = useState("")
  const [errorConfirmPw, setErrorConfirmPw] = useState("")
  const dispatch = useDispatch()

  // RTK Hook: trigger realiza operación, result informa
  const [triggerSignUp, result] = useSignUpMutation()

  const onSubmit = () => {
    // CLEAR ERRORS
    setErrorEmail("")
    setErrorPw("")
    setErrorConfirmPw("")
    
    try {
      // validations
    signUpSchema.validateSync({
      email,
      password,
      confirmPassword: confirmPw
    })
    
    triggerSignUp({
      email: email.toLowerCase().trim(), 
      password,
      returnSecureToken: true
    })
    } catch(err) {
      console.log(err.path, err.message)
      switch(err.path){
        case 'email':
          setErrorEmail(err.message)
          break
        case 'password':
          setErrorPw(err.message)
          break
        case 'confirmPassword':
          setErrorConfirmPw(err.message)
          break
      }
    }
    
  }

  useEffect(() => {
    if (result.isSuccess){
      dispatch(setUser({
        data: result.data
      }))
    }
  }, [result])

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <InputForm label={"Email"} onChange={setEmail} error={errorEmail} />
        <InputForm label={"Password"} onChange={setPassword} error={errorPw} isSecure={true} />
        <InputForm label={"Confirm Password"} onChange={setConfirmPw} error={errorConfirmPw} isSecure={true} />
        <SubmitButton onPress={onSubmit} title={"Send"} />
        <Text>Do you already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signup}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '90%',
    flexDirection: 'column',
    gap: 10
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  signup: {
    color: 'blue'
  }
})

export default SignUp