import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import PostList from '../components/Posts';
import StravaActivities from './strava';


const ContentFeed = () => {
    //useQuery to make a query request
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    //use optional chaining to negate checking if object exists before accessing its properties
    const thoughts = data?.thoughts || [];
    console.log(thoughts);
// import coverImage from "../../assets/images/IMG_1939.JPEG";

    return (
        <div>
            <section>
            {/* <Hero img={coverImage}/> */}
            <div>
            {loading ? (
        <div>Loading...</div>
      ) : (
        <PostList thoughts={thoughts} title="Find your next adventure!" />
      )}
            </div>
            </section>
            <StravaActivities />
            
        </div>
    );
}

export default ContentFeed;