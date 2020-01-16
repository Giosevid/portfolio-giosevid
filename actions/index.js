import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1`,
  timeout: 3000
});

const setAuthHeader = () => {
  const token = Cookies.getJSON('jwt');
  if (token) {
    return { headers: {'authorization': `Bearer ${token}`}}
  }
  return undefined
};

const rejectPromise = resError => {
  let error;
  if (resError && resError.response && resError.response.data) {
    error = resError.response.data
  } else {
    error = resError
  }
  return Promise.reject(error)
};

export const getSecretData = async (req) => {
  return await axiosInstance.get('api/v1/secret', setAuthHeader(req) ).then(response =>  response.data);
};

export const getPortfolios = async () => {
  return await axiosInstance.get(`http://localhost:3000/api/v1/portfolios`).then(response =>  response.data);
};

export const getPortfolioById = async (id) => {
  return await axiosInstance.get(`http://localhost:3000/api/v1/portfolios/5e20767f9eb6ba45b01f3dcd`).then(response =>  response.data);
};

export const createPortfolio = async (portfolioData) => {
  return await axiosInstance.post('http://localhost:3000/api/v1/portfolios', portfolioData, setAuthHeader() )
    .then(response =>  response.data)
    .catch(error => rejectPromise(error))
};

export const updatePortfolio = async (portfolioData) => {
  return await axiosInstance.patch(`http://localhost:3000/api/v1/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader() )
    .then(response =>  response.data)
    .catch(error => rejectPromise(error))
};
