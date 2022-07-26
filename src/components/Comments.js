import React, { useState } from "react";
import Comment from "./Comment";
import DeleteButton from "./DeleteButton";

function Comments({ comments, onDeleteHandle }) {
  console.log(comments)
  const [commentButton, setCommentButton] = useState(true)
  const renderComments = comments.map(comment => {
    return (
      <div>
        <Comment key={comment.user} comment={comment} />
        <DeleteButton value={comment.user} onDeleteHandle={onDeleteHandle}/>
      </div>
    )
  })


  function handleClick() {
    setCommentButton(!commentButton)
  }
  return (
    <div>
      <button className="comments" onClick={handleClick}>
        {commentButton ? "Hide Comments" : "Show Comments"}
      </button>
      {commentButton ? renderComments : null}
    </div>
  )
}

export default Comments