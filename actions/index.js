import axios from 'axios'
import Cookies from 'js-cookie'

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
  return await axios.get('api/v1/secret', setAuthHeader(req) ).then(response =>  response.data);
};

export const getPortfolios = async (req) => {
  return await axios.get(`api/v1/portfolios`).then(response =>  response.data);
};

export const getPortfolioById = async (id) => {
  return await axios.get(`api/v1/portfolios/${id}`).then(response =>  response.data);
};

export const createPortfolio = async (portfolioData) => {
  return await axios.post('api/v1/portfolios', portfolioData, setAuthHeader() )
    .then(response =>  response.data)
    .catch(error => rejectPromise(error))
};
