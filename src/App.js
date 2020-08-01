import React, {useState, useEffect} from 'react';
import FeedContainer from './components/FeedContainer';
import Axios from 'axios';

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
            <h1>techdigest.today</h1>
            <hr />
            <FeedContainer stories={stories} />
        </div>
        
    );
};

export default App;