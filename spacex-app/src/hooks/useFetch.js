// src/hooks/useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v4/${endpoint}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading };
}
