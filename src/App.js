import React, {useState, useEffect} from 'react';
import FeedContainer from './components/FeedContainer';
import Axios from 'axios';
import './components/CommonStyle.css';

const App = () => {

    const [stories, setStories] = useState([]);

    useEffect( () => {
        const fetchFeed = async () => {
            const {data} = await Axios.get('https://api.techdigest.today/');
            setStories(data);
        };
        fetchFeed();
    },[]);

    return (
        <div>
            <h1 className="websiteTitle">techdigest.today</h1>
            <br/>
            <div className="ui three column doubling stackable grid container ">
                <div className="column warp">
                    <div className="wrapper">
                        <FeedContainer stories={stories} />
                    </div>
                </div>
                <div className="column warp">
                    <div className="wrapper">
                        <FeedContainer stories={stories} />
                    </div>
                </div>
                <div className="column warp">
                    <div className="wrapper">
                        <FeedContainer stories={stories} />
                    </div>
                </div>
                
                <div className="column">
                    <FeedContainer stories={stories} />
                </div>
                <div className="column ">
                    <FeedContainer stories={stories} />
                </div>
                <div className="column ">
                    <FeedContainer stories={stories} />
                </div>
                <div className="column ">
                    <FeedContainer stories={stories} />
                </div>
            </div>

            
        </div>
        
    );
};

export default App;