import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        { title: 'Onyi papa', duration : '10:17'},
        { title: 'Kuche kuche', duration : '13:46'},
        { title: 'onyagngalemo', duration : '24:12'},
        { title: 'Omondi Tony' , duration : '14:47'}
    ];
};

const selectedSongReducer = (selectedSong=null,action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
});