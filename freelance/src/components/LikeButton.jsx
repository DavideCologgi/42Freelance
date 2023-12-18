import React, { useState } from 'react'

function LikeButton(video) {
    const [clicked, setClicked] = useState(false)

  return (
    <div>
        <i onClick={() => setClicked(!clicked)} style={{color: clicked ? 'blue' : 'black'}} className="fa fa-thumbs-up" ></i>
    </div>
  )
}

export default LikeButton