import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME, QUERY_ME_BASIC } from '../../utils/queries';

import "./thoughtForm.css";

const ThoughtForm = () => {
    const [thoughtText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addThought, { error }] = useMutation(ADD_THOUGHT, {
        update(cache, { data }) {
            const { addThought } = data;
            console.log(data);
            try {
                // could potentially not exist yet, so wrap in a try...catch
                const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
                console.log({ thoughts});
                cache.writeQuery({
                    query: QUERY_THOUGHTS,
                    data: { thoughts: [addThought, ...thoughts] }
                });
            } catch (e) {
                console.error(e);
            }

            // update me object's cache, appending new thought to the end of the array
            const response = cache.readQuery({ query: QUERY_ME });
            console.log(response);
            if (response) {
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...response.me, thoughts: [...response.me.thoughts, addThought] } }
                });
            } else {
                const user = cache.readQuery({ query: QUERY_ME_BASIC });
                console.log({ userQuery: user });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...user.me, thoughts: [addThought] } }
                });
            }
        }
    });

    const handleChange = event => {
        
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {

            // add thought to database
            await addThought({
                variables: { thoughtText }
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="thoughtForm-outerDiv">
            <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch form-box"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Here's a new thought..."
                    value={thoughtText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ThoughtForm;