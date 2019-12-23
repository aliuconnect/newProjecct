import axios from 'axios'

const URL = 'https://rallycoding.herokuapp.com/api/music_albums';

export const getList = () => axios.get(URL)
