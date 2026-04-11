import React from 'react';
import FeedEntryPlaceholder from './FeedEntryPlaceholder';
import './CommonStyle.css';

const FeedDisplay = ({ currentStories }) => {
    if (currentStories.length === 0) {
        return <FeedEntryPlaceholder />;
    }

    return (
        <ol className="storyList">
            {currentStories.map(story => (
                <li key={story.id} className="storyItem">
                    <a href={story.url} target="_blank" rel="noopener noreferrer">
                        {story.title}
                    </a>
                </li>
            ))}
        </ol>
    );
};

export default FeedDisplay;
