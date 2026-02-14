import React from 'react';

export function Results() {
    return (
        <main className="container-fluid bg-secondary text-center">
            <section>
                <h2>Database Data (placeholder)</h2>
                <p>
                    This data will be retrieved from the database and represents previously created polls and their stored vote counts.
                </p>
                <h3>Saved Poll Results</h3>
                <ul>
                    <li>
                        <strong>What should we eat tonight?</strong><br />
                        Tacos: 3 votes<br />
                        Sushi: 5 votes<br />
                        Pizza: 2 votes<br />
                    </li>
                </ul>
            </section>
            <section>
                <h2>Realtime Updates (WebSocket placeholder)</h2>

                <p>
                    This section will display realtime updates pushed from the server using WebSockets whenever users interact with a poll.
                </p>

                <h3>Live Activity Feed</h3>
                <ul>
                    <li>(Live) sienna voted for Tacos</li>
                    <li>(Live) jacob voted for Sushi</li>
                    <li>(Live) New vote received</li>
                </ul>
            </section>
        </main>
    );
}