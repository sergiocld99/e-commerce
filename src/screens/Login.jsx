import React, { useEffect, useState } from "react"
import SubmitButton from "../components/SubmitButton"
import { Pressable, StyleSheet, Text, View } from "react-native"
import InputForm from "../components/InputForm"
import { useDispatch } from "react-redux"
import { useLoginMutation } from "../services/authService"
import { setUser } from "../features/auth/authSlice"

const Login = ({navigation}) => {
  // estados
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorPw, setErrorPw] = useState("")

  // Store
  const dispatch = useDispatch()

  // RTK
  const [triggerLogin, result] = useLoginMutation()

  const onSubmit = () => {
    if (!email || !password) return

    triggerLogin({
      email,
      password,
      returnSecureToken: true
    })
  }

  useEffect(() => {
    if (result.isSuccess){
      setErrorPw("")
      dispatch(setUser({
        data: result.data
      }))
    } else if (result.isError) {
      console.log("Inicio de sesion fallido. Revise credenciales")
    }
  }, [result])

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Login to start</Text>
        <InputForm label={"Email"} onChange={(text) => setEmail(text.toLowerCase().trim())} error={""} />
        <InputForm label={"Password"} onChange={setPassword} error={errorPw} isSecure={true} />
        <SubmitButton onPress={onSubmit} title={"Send"} />
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signup}>Sign Up</Text>
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

export default Login