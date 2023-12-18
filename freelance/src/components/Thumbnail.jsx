import React from 'react'

function Thumbnail({video}) {
  return (
    <div style={thumbnail.div}>
        <img src="https://source.unsplash.com/900x900/?italy,travel" style={thumbnail.img}/>
    </div>
  )
}

const thumbnail = {
    img: {
        width: "300px",
        height: "250px",
        imageURL: "https://source.unsplash.com/900x900/?italy,travel",
        backgroundSize: "cover"
    }
}

export default Thumbnail