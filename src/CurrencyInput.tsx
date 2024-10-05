/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CurrencyInputProps = PropsWithChildren<{
    name : string;
    flag : string
}>

export default function CurrencyInput( props : CurrencyInputProps) {
  return (
    <>
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style = {styles.country}>{props.name}</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'blue',
    padding : 2 ,
    marginBottom : 5,
    textAlign : 'center',
  },
  country : {
    fontSize : 18,
    fontWeight : 'bold',
    color : 'blue',
    padding : 2 ,
    textAlign : 'center',
  },
})
