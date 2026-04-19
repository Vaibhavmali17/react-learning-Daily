// import React, { useState } from "react";
// import  foods  from "./FoodList.js";

// const FoodCard = () => {
//     let [index , setIndex]= useState(0)
//     let ChangeFood =()=>{
//         setIndex((ele)=>{
//             return ele+1
//         }
//     )
//     }
//     let FoodList = foods[index]
//     return(
//         <div>
//         <h1>{FoodList.foodname}</h1>
//         <img src={FoodList.foodimg} alt="shdjkh" height={200}/> 
//         <button onClick={ChangeFood}>see another option</button>
//         </div>
//     )
// }
// export default FoodCard;


import React, { useState } from "react";
import foods from "./FoodList.js";

const FoodCard = () => {
  const [index, setIndex] = useState(0);

  const changeFood = () => {
    setIndex((prev) => (prev + 1) % foods.length); // loops back to 0
  };

  const food = foods[index];

  return (
    <div>
      <h1>{food.foodname}</h1>
      <img src={food.foodimg} alt={food.foodname} height={200} />
      <p>{index + 1} / {foods.length}</p>
      <button onClick={changeFood}>See Another Option</button>
    </div>
  );
};

export default FoodCard;