import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const Axios = () => {
    let [fetchData, setFetchData]= useState([])

    async function getData(){
        let getApi = await axios.get("https://api.github.com/users")
        console.log(getApi);
        setFetchData(getApi.data)
    }
    useEffect(()=>{
         getData()
    },[])
   
  return (
    <div>
      {fetchData.map((ele,index)=>{
        // return <div>
        //     <h2><li>{ele.login}</li></h2>
        //     <img src={ele.avatar_url} alt=""height={100} />
        //     </div>
        return  <Fragment  key={ele.id}>
                {/* <li  key={ele.id}>{ele.login} - {index}</li> */}
                <li>{ele.login} - {index}</li>
                <img src={ele.avatar_url} alt=""height={100} />
        </Fragment>
        
      })}
    </div>
  )
}
export default Axios
