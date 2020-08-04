import React, { useState, useEffect } from 'react';
import FeedDisplay from './FeedDisplay';
import './CommonStyle.css';

const FeedContainer = ({newssource,stories}) => {
    const [totalStories, setTotalStories] = useState([]);
    const [displayStories, setDisplayStories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const maxPages = 3;


    const onClickNext = () => {
        const nextPage = (currentPage + 1) > maxPages ? 1 : (currentPage + 1);
        setCurrentPage(nextPage);
    };

    const onClickPrevious = () => {
        const prevPage = (currentPage - 1) < 1 ? maxPages : (currentPage - 1);
        setCurrentPage(prevPage);
    };

    useEffect( () => {
        const index = (currentPage - 1) * 10;
        setDisplayStories(totalStories.slice(index, index+10));
    }, [currentPage, totalStories]);
    
    useEffect(() => {
        if(stories.length !== 0) {
            setTotalStories(stories);
            setCurrentPage(1);
            setDisplayStories(stories.slice(0, 10));
        }
    },[stories]);

    return(
        <div className="ui">
            <fieldset className="feedContainer">
                <legend className="sourceTitle">{newssource}</legend>
                <div className="fixedContainer">
                    <FeedDisplay currentStories={displayStories}/>
                </div>
                <div className="two ui fluid buttons bottomWidget"> 
                    <button className="ui  button " onClick={() => onClickPrevious()}>Previous</button>
                    <div className="or" data-text={`${currentPage}/${maxPages}`}></div>
                    <button id="next" className="ui  button" onClick={() => onClickNext()} >Next</button>
                </div>
            </fieldset>
        </div>
    );
};

export default FeedContainer;