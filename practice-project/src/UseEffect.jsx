import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    let [fetchData,setFetchData] = useState([])

    useEffect(()=>
    {
        getData()
    },[])

    async function getData() {
        let api = await fetch("https://api.github.com/users")
        console.log(api);
        let Data = await api.json()
        console.log(Data);
        setFetchData(Data)
    }
    // getData()

  return (
    <div>
    <h1>UseEffect hook</h1>

    {/* {fetchData.map((ele) => {
        return (
        <li key={ele.id}>
            {ele.login}
        </li>
        );
    })} */}

    <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>type</th>
            <th>links</th>
          </tr>
        </thead>

        <tbody>
          {fetchData.map((ele) => (
            <tr>
              <td>{ele.id}</td>
              <td>{ele.login}</td>
              <td>
                <img src={ele.avatar_url} alt="avatar" width="50" />
              </td>
              <td>{ele.type }</td>
              <td>{ele.events_url }</td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  ) 
}

export default UseEffect