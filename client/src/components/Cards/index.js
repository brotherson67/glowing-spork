import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import ReactDOM from "react";
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { CardMedia, Avatar } from '@mui/material';

// import ThoughtForm from '../components/ThoughtForm';
// import PostList from '../components/Posts';
import FindFriends from '../FriendList';
import FriendList from '../FriendList';
import Profile from '../../pages/Profile'
// import database from '../../firebase';
// import './cards.css';
import { ADD_FRIEND } from '../../utils/mutations';
import './cards.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';

const db = [
    {
        name: 'Zendaya',
        url: 'https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG'
    },
    {
        name: "Gal",
        url: 'https://images.thestar.com/yhXh501qPISOfmqeIfUHklLmQyM=/1280x1024/smart/filters:cb(1612477907678)/https://www.thestar.com/content/dam/thestar/entertainment/2020/04/07/celebrities-face-backlash-as-they-reveal-new-sides-during-coronavirus-pandemic/gal_gadot.jpg'
    },
    {
        name: 'Justin',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGe2jdaDB4BUMwfzbcMQ8yHzTUYnOWUbyk3Q&usqp=CAU'
    },
    {
        name: 'Lizzo',
        url: 'https://static.wikia.nocookie.net/eurovisionamericassongcontest/images/c/c5/Lizzo.jpg/revision/latest?cb=20190502000645'
    },
    {
        name: 'Naomi',
        url: 'https://eu-images.contentstack.com/v3/assets/blt8bbf16c2d7a209e5/blt15a5490e5e1cba96/620a97989149560a6e17c68c/2H4GYFN.jpg'
    }
]




const TinderCards = ({ onTinderCardChange, users }, ...props) => {

    const characters = db
    const [lastDirection, setLastDirection] = useState()
    const { user: username } = useParams();

    const [addFriend] = useMutation(ADD_FRIEND);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    const { loading, data, error } = useQuery(useParams ? QUERY_USER : QUERY_ME, {
        variables: { user: username },
    });
    console.log(loading)
    console.log(data)

    const user = data?.me || data?.user || {};

    console.log(user)

    // Navigate to personal profile page if username is yours



    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id },
            });

        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container">
            <div className="container">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing....
                    {user.username}
                </h2>
            </div>

            <div className="box">


                <div>

                    {/* )} */}
                    {/* <div className="box">
                    <FindFriends />
                </div> */}
                    <div className="tinderCards__cardContainer" >

                        {/* {user.map((data) => { */}
                        {/* return ( */}
                        <>

                            {characters.map((character) =>
                                <TinderCard
                                    className="swipe cardContainer"
                                    key={character.name}
                                    preventSwipe={['up', 'down']}
                                >
                                    <div
                                        onClick={onTinderCardChange}
                                        // style={users.image}
                                        className="tinder-card">

                                        <h3>{character.name}</h3>
                                        <CardMedia src={character.url} alt={'avatar'} />
                                        <Avatar src={character.url} />
                                        <div className="cardContainer-divOuter">
                                            <div className="cardContainer-divInner">
                                                
                                                <ul className="cardContainer-ul">
                                                    
                                                    <button onClick={handleClick}>
                                                        <li className="cardContainer-li">💔</li>
                                                    </button>
                                                    <button>
                                                        <li className="cardContainer-li">❤️</li>
                                                    </button>
                                                    <button
                                                        className="tinderCard-boxButton" >
                                                        <a href="/chat" >
                                                            💌 Reach Out 💌
                                                        </a>

                                                    </button>
                                                    <button className="tinderCard-boxButton" >
                                                        <a href="profile/:username">
                                                            View Profile
                                                        </a>

                                                    </button>
                                                    <button className="tinderCard-boxButton" onClick={handleClick}>
                                                        Become Friends
                                                    </button>
                                                    <button className="tinderCard-boxButton" >
                                                        <a href="/">
                                                            Go Home
                                                        </a>

                                                    </button>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TinderCard>
                            )}
                        </>
                        {/* ) */}
                        {/* } */}

                        {/* )} */}

                        <div>
                            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
                        </div>
                        {/* {userParam && ( */}
                        {/* <div className="tinderCard-box">
                            <div className="tinderCard-boxInner">
                                <div className="innerDiv">
                                    <button
                                        className="tinderCard-boxButton" >
                                        <a href="/chat" >
                                            💌 Reach Out 💌
                                        </a>

                                    </button>
                                </div>

                                <div className="innerDiv">
                                    <button className="tinderCard-boxButton" >
                                        <a href="profile/:username">
                                            View Profile
                                        </a>

                                    </button>
                                </div>
                                <div className="innerDiv">
                                    <button className="tinderCard-boxButton" onClick={handleClick}>
                                        Become Friends
                                    </button>
                                </div>


                                <div className="innerDiv">
                                    <button className="tinderCard-boxButton" >
                                        <a href="/">
                                            Go Home
                                        </a>

                                    </button>
                                </div>


                                {/* <button className="tinderCard-boxButton" onClick={handleClick}>
                                    Add Friend
                                </button> */}
                            {/* </div>
                        </div>  */}
                        {/* )} */}
                    </div>

                    <div className="col-12 col-lg-3 mb-3">

                    </div>



                </div>
            </div>
        </div>
    );
}
export default TinderCards;


