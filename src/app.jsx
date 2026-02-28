import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Home } from './home';
import { Poll } from './poll';
import { Results } from './results';

export default function App() {
    const storedUser = localStorage.getItem('username');
    const [userName, setUserName] = React.useState(storedUser || '');
    const [isLoggedIn, setIsLoggedIn] = React.useState(!!storedUser);
    return (
        <BrowserRouter>
            <div className="body">
                <header>
                    <h1>Decidr</h1>
                        <nav>
                            <NavLink to="" end>
                            Home
                            </NavLink>{' '}
                            <NavLink to="poll">Create &amp; Vote</NavLink>{' '}
                            <NavLink to="results">Results</NavLink>
                        </nav>
                        <hr />
                </header>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                userName={userName}
                                isLoggedIn={isLoggedIn}
                                onLogin={(name) => {
                                    localStorage.setItem('username', name);
                                    setUserName(name);
                                    setIsLoggedIn(true);
                                }}
                                onLogout={() => {
                                    localStorage.removeItem('username');
                                    setUserName('');
                                    setIsLoggedIn(false);
                                }}
                            />
                        }
                    />
                    <Route path="/poll" element={<Poll userName={userName} />} />
                    <Route path="/results" element={<Results userName={userName}/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <hr />
                    <span>Sienna Cicerone</span>{' '}
                    <a href="https://github.com/Siennapa/startup">GitHub</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <main>
            <h2>404</h2>
            <p>That page doesn't exist.</p>
        </main>
    )
}