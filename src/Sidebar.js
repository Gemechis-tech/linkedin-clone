import React from 'react'
import './Sidebar.css'
import { Avatar } from "@material-ui/core";

function Sidebar() {

  const recentItem = (topic) => (
    <div  className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>

    </div>
  )

  return (
    <div className="sidebar">
      <div className='sidebar__top'>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=1024&h=683&fm=webp" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Gemechis Shiferaw</h2>
        <h4>gemechisshiferawk@gmail.com</h4>

      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>1,111</p>
        </div>
        <div className='sidebar__stat'>
        <p>Views on post</p>
          <p className='sidebar__statNumber'>2,345</p>
        </div>
      </div>
<div className='sidebar__button'>
  <p>Recent</p>
  {recentItem('reactjs')}
  {recentItem('Programming')}
  {recentItem('SoftwareEngineer')}
  {recentItem('design')}
  {recentItem('developer')}
  

</div>

    </div>
  )
}

export default Sidebar