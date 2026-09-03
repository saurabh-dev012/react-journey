import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Currency API request failed: ${res.status}`)
        }
        return res.json()
      })
      .then((res) => setData(res[currency] || {}))
      .catch(() => setData({}))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;