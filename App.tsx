/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import { Dimensions, FlatList, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'

// const statusBarHeight = StatusBar.currentHeight;
// console.log(statusBarHeight)
// const newdata = statusBarHeight !== undefined ? statusBarHeight + 5 : 0;
// console.log(newdata)

//constants
import { currencyByNPR } from './src/constants'

//component
import CurrencyInput from './src/CurrencyInput'


export default function App() {
  const [input ,setInput ] = useState('');
  const [result ,setResult ] = useState('');
  const [targetCurrency , settargetCurrency ] = useState('')

  const buttonPressed = (targetvalue : Currency) => {
    if(!input){
      return Snackbar.show({
        text : 'Enter value ',
        backgroundColor : 'red' ,
        textColor : 'black',
      })
    }
    const value = parseFloat(input);
    console.log(value)

    if(!isNaN(value)){
      const convertedValue = value * targetvalue.value
      const resultOp = `${targetvalue.symbol} ${convertedValue.toFixed(2) }`
      setResult(resultOp)
      settargetCurrency(targetvalue.name)
    }
    else{
      return Snackbar.show({
        text : 'Not a valid Number ! ',
        backgroundColor : 'red' ,
        textColor : 'black',
      })
    }
  }

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={[styles.contained]}>
                <Text style={styles.textHeading}>Currency Converter</Text>
            </View>
            <View style={styles.ListFlat}>
              <Text style={{
                fontSize : 20,
                fontWeight : 'bold',
                color : 'blue',
                padding : 2 ,
                textAlign : 'center',
              }}>Input Currency</Text>
              <TextInput
                maxLength={14}
                value={input}
                clearButtonMode = "always" //for ios
                onChangeText = {setInput}
                keyboardType = "number-pad"
                placeholder="Enter amount in Rupees "
              />
              {
                result && <>
                  <Text>
                    {result}
                  </Text>
                </>
              }
              <FlatList
                numColumns={3}
                data={currencyByNPR}
                keyExtractor={ item => item.name }
                renderItem={({ item }) => (
                  <Pressable
                    style={[styles.button,targetCurrency === item.name && styles.selected ]}
                  onPress={() =>{
                    buttonPressed(item)
                  }}
                  >
                    <CurrencyInput {...item} />
                  </Pressable>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  contained: {
    // flex: 1,
    backgroundColor: 'grey',
    padding: 8,
    marginBottom: 8,
    height :StatusBar.currentHeight !== undefined ? StatusBar.currentHeight + 2 : 0,
    width :Dimensions.get('window').width,
  },
  textHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign : 'center',
  },
  ListFlat: {
    // height : 100,
    // width : 100 ,
    alignItems : 'center',
    justifyContent : 'center',
  },
  selected :{},
  button : {},
})
