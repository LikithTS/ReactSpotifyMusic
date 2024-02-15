import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import TrackPlayer, { Track } from 'react-native-track-player'

type songInfoProps = PropsWithChildren<{
    track : Track | null | undefined
}>

const MusicInfo = ({track}: songInfoProps) => {
  return (
    <View style = {styles.container}>
        <View>
            <Text style = {styles.songTitle}>{track?.title}</Text>
            <Text style = {styles.songInfo}>{track?.album} . {track?.artist}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '90%',
        marginTop : 18,
        flexDirection : 'row',
        alignItems : 'baseline',
        justifyContent : 'center'
    },
    songTitle : {
        color : "#FFFFFF",
        fontWeight : '600',
        marginBottom : 10,
        textAlign : 'center'
    },
    songInfo : {
        color : "#d9d9d9",
        fontWeight : '400',
        marginBottom : 10
    }
})

export default MusicInfo