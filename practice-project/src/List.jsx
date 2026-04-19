import React from 'react'
import { Employee} from './ListData.js'
import { movies } from './ListData.js'
// import flower4 from './assets/vite.svg'
// import react from './assets/react.svg'

const List = () => {
  return (
    <div>
    {/* <ul>{movies.map((ele)=>{
                return <li>{ele}</li>
            })
        }
        </ul> */}

        {/* <table border={2} cellPadding={5} cellSpacing={2}>
            <tr>
                <th>Ename</th>
                <th>E Id</th>
                <th>E Salary</th>
            </tr>
            {Employee.map((ele)=>{
                return <tr>
                     <td>{ele.eid}</td>
                     <td>{ele.Ename}</td>   
                     <td>{ele.sal}</td>
                </tr>
            })}
        </table> */}

        {/* <img src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_incoming&w=740&q=80" alt=""  height={200}/> */}

        {/* <img src={flower4} alt="" height={200} />
        <img src={react} alt=""  height={200}/> */}

        
    </div>
  )
}

export default List