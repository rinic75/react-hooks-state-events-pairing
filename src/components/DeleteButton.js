import React from "react";

function DeleteButton({value, onDeleteHandle}) {
  function handleClick(e) {
    onDeleteHandle(e.target.value)
  }
  return(
    <div>
      <button onClick={handleClick} value={value}>Delete</button>
    </div>
  )
}

export default DeleteButton