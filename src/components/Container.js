import React from 'react';
import IconStar from "../assets/images/icon-star.svg";
import Text from "./Text";
import '../assets/sass/main.scss'



function Container() {
  return (
    <div className='container-rating'>
    <div className='icon-circle'>
     <img src={IconStar} alt="IconStar" className='icon' />
     </div>
     <Text/>
    </div>
  )
}

export default Container