import React from 'react';
import './CommonStyle.css';

const FeedContainer = ({stories}) => {
    if( 0 === stories.length) {
        return null;
    }
    
    const renderedStories = stories.slice(0,15).map( story => {
        return (
            <div key={story.id} className="item news">
              <div className="content">
                <a className="text" href={story.url} target="blank" >{story.title}</a>
              </div>
            </div>
        );
    } );

    return(
        <div className="ui wrapper2">
            <fieldset className="containerr">
                <legend className="HN">Hacker News</legend>
                <div className="ui relaxed divided list ">
                    {renderedStories}
                </div>
                <div class="two ui fluid buttons bottomWidget"> 
                    <button class="ui  button">Previous</button>
                    <div class="or" data-text="1"></div>
                    <button class="ui  button">Next</button>
                </div>
            </fieldset>
            
        </div>
    );
};

export default FeedContainer;