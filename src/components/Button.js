import React from 'react'

function Button({handleClick,children}) {
    console.log('Renderin button', children);
  return (
    <button onClick={()=>handleClick()}>{children}</button>
  )
}

export default React.memo(Button)
// export default Button