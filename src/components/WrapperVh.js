import React from 'react'
import BGImage from '../images/tulum.jpg'



const WrapperVh = ({ children }) => (
  <div
    style={{
      backgroundImage: `url(${BGImage})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      height: `100vh`,
      overflow: `hidden`,
      
    }}
  >
    {children}
  </div>
)

export default WrapperVh