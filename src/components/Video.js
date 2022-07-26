import React, { useState } from "react";
//import video from "../data/video";
import Buttons from "./Buttons";
import Comments from "./Comments";
import NewComment from "./NewComment";

function Video ({data}) {
  const [newComment, setNewComment] = useState(data.comments)
  function submithandle(e) {
    setNewComment([...newComment, e])
  }
  function handleDelete(e) {
    setNewComment(newComment.filter(comment => comment.user !== e ))
  }
  return(
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={data.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={data.title}
      />
      <h1>{data.title}</h1>
      <p>{data.views} Views | Uploaded {data.createdAt}</p>
      <Buttons data={data}/>
      <h2></h2>
      <Comments comments={newComment} onDeleteHandle={handleDelete}/>
      <NewComment onSubmitHandle = {submithandle}/>
    </div>
  )
}

export default Video