import React, {useState, useEffect} from 'react';
import FeedContainer from './components/FeedContainer';
import Axios from 'axios';
import './components/CommonStyle.css';

const App = () => {

    const [stories, setStories] = useState([]);

    const hacker_news   = "Hacker News";
    const reddit_pgm    = "Reddit/programming";
    const reddit_cpp    = "Reddit/cpp";
    const slashdot      = "Slashdot";
    const techcrunch    = "Tech Crunch";
    const golang_dev    = "Golang/dev";
    const react_dev     = "React/dev";
    const website_title = "techdigest.today";

    useEffect( () => {
        const fetchFeed = async () => {
            const {data} = await Axios.get('https://api.techdigest.today/');
            setStories(data);
            console.log("Number of stories fetched: ", data.length);
        };
        fetchFeed();
    },[]);

    return (
        <div>
            <h1 className="websiteTitle">{website_title}</h1>
            <br/>
            <div className="ui three column doubling stackable grid container ">
                <div className="column">
                    <FeedContainer newssource={hacker_news} source="" stories={stories} />
                </div>
                <div className="column">
                    <FeedContainer newssource={reddit_pgm} stories={stories} />
                </div>
                <div className="column">
                    <FeedContainer newssource={reddit_cpp} stories={stories} />
                </div>
                <div className="column">
                    <FeedContainer newssource={slashdot} stories={stories} />
                </div>
                <div className="column">
                    <FeedContainer newssource={techcrunch} stories={stories} />
                </div>
                <div className="column">
                    <FeedContainer newssource={golang_dev} stories={stories} />
                </div>
                <div className="column">
                    <FeedContainer newssource={react_dev} stories={stories} />
                </div>
            </div>
            <div className="websiteFooter">
                <div>Copyright 2020</div>
                <div>All rights reserved</div>
                <div className="developerDetails">
                    <label>Developed by : </label>
                    <a 
                        className="developerName" 
                        href="https://sanoj.in" 
                        target="blank" 
                        rel="noopener noreferrer"
                    >
                        sanoj subran
                    </a>
                </div>
                
            </div>
            
        </div>
    );
};

export default App;