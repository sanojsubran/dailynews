import React, {useState, useEffect} from 'react';
import FeedContainer from './components/FeedContainer';
import Axios from 'axios';
import ReactGA from 'react-ga';
import './components/CommonStyle.css';

const App = () => {
    const [hnstories, setHNStories] = useState([]);
    const [rpgmstories, setRPGMStories] = useState([]);
    const [rcppstories, setRCPPStories] = useState([]);
    const [tcstories, setTCStories] = useState([]);
    const [sdstories, setSDStories] = useState([]);
    const [rdstories, setRDStories] = useState([]);
    const [gdstories, setGDStories] = useState([]);

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
        const fetchFeed = async () => {
            const {data} = await Axios.get('https://api.techdigest.today/');
            setHNStories(data.hacker_news)
            setRPGMStories(data.reddit_pgm)
            setRCPPStories(data.reddit_cpp)
            setTCStories(data.techcrunch)
            setSDStories(data.slashdot)
            setRDStories(data.react_dev)
            setGDStories(data.golang_dev)
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
                            newssource={reddit_pgm} 
                            stories={rpgmstories} 
                            maxStories="30" 
                            pageMax="10" 
                        />
                    </div>
                    <div className="column">
                        <FeedContainer 
                            newssource={reddit_cpp} 
                            stories={rcppstories} 
                            maxStories="30" 
                            pageMax="10" 
                        />
                    </div>
                </div>
                <div className= "stretched row">
                    <div className="column">
                        <FeedContainer 
                            newssource={slashdot} 
                            stories={sdstories} 
                            maxStories="10" 
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
                    <div className= "column">
                        <FeedContainer 
                            newssource={react_dev} 
                            stories={rdstories} 
                            maxStories="10"
                            pageMax="10"
                        />
                    </div>
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