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
        <View style={[styles.buttonContainer,styles.elevatedButton]}>
            <Image source={props.flag} style={{height:80,width:80}}/>
            <Text style={styles.symbol}>{props.symbol}</Text>
            <Text style = {styles.country}>{props.name}</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent : 'center',
    padding : 14,
    margin : 10,
    borderRadius : 10,
    backgroundColor : 'lightgrey',
  },
  elevatedButton : {
    elevation : 10,
    shadowColor : 'black',
    shadowOffset : {
      width : 0,
      height : 2,
    },
    shadowOpacity : 0.5,
  },
  symbol : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'black',
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
