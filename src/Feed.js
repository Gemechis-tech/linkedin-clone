import React from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import { CalendarViewDay, Event, Subscriptions } from '@material-ui/icons';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title="Video" color="#E70B5F9"/>
                    <InputOption Icon={Event} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#C0CBCD"/>
                </div>
            </div>

            <Post name='Gemechis Shiferaw' description='This is a test' />
        </div>
    )
}

export default Feed