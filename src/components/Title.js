import React from 'react'

function Title() {

    console.log('Title re rendering!!');

  return (
    <>
    <h2>
        useCallback Hook
    </h2>
    </>
  )
}

export default React.memo(Title)
// export default Title