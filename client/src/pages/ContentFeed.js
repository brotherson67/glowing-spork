import React from "react";
import { useQuery } from "@apollo/client";
import {  QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
import PostList from "../components/Posts";
// import StravaActivities from "./stravaTestCode";
import ThoughtForm from '../components/ThoughtForm';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';

const ContentFeed = () => {
  //useQuery to make a query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  //use optional chaining to negate checking if object exists before accessing its properties
  const thoughts = data?.thoughts || [];
  console.log(thoughts);
  // import coverImage from "../../assets/images/IMG_1939.JPEG";
  const loggedIn = Auth.loggedIn();
  return (
    <div>
      <section>
        <div>
          <section>
            {loggedIn && (
          <div id ="thought-form" className="col mb-3">
            <ThoughtForm />
          </div>
        )}
        {loggedIn && userData ? (
          <div id="firend-list" className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
            <div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <PostList
                  thoughts={thoughts}
                  title="Find your next adventure!"
                />
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ContentFeed;
