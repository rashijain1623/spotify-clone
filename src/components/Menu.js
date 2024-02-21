import { useEffect } from "react"
import React from 'react';
function Menu({title,menuObject}) {
    useEffect(()=>{
        const allLi=document.querySelector('.menu-container').querySelectorAll('li')
        console.log(allLi)
    },[])
  return (
    <div className='menu-container'>
      <p className='title'>{title}</p>
      <ul>{
        menuObject && menuObject.map((li)=>(
            <li>
                <a href='#'><i>{li.icon}</i>
                <span>{li.name}</span></a>
            </li>
        ))
      }</ul>
    </div>
  )
}

export {Menu}
