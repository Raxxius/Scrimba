import React, { useState } from 'react';

const Reset = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEvent = () => {
    setIsHovering(current => !current)
  }

  return (
    <div 
      className="reset"
      cursor="pointer"
      onClick={props.onClickReset}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      style={{
        cursor: isHovering ? 'pointer' : 'default',
        backgroundColor: isHovering ? 'grey' : 'darkgrey',
        color: isHovering ? 'white' : 'black',
        width: '100px',
        fontSize: '20px',
        border: '2px solid black',
        borderRadius: '15px',
        margin: 'auto',
      }}
      >
        <p>Reset</p>
    </div>
  )
}

export default Reset