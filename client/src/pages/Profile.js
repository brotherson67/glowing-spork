
import React from 'react';


import { Navigate, useParams } from 'react-router-dom';

import ThoughtForm from '../components/ThoughtForm';
import PostList from '../components/Posts';
import FriendList from '../components/FriendList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import { ADD_FRIEND } from '../utils/mutations';

import Auth from '../utils/auth';

const Profile = (props) => {
    const { username: userParam } = useParams();

    const [addFriend] = useMutation(ADD_FRIEND);

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });
    console.log(loading)
    console.log(data)
    
    const user = data?.me || data?.user || {};
    console.log(user)
    // Navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to
                sign up or log in!
            </h4>
        );
    }

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
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>

                {userParam && (
                    <button className="btn ml-auto" onClick={handleClick}>
                        Add Friend
                    </button>
                )}
            </div>

            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                    <PostList
                        thoughts={user.thoughts}
                        title={`${user.username}'s thoughts...`}
                    />
                </div>

                <div className="col-12 col-lg-3 mb-3">
                    <FriendList
                        username={user.username}
                        friendCount={user.friendCount}
                        friends={user.friends}
                    />
                </div>
            </div>
            <div className="mb-3">{!userParam && <ThoughtForm />}</div>
        </div>
    );
};

export default Profile;








// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// // import StravaActivities from '../pages/strava';
// import "./profile.css"
// import Auth from '../utils/auth';


// import PostList from '../components/Posts';
// import FriendList from '../components/FriendList';
// import ThoughtForm from '../components/ThoughtForm';

// import { ADD_FRIEND } from '../utils/mutations';

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME, QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

// const Profile = (props) => {
//     const [addFriend] = useMutation(ADD_FRIEND);
//     // useParams Hook retrieves the username from the URL, which is then passed to the useQuery Hook
//     const { username: userParam } = useParams();

//     const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//         variables: { username: userParam }
//     });

//     const user = data?.me || data?.user || {};

//     // redirect to personal profile page if username is the logged-in user's
//     if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//         return <Navigate to="/profile" />;
//     }

//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     if (!user?.username) {
//         return (
//             <h4>
//                 You need to be logged in to see this page. Use the navigation links above to sign up or log in!
//             </h4>
//         );
//     }
//     const handleClick = async () => {
//         try {
//             await addFriend({
//                 variables: { id: user._id }
//             });
//         } catch (e) {
//             console.error(e);
//         }
//     };
//     // const { username: userParam } = useParams();

//     // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     //     variables: { username: userParam }
//     //   });
//     // // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
//     // const { data: userData } = useQuery(QUERY_ME_BASIC);
//     // const thoughts = data?.thoughts || [];
//     // const loggedIn = Auth.loggedIn();

//     // const user = data?.me || data?.user || {};

//     return (
//         <main>
//             <div className="flex-row justify-space-between">
//                 {/* {loggedIn && ( */}
//                 <div className="col-12 mb-3 thought-box">
//                     <div className="thought-div">
//                         <ThoughtForm />
//                     </div>


//                 </div>
//                 {/* )} */}

//                 <div className={`col-12 mb-3`}>
//                 <PostList thoughts={user.thoughts} title={`${user.username}'s thoughts...`} />
//                 </div>
//                 {/* {loggedIn && userData ? ( */}
//                 <div className="col-12 col-lg-3 mb-3">
//                     <FriendList
//                         username={user.username}
//                         friendCount={user.friendCount}
//                         friends={user.friends}
//                     />
//                 </div>
//                 {/* ) : null} */}
//             </div>
//         </main>
//     );
// }

// export default Profile;