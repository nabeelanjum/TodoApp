import {useState} from 'react';

export default useApi = (apiFunc) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const apiRequest = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    if (!response.ok) {
      setError(true);
      return;
    }
    console.log('API RESPONSE: ', response.data);
    setData(response.data.data);
  }

  return { data, error, isLoading, apiRequest };
}