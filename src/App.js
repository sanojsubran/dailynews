import './components/CommonStyle.css';

import React, {useEffect, useState} from 'react';

import FeedContainer from './components/FeedContainer';
import ReactGA from 'react-ga';
import axios from 'axios';

const App = () => {
    const [hnstories, setHNStories] = useState([]);
    const [rpgmstories, setRPGMStories] = useState([]);
    const [rcppstories, setRCPPStories] = useState([]);
    const [tcstories, setTCStories] = useState([]);
    const [sdstories, setSDStories] = useState([]);

    const hacker_news   = "Hacker News";
    const reddit_pgm    = "Reddit/programming";
    const reddit_cpp    = "Reddit/cpp";
    const slashdot      = "Slashdot";
    const techcrunch    = "Tech Crunch";
    const golang_dev    = "Golang/dev";
    const react_dev     = "React/dev";
    const website_title = "techdigest.today";

    useEffect( () => {
        ReactGA.initialize('UA-175573390-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        const backendUrl = process.env.REACT_APP_BACKEND_API
        const fetchFeed = async () => {
            const {data} = await axios.get(backendUrl, {
                responseType: "json",
              });
            setHNStories(data.hackernews)
            //setRPGMStories(data.reddit_pgm)
            //setRCPPStories(data.reddit_cpp)
            setTCStories(data.techcrunch)
            setSDStories(data.slashdot)
            //console.log("Number of stories fetched: ", data.length);
        };
        fetchFeed();
    },[]);

    return (
        <div>
            <h1 className="websiteTitle">{website_title}</h1>
            <br/>
            <div className="ui three column doubling stackable grid container">
                <div className= "stretched row">
                    <div className="column">
                        <FeedContainer
                            newssource={hacker_news}
                            source=""
                            stories={hnstories}
                            maxStories="30"
                            pageMax="10"
                        />
                    </div>
                    <div className="column">
                        <FeedContainer
                            newssource={techcrunch}
                            stories={tcstories}
                            maxStories="10"
                            pageMax="10"
                        />
                    </div>
                    <div className="column">
                            <FeedContainer
                                newssource={slashdot}
                                stories={sdstories}
                                maxStories="10"
                                pageMax="10"
                            />

                    </div>
                </div>
            </div>
            </div>
    );
};

export default App;
