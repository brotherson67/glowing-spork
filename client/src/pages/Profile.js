import React from 'react';
import StravaActivities from '../pages/strava';
import "./profile.css"
import Auth from '../utils/auth';

import Posts from '../components/Posts';
import FriendList from '../components/FriendList';
import ThoughtForm from '../components/ThoughtForm';

import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

function Profile() {
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    const { data: userData } = useQuery(QUERY_ME);
    const thoughts = data?.thoughts || [];
    const loggedIn = Auth.loggedIn();
    
    const user = data?.me || data?.user || {};

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3 thought-box">
                        <div className="thought-div">
                        <ThoughtForm />
                        </div>
                        
                        
                    </div>
                )}
                
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <Posts thoughts={thoughts} title="Some Feed for Thought(s)..." />
                    )}
                </div>
                {loggedIn && userData ? (
                    <div className="col-12 col-lg-3 mb-3">
                        <FriendList
                            username={userData.me.username}
                            friendCount={userData.me.friendCount}
                            friends={userData.me.friends}
                        />
                    </div>
                ) : null}
            </div>
        </main>
    );
}

export default Profile;