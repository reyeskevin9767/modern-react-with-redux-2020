import axios from 'axios';

const KEY = 'AIzaSyBk7XyLlKe3Umot4skHes1WaahS8YFbJUE';

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY,
  type: 'video',
};

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    params: baseParams,
  },
});
