import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ySJ2mt6b9z5NoU6pZXjeesmhuY-szHC_d2W6YupxzmU'
  }
});