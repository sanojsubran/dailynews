import React from 'react';
import FeedEntryPlaceholder from './FeedEntryPlaceholder';
import './CommonStyle.css';

const FeedDisplay = ({currentStories}) => {
    if(currentStories.length === 0) {
        return (
            <FeedEntryPlaceholder />
        );
    }
    const renderedStories = currentStories.map( story => {
        return (
            <div key={story.id} className="item news">
                <div className="ui text feedEntry ">
                    <a href={story.url} target="blank" rel="noopener noreferrer">{story.title}</a>
                </div>
            </div>
        );
    } );

    return (
        <div className="ui relaxed divided list ">
            {renderedStories}
        </div>
    );
};

export default FeedDisplay;