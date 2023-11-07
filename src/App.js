import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/components/Header'
import Footer from '../src/components/Footer';
import PollForm from './pages/PollForm';
import LandingPage from '../src/pages/LandingPage'
import './App.css';
import PollResults from './pages/PollResults';
import AttendeePage from './pages/AttendeePage';

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <Routes>
                <Route path = "/" Component={LandingPage} />
                <Route path = "poll" Component={PollForm} />
                <Route path = "pollresults/:eventID/view" Component={PollResults} />
                <Route path = "pollresults/:eventID/vote" Component={AttendeePage}/>
            </Routes>
            <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
