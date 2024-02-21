import React from 'react'
import './../style/Leftmenu.css'
import { FaSpotify, FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi";
import { Menu } from './Menu';
import { MenuList } from './MenuList';
function LeftMenu() {
  return (
    <div className='left-menu'>
      <div className='logo-container'>
        <i><FaSpotify/></i>
        <h2>Spotify</h2>
        <i><FaEllipsisH/></i>
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Search....'/><i className='search-icon'><BiSearchAlt/></i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList}/>
    </div>
  )
}

export {LeftMenu} 
