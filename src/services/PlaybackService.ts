import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { PlayListData } from "../utils/Constants";

export async function initialisePlayer() {
    let isSetup = false
    try { 
        await TrackPlayer.getActiveTrackIndex()
        isSetup = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    } finally {
        return isSetup
    }
}

export async function addMusicTrack() {
    TrackPlayer.add(PlayListData)
    TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playbackService () {
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    }) 

    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    }) 

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    }) 

    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext
    }) 
}
