import React from 'react';

export function Home() {
    return (
        <main className="container-fluid bg-secondary text-center">
            <section>
                <h2>Application Image (placeholder)</h2>
                <img src="images/logo-placeholder.jpg" alt="App Logo" />
            </section>

            <section>
                <h2>Login (placeholder)</h2>

                <form>
                <div>
                    <label for="username">Username</label>
                    <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="sienna"
                    />
                </div>

                <div>
                    <label for="password">Password</label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="******"
                    />
                </div>

                <div>
                    <button type="button">Sign up</button>
                    <button type="button">Log in</button>
                </div>
                </form>
            </section>

            <section>
                <h2>3rd Party Service (placeholder)</h2>
                <p>
                This feature will use a 3rd party API to generate a random poll prompt
                (for example: "What should we eat tonight?" or "Which movie should we
                watch?")
                </p>

                <button type="button">Get random poll idea</button>

                <p><em>Generated prompt will appear here.</em></p>
            </section>
        </main>
    );
}