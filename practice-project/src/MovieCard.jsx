import React from 'react'

const MovieCard = ({Data}) => {
    let {Title, Poster, Year,Type} = Data
  return (
    <div>
      <section>
        <section>
            <h3> Title : {Title}</h3>
            <img src={Poster} alt="" height={100} />
            <h5>Year {Year}</h5>
            <p>Type : {Type}</p>
        </section>
      </section>
    </div>
  )
}

export default MovieCard
