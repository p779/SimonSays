import { Button, View, Image } from 'react-native';
import React, { useEffect, useState } from "react";
import stylesHomePage from '../style/HonePageStyle';

export default function HomePage({ navigation, bestTenRresults }) {

  return (
    <View style={stylesHomePage.container}>

      <Button
        title="GO TO THE GAME"
        onPress={() => navigation.navigate('Game')}
      />

    {bestTenRresults.map((value)=>{
        return (
            <View style={stylesHomePage.resultContainer}>
                <Text>{value.name}</Text>
                <Text>{value.score}</Text>
            </View>   
        )
    })}

    </View>
  );
}