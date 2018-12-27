import axios from 'axios';

const KEY='AIzaSyBlrM-Kftf-GV1mFuhdBSm1K5P5ZH7tyGY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
        
    }

});