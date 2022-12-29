import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Charts = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:3010/api/collect',
            );
            setData(result.data);
            
        };
        fetchData();
    }, []);




  return (
    <div>   
        {JSON.stringify(data)}
    </div>
  )
}

export default Charts