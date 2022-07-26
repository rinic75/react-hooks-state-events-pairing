import React, {useState} from "react";

function Buttons({ data }) {
  const [upvote, setUpvote] = useState(data.upvotes)
  const [downvote, setDownvote] = useState(data.downvotes)
  function handleUp() {
    setUpvote(upvote+1)
  }
  function handleDown() {
    setDownvote(downvote-1)
  }
 
  return (
    <div>
      <button className="upvotes" onClick={handleUp}>
        {upvote} 👍
      </button>
      <button className="downvotes" onClick={handleDown}>
        {downvote} 👎
      </button>
    </div>
  )
}

export default Buttons