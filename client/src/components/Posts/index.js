import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
            <Link 
            to={`/profile/${thought.username}`}
            >
                {thought.username}s
            </Link> | {''}
              recent routes
            </p>
            <div className="card-body">
                <Link to={`/thought/${thought._id}`}>
              <p>{thought.thoughtText}</p>
              <p className="mb-0">
                Fist bumps: {thought.reactionCount} || Click to{' '}
                {thought.reactionCount ? 'join' : 'comment on'} this activity!
              </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;