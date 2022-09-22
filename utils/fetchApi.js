import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "4f83cba677mshad0eb34f5e94d96p1b8124jsn0c195df0aa1b",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
