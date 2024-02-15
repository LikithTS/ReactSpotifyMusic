/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { addMusicTrack, initialisePlayer } from './services/PlaybackService';
import MusicPlayer from './screens/MusicPlayer';


function App(): React.JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup() {
      let isSetup = await initialisePlayer()
      if(isSetup) {
        await addMusicTrack()
      }
      setIsPlayerReady(isSetup)
  } 

  useEffect(() => {
      setup()
  }, [])

  if(!isPlayerReady) {
    return (
      <SafeAreaView>
          <ActivityIndicator />
      </SafeAreaView>
    )
  } 
 
  return (
    <View style= {styles.container}>
      <StatusBar/>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : "#2F363F"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
