import React, { useState } from "react";

function NewComment({onSubmitHandle}) {
  const [comment, setComment] = useState("")
  const [user, setUser] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    onSubmitHandle({user, comment})
  } 
  
  return(
    <div>
      <form className="newComment" onSubmit={handleSubmit}>
        <label> User Name
        <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <label> Comment
        <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
        </label>
        <input type="submit" value="Add comment" />
      </form>
    </div>
  )
}

export default NewComment