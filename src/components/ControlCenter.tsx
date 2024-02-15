import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TrackPlayer, { PlaybackState, State, usePlaybackState } from 'react-native-track-player'
import { getPlaybackState } from 'react-native-track-player/lib/trackPlayer'

const ControlCenter = () => {

    const playbackState = usePlaybackState()

    const skipToPrevious = async() => {
       await TrackPlayer.skipToPrevious()
    }

    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    const togglePlayback = async (playback: State | undefined) => {
        const currentTrack = await TrackPlayer.getActiveTrackIndex()
        if(currentTrack !== null) {
            if(playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }   
        }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
            <Icon name = "skip-previous" size = {40} style = {styles.icon}/>
        </Pressable>
        <Pressable onPress={() => togglePlayback(playbackState.state)}>
            <Icon name = {playbackState.state === State.Playing ? "pause" : "play-arrow"} size = {40} style = {styles.icon}/>
        </Pressable>
        <Pressable onPress={skipToNext}>
            <Icon name = "skip-next" size = {40} style = {styles.icon}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        margin : 40
    },
    icon : {
        color: '#FFFFFF',
    }
})

export default ControlCenter