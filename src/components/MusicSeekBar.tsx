import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useProgress } from 'react-native-track-player'
import Slider from '@react-native-community/slider'

const MusicSeekBar = () => {
    const {position, duration} = useProgress()

  return (
    <View>
      <Slider
        style={styles.sliderContainer}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        />
        <View style = {styles.timerContainer}>
          <Text style = {styles.timer}>{new Date(position*1000).toISOString().substring(15,19)}</Text>
          <Text style = {styles.timer}>{new Date((duration -position)*1000).toISOString().substring(15,19)}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderContainer:{
      height : 40,
      marginTop : 25,
      marginStart : 15,
      marginEnd : 15,
      flexDirection : 'row'
    },
    timerContainer : {
      flexDirection : 'row',
      marginStart : 25,
      marginEnd : 25,
      justifyContent : 'space-between'
    },
    timer : {
        color : "#FFFFFF"
    }
})

export default MusicSeekBar