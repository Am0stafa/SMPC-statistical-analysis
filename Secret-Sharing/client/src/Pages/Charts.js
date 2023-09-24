import React,{useEffect,useState} from 'react'
import axios from 'axios'
import stringify from "json-stringify-pretty-compact";

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
        <pre>{stringify(data)}</pre>
    </div>
  )
}

export default Charts