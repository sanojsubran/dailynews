import './components/CommonStyle.css';

import React, { useEffect, useState } from 'react';
import FeedContainer from './components/FeedContainer';
import ReactGA from 'react-ga4';
import axios from 'axios';

const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const App = () => {
    const [hnstories, setHNStories] = useState([]);
    const [tcstories, setTCStories] = useState([]);
    const [sdstories, setSDStories] = useState([]);
    const [theme, setTheme] = useState(getInitialTheme);
    const [error, setError] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        ReactGA.initialize('UA-175573390-1');
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
        const backendUrl = process.env.REACT_APP_BACKEND_API;
        const fetchFeed = async () => {
            try {
                const { data } = await axios.get(backendUrl, { responseType: 'json' });
                setHNStories(data.hackernews);
                setTCStories(data.techcrunch);
                setSDStories(data.slashdot);
            } catch {
                setError(true);
            }
        };
        fetchFeed();
    }, []);

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

    return (
        <div className="appWrapper">
            <header className="titleBar">
                <h1 className="websiteTitle">techdigest.today</h1>
                <label className="themeToggle">
                    <span className="themeLabel">Light</span>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                    />
                    <span className="themeSlider" />
                    <span className="themeLabel">Dark</span>
                </label>
            </header>

            <main className="feedGrid">
                {error ? (
                    <div className="errorState">
                        Unable to load feeds. Please try again later.
                    </div>
                ) : (
                    <>
                        <FeedContainer
                            newssource="Hacker News"
                            stories={hnstories}
                            maxStories="30"
                            pageMax="10"
                        />
                        <FeedContainer
                            newssource="TechCrunch"
                            stories={tcstories}
                            maxStories="10"
                            pageMax="10"
                        />
                        <FeedContainer
                            newssource="Slashdot"
                            stories={sdstories}
                            maxStories="10"
                            pageMax="10"
                        />
                    </>
                )}
            </main>
        </div>
    );
};

export default App;
