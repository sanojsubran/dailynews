import React from 'react';
import './CommonStyle.css';

const FeedContainer = ({stories}) => {
    console.log(stories.length);
    if( 0 === stories.length) {
        return null;
    }

    const renderedStories = stories.map( story => {
        return (
            <div key={story.id} className="item">
              <div className="content">
                <a className="text" href={story.url} target="blank" >{story.title}</a>
              </div>
            </div>
        );
    } );

    return(
        <div>
            <h2>Hacker News</h2>
            <div className="ui relaxed divided list">
            {renderedStories}
            </div>
        </div>
    );
};

export default FeedContainer;