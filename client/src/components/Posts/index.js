import React from 'react';
import { Link } from 'react-router-dom';
import "./posts.css";
import ThoughtForm from "../ThoughtForm";
import "../ThoughtForm/thoughtForm.css"

const PostList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div className="post-listBox">

    <ThoughtForm />
    <div className="post-listBox">
      <h3 className="color-the-text">{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3 ">
            <p className="card-header">
              <Link
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
                className="text-dark"
              >
                {thought.username}
              </Link>{''}
                's recent routes {thought.createdAt}
            </p>

            <div className="card-body">
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p className="mb-0" id="fist-bump-card">
                  Fist bumps: {thought.reactionCount} || Click to{' '}
                  {thought.reactionCount ? 'join' : 'comment on'} this activity!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default PostList;