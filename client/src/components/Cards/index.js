import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import ReactDOM from "react";
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../../utils/auth';


// import ThoughtForm from '../components/ThoughtForm';
// import PostList from '../components/Posts';
import FindFriends from '../FriendList';
import FriendList from '../FriendList';
// import database from '../../firebase';
// import './cards.css';
import { ADD_FRIEND } from '../../utils/mutations';
import './cards.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME} from '../../utils/queries';





function TinderCards(props, { onTinderCardChange }) {
    const { username: userParam } = useParams();

    const [addFriend] = useMutation(ADD_FRIEND);

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });
    console.log(loading)
    console.log(data)

    const user = data?.me || data?.user || [];
    console.log(user)
    // Navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/friends" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // }
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

            <div className="box">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing potential friends
                </h2>

                <div>
                    {userParam && (

                        <div>{user.username}
                            <FriendList
                                username={user.username}
                                friendCount={user.friendCount}
                                friends={user.friends}
                            />
                            <button onClick={handleClick}>
                                Add Friend
                            </button>
                        </div>
                    )}
                    {/* )} */}
                    {/* <div className="box">
                    <FindFriends />
                </div> */}
                    {/* <div className="tinderCards__cardContainer" onClick={onTinderCardChange}> */}

                        {user.map((data) => {
                            <>
                                <TinderCard
                                    className="swipe"
                                    key={user}
                                    preventSwipe={['up', 'down']}
                                ></TinderCard>
                                <div
                                    style={data.image}
                                    className="tinder-card">
                                    <h3>{data.username}</h3>
                                    <img src={data.image} alt={'avatar'} />
                                </div>
                            </>
                        }

                        )}

                    </div>

                    <div className="col-12 col-lg-3 mb-3">

                    </div>



                {/* </div> */}
            </div>
        </div>
    );
}
export default TinderCards;

// strava stuff

// class Act extends React.Component {
//     state = { activity: [], isLoading: true, error: null };

//     async componentDidMount() {
//       try {
//         const response = await fetch('https://www.strava.com/api/v3/athlete/activities?access_token=35b2879fd3a29d6bf20751a84121ff7be1ffea64');
//         const data = await response.json();
//         console.log(response.json());
//         this.setState({ activity: data.results, isLoading: false });
//       } catch (error) {
//         this.setState({ error: error.message, isLoading: false });
//       }
//     }

//     renderActivity = () => {
//       const { activity, isLoading, error } = this.state;

//       if (error) {
//         return <div>{error}</div>;
//       }

//       if (isLoading) {
//         return <div>Loading...</div>;
//       }

//       return activity.map(activity => (
//         <div key={activity.id.value}>
//           <img src={activity.picture.large} alt="avatar" />
//           <div>Hi, My name is</div>
//           <h3>{activity.name.first}</h3>
//         </div>
//       ));
//     };

//     render() {
//       return <main>{this.renderActivity()}</main>;
//     }
//   }

//   ReactDOM.render(<Act />, document.querySelector("#app"))

//   export default Act;

// import React from 'react';
// import StravaActivities from '../pages/strava';

// import Auth from '../utils/auth';

// import Posts from '../components/Posts';
// import FriendList from '../components/FriendList';
// import ThoughtForm from '../components/ThoughtForm';

// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

// function Profile() {
//     const { loading, data } = useQuery(QUERY_THOUGHTS);
//     // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
//     const { data: userData } = useQuery(QUERY_ME_BASIC);
//     const thoughts = data?.thoughts || [];
//     const loggedIn = Auth.loggedIn();

//     return (
//         <main>
//             <div className="flex-row justify-space-between">
//                 {loggedIn && (
//                     <div className="col-12 mb-3">
//                         <ThoughtForm />
//                     </div>
//                 )}

//                 {/* <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
//                     {loading ? (
//                         <div>Loading...</div>
//                     ) : (
//                         <Posts thoughts={thoughts} title="Some Feed for Thought(s)..." />
//                     )}
//                 </div> */}
{/* //                 {loggedIn && userData ? ( */ }
//                     <div className="col-12 col-lg-3 mb-3">
{/* //                         <FriendList */ }
//                             username={userData.me.username}
//                             friendCount={userData.me.friendCount}
//                             friends={userData.me.friends}
//                         />
//                     </div>
//                 ) : null}
//             </div>
//         </main>
//     );
// }

// export default Profile;