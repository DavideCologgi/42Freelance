import React from 'react'
import Thumbnail from './Thumbnail';
import LikeButton from './LikeButton';

function Video({ video }) {
    return (
      <div style={mystyle.container}>
        <Thumbnail video={video} />
        <a href={video.url} style={mystyle.link}>
          <h3 style={mystyle.linkContent}>{video.title}</h3>
          <p style={mystyle.linkContent}>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }

const mystyle = {
    container: {
        backgroundColor: "lightblue",
        marginTop: "20px",
        marginLeft: "20px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "40px",
        width: "800px",
        height: "300px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap"
    },
    link: {
        display: "flex",
        flexDirection: "column"
    },
    linkContent: {
        margin: "4px"
    }
}

export default Video
