import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
// import database from '../../firebase';
// import './cards.css';
import ReactDOM from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME_BASIC, QUERY_USER_IMG } from '../../utils/queries';



function TinderCards({ onTinderCardChange }) {
    const {loading, data, error} = useQuery(QUERY_USER_IMG);
    console.log(loading)
    console.log(JSON.stringify(error, null, 2))
    console.log(data);
    const [people, setPeople] = useState([
        {
            name: "Scooby",
            url: "https://static.wikia.nocookie.net/scoobydoo/images/5/53/Scooby-Doo.png/revision/latest?cb=20211222210718",
        },
        {
            name: 'shaggy',
            url: "https://static.wikia.nocookie.net/warner-bros-entertainment/images/5/53/Scooby-Doo.png/revision/latest?cb=20171217004943",
        },
        {
            name: 'dianne',
            url: "https://static.wikia.nocookie.net/warner-bros-entertainment/images/5/53/Scooby-Doo.png/revision/latest?cb=20171217004943",
        },
    ]);
    const { data: userData } = useQuery(QUERY_USER_IMG);
    const users = data?.users || [];
    console.log(people.users)
    console.log(users)
    console.log(data)
    console.log(loading)
    console.log(data)
    // const user = query.username;
    // console.log(user)
    // useEffect(() => {
        
    // }, []);

    return (
        <div>
           
            <div className="tinderCards__cardContainer" onClick={onTinderCardChange}>
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
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
//                 {loggedIn && userData ? (
//                     <div className="col-12 col-lg-3 mb-3">
//                         <FriendList
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