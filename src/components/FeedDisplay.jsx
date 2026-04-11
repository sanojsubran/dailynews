import React from 'react';
import FeedEntryPlaceholder from './FeedEntryPlaceholder';
import './CommonStyle.css';

function reduceTitle(title) {
    let wordArray = title.split(' ');
    wordArray = wordArray.length > 10 ?wordArray.splice(0,13).join(' ') + ' ...'
        : wordArray.join(' ');
    return wordArray;
}

const FeedDisplay = ({currentStories}) => {
    if(currentStories.length === 0) {
        return (
            <FeedEntryPlaceholder />
        );
    }
    const renderedStories = currentStories.map( story => {
        const title = reduceTitle(story.title);
        return (
            <div key={story.id} className="item news">
                <div className="ui text feedEntry">
                    <a href={story.url} target="blank" rel="noopener noreferrer ">{title}</a>
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