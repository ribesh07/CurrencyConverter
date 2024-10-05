/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'


type CurrencyInputProps = PropsWithChildren<{
    name : string;
    flag : ImageSourcePropType;
    symbol : string;
}>

export default function CurrencyInput( props : CurrencyInputProps) {
  return (
    <>
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.symbol}</Text>
            <Text style = {styles.country}>{props.name}</Text>
            <Image source={props.flag} style={{height:50,width:50}}/>
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
