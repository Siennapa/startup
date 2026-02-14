import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Home } from './home';
import { Poll } from './poll';
import { Results } from './results';

export default function App() {
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
                    <Route path="/" element={<Home />} />
                    <Route path="/poll" element={<Poll />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer>
                    <hr />
                    <span>Sienna Cicerone</span>{' '}
                    <a href="https://github.com/Siennapa/YOUR_STARTUP_REPO">GitHub</a>
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