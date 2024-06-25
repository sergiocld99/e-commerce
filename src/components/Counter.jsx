import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector(state => state.counterSlice.value)
  const dispatch = useDispatch()

  return (
    <View style={{backgroundColor: 'lightgreen', paddingVertical: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20, alignItems: 'center'}}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.text}>-</Text>
        </Pressable>
        <Text style={styles.text}>{count}</Text>
        
        <Pressable style={styles.button}>
          <Text style={styles.text} onPress={() => dispatch(increment())}>+</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'gray',
    padding: 5,
    minWidth: 40
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Counter