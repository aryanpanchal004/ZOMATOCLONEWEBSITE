
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function Tweet() {
    const [inputText, setInputText] = useState('');
    const [tweets, setTweets] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 280) {
            setInputText(value);
        }
    };

    const isTweetValid = inputText.trim().length > 0 && inputText.length <= 240;

    const handleTweet = () => {
        if (isEditing) {
            setTweets(tweets.map(tweet =>
                tweet.id === editId ? { ...tweet, text: inputText } : tweet
            ));
            setIsEditing(false);
            setEditId(null);
        } else {
            const newTweet = {
                id: Date.now(),
                text: inputText,
            };
            setTweets([newTweet, ...tweets]);
        }
        setInputText('');
    };

    const handleEdit = (id) => {
        const tweetToEdit = tweets.find(tweet => tweet.id === id);
        setInputText(tweetToEdit.text);
        setIsEditing(true);
        setEditId(id);
    };

    const handleDelete = (id) => {
        setTweets(tweets.filter(tweet => tweet.id !== id));
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
                Tell us, What's in your mind
            </h1>

            <textarea
                className="w-full border border-gray-300 rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Let's Gappp-Sappp...."
                onChange={handleChange}
                value={inputText}
                rows={4}
            />

            <div className="flex justify-between items-center mb-4">
                <p className={`text-sm ${inputText.length > 260 ? 'text-red-500' : 'text-gray-600'}`}>
                    {inputText.length}/240 characters
                </p>

                <button
                    onClick={handleTweet}
                    disabled={!isTweetValid}
                    className={`px-5 py-2 rounded-md text-white font-semibold shadow-md transition ${isTweetValid
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-400 cursor-not-allowed'
                        }`}
                >
                    {isEditing ? 'Update Tweet' : 'Tweet'}
                </button>
            </div>

            <h2 className="text-xl font-semibold mb-3">Recent Tweets</h2>

            <ul className="space-y-4">
                {tweets.map(tweet => (
                    <li
                        key={tweet.id}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex justify-between items-start"
                    >
                        <p className="text-gray-800 flex-1">{tweet.text}</p>

                        <div className="flex space-x-2 ml-4">
                            <button
                                onClick={() => handleEdit(tweet.id)}
                                className="bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-md transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(tweet.id)}
                                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-md transition"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tweet;
