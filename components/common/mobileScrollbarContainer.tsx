import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

const MobileScrollbarContainer = ({children}) => {

  return (
    <PerfectScrollbar style={{maxHeight: "50vh"}}>
        <div style={{overflow: "auto"}}>{children}</div>
    </PerfectScrollbar>
  )
}

export default MobileScrollbarContainer