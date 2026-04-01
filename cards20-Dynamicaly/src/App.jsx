import React from "react";
import { plantImages, plantInfo,numbers} from "./List.js";
import Cards from "./Cards.jsx";
const App = () => {
  let buttons ={
     borderRadius : 20,
     backgroundColor : "gray",
     height : 40,
     width : 80,
     padding : 5,
     color : "white"
  }
  const msg = () => {
  alert("Purchase successfully! 🎉");
};
  return (
    <div>
      <h1>20 Cards Create Dynamicly</h1>

      {/* Row 1  */}
       <section style={{ display : "flex"}}>
        <Cards>
          <h2>Plant 1</h2>
          <img src={plantImages[0]} alt="PLANT 1" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[0]}</h3>
          <p>{plantInfo[0]}</p>
           <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 2</h2>
          <img src={plantImages[1]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[2]}</h3>
          <p>{plantInfo[1]}</p>
           <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 3</h2>
          <img src={plantImages[6]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[1]}</h3>
          <p>{plantInfo[2]}</p>
           <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 4</h2>
          <img src={plantImages[3]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[3]}</h3>
          <p>{plantInfo[3]}</p>
           <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 5</h2>
          <img src={plantImages[5]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[4]}</h3>
          <p>{plantInfo[4]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
       </section>

       {/* row 2 */}
       <section style={{ display : "flex"}}> 
         <Cards>
          <h2>Plant 6</h2>
          <img src={plantImages[19]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[5]}</h3>
          <p>{plantInfo[5]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 7</h2>
          <img src={plantImages[8]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[6]}</h3>
          <p>{plantInfo[6]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 8</h2>
          <img src={plantImages[9]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[7]}</h3>
          <p>{plantInfo[7]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 9</h2>
          <img src={plantImages[2]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[5]}</h3>
          <p>{plantInfo[8]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 10</h2>
          <img src={plantImages[10]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[10]}</h3>
          <p>{plantInfo[9]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
       </section>

        {/* Row 3  */}
       <section style={{ display : "flex"}}>
        <Cards>
          <h2>Plant 11</h2>
          <img src={plantImages[10]} alt="PLANT 1" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[10]}</h3>
          <p>{plantInfo[10]}</p>
           <button style={buttons}onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 12</h2>
          <img src={plantImages[18]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[3]}</h3>
          <p>{plantInfo[11]}</p>
           <button style={buttons}onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 13</h2>
          <img src={plantImages[8]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[8]}</h3>
          <p>{plantInfo[12]}</p>
           <button style={buttons}onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 14</h2>
          <img src={plantImages[17]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[14]}</h3>
          <p>{plantInfo[13]}</p>
           <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 15</h2>
          <img src={plantImages[16]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[1]}</h3>
          <p>{plantInfo[14]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
       </section>

       {/* row 4 */}
       <section style={{ display : "flex"}}> 
         <Cards>
          <h2>Plant 16</h2>
          <img src={plantImages[15]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[11]}</h3>
          <p>{plantInfo[15]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 17</h2>
          <img src={plantImages[14]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[12]}</h3>
          <p>{plantInfo[16]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 18</h2>
          <img src={plantImages[16]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[13]}</h3>
          <p>{plantInfo[17]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 19</h2>
          <img src={plantImages[5]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[18]}</h3>
          <p>{plantInfo[18]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
         <Cards>
          <h2>Plant 20</h2>
          <img src={plantImages[18]} alt="" height={70} style={{borderRadius : "20px"}}/>
          <h3>Plant Id : {numbers[19]}</h3>
          <p>{plantInfo[19]}</p>
          <button style={buttons} onClick={msg}>Buy Now</button>
        </Cards>
       </section>
    </div>
  )
}

export default App
