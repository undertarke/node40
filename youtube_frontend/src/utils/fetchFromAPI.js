import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'token': localStorage.getItem("LOGIN_USER")
  },
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


export const getVideoAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video`, options);

  return data.data;
};


export const getVideoTypeAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-type`, options);

  return data.data;
};


export const getVideoByTypeAPI = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-by-type/${typeId}`, options);

  return data.data;
};



export const getVideoByIdAPI = async (videoId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-id/${videoId}`, options);

  return data.data;
};



export const signUpAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/user/signup`, model, options);

  return data;
};


export const loginAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/user/login`, model, options);

  return data;
};

export const loginFacebookAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/user/login-facebook`, model, options);

  return data;
};

export const getVideoCommentAPI = async (videoId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-comment/${videoId}`, options);

  return data.data;
};

export const commentAPI = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/video/post-comment`, model, options);

  return data.data;
};

export const resetTokenApi = async () => {
  const { data } = await axios.post(`${BASE_URL}/user/reset-token`, null, options);

  return data.data;
};


// middleware

axios.interceptors.response.use((response) => {

  return response;
}, (error) => {

  if (error.response.data == "TokenExpiredError") {
    // gọi API reset token
    resetTokenApi().then(result => {
      localStorage.setItem("LOGIN_USER", result)

    }).catch(err => {
      localStorage.removeItem("LOGIN_USER")

    }).finally(() => {
      window.location.reload()
    })

  }
  else if (error.response.status == "401") {
    localStorage.removeItem("LOGIN_USER")

  }

  return Promise.reject(error);
});