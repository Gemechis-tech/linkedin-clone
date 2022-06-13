import React, { useState } from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import { CalendarViewDay, Event, Subscriptions } from '@material-ui/icons';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();
    }
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title="Video" color="#E70B5F9"/>
                    <InputOption Icon={Event} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#C0CBCD"/>
                </div>
            </div>

            {posts.map((post) => (
                <Post />
            ))}
            <Post name='Gemechis Shiferaw' description='This is a test' message='I Like Burger'/>
        </div>
    )
}

export default Feed