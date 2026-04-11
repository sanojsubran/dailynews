import './CommonStyle.css';

import React, { useEffect, useState } from 'react';
import FeedDisplay from './FeedDisplay';

const FeedContainer = ({ newssource, stories, maxStories, pageMax }) => {
    const [totalStories, setTotalStories] = useState([]);
    const [displayStories, setDisplayStories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    maxStories = parseInt(maxStories);
    pageMax = parseInt(pageMax);
    const maxPages = maxStories / pageMax;

    const onClickNext = () => {
        setCurrentPage(p => (p + 1) > maxPages ? 1 : p + 1);
    };

    const onClickPrevious = () => {
        setCurrentPage(p => (p - 1) < 1 ? maxPages : p - 1);
    };

    useEffect(() => {
        const index = (currentPage - 1) * pageMax;
        setDisplayStories(totalStories.slice(index, index + pageMax));
    }, [currentPage, totalStories, pageMax]);

    useEffect(() => {
        if (stories !== undefined && stories.length !== 0) {
            setTotalStories(stories);
            setCurrentPage(1);
            setDisplayStories(stories.slice(0, pageMax));
        }
    }, [stories, pageMax]);

    return (
        <div className="feedCard">
            <div className="feedHeader">
                <span className="sourceTitle">{newssource}</span>
            </div>
            <div className="feedBody">
                <div className="fixedContainer">
                    <FeedDisplay currentStories={displayStories} />
                </div>
                <div className="feedPagination">
                    <button className="pageBtn" onClick={onClickPrevious}>&#8592; Prev</button>
                    <span className="pageIndicator">{currentPage} / {maxPages}</span>
                    <button className="pageBtn" onClick={onClickNext}>Next &#8594;</button>
                </div>
            </div>
        </div>
    );
};

export default FeedContainer;
