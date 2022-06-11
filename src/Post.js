import React from 'react'
import "./Post.css"
import InputOption from "./InputOption";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Post({name, desciption, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h4>{name}</h4>
                <p>{desciption}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpIcon} title="Like" color="Gray"/>
        </div>
    </div>
  )
}

export default Post