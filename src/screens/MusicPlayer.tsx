import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react' 
import TrackPlayer, { Event, Track, useTrackPlayerEvents } from 'react-native-track-player'
import { PlayListData } from '../utils/Constants'
import MusicInfo from '../components/MusicInfo'
import MusicSeekBar from '../components/MusicSeekBar'
import ControlCenter from '../components/ControlCenter'


const {width} = Dimensions.get('window')

const MusicPlayer = () => {

    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackActiveTrackChanged: 
                const playingTrack = await TrackPlayer.getTrack(event.index ? event.index+1 : 0)
                setTrack(playingTrack)
                break;
        }
    })

    const renderArtWork = () => {
        return (
            <View style = {styles.listArtWrapper}>
                <View style = {styles.albumContainer}>
                    {track?.artwork && (
                        <Image  
                            style = {styles.albumArtImg}
                            source= {{uri : track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
      <FlatList 
        horizontal
        data={PlayListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        scrollEnabled={false}
      />
      <MusicInfo  track={track}/>
      <MusicSeekBar />
      <ControlCenter />
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // alignItems :'center',
        justifyContent : 'center',
        backgroundColor : '#001d23'
    },
    listArtWrapper : {
        width : width,
        justifyContent : 'center',
        alignItems : 'center'
    },
    albumContainer : {
        width : 300,
        height :300
    },
    albumArtImg : {
        height : '100%',
        borderRadius : 4
    }
})