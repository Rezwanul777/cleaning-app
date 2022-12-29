
import React, { useEffect, useState } from 'react'
import dataFetcher from '../api/axios'

const Services = () => {
  const [services,setServices]=useState([])
  console.log(services);
  useEffect(()=>{
     (async()=>{
      const res = await dataFetcher.get('/service')
      setServices(res.data)
     })();
  },[])
  return (
    <div>

    </div>
  )
}

export default Services