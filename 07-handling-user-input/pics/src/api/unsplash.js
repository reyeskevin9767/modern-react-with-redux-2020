import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ZCs-0-EIyFO_thcTrupXdmrC_4U3CZ79n5FBnlY35-I',
  },
});
