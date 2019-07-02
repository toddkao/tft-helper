import axios from "axios";

const proxy = 'https://cors-anywhere.herokuapp.com/';
const tftEndpoint = "https://solomid-resources.s3.amazonaws.com/blitz/tft/data/";
const champIconEndpoint = "http://ddragon.leagueoflegends.com/cdn/9.13.1/";

const tft = ({ url, method }) => {
  return axios({url: proxy + tftEndpoint + url, method})
}

const riot = ({ url, method }) => {
  return axios({url: champIconEndpoint + url, method})
}

export { tft, riot };