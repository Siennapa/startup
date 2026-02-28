import React from 'react';

export function Home() {
    const [usernameInput, setUsernameInput] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');
    const [randomIdea, setRandomIdea] = React.useState('');

    function generateRandomIdea() {
        const ideas = [
            'What should we eat tonight?',
            'Which movie should we watch?',
            'Where should we travel next?',
            'Which restraunt should we try?',
            'What should we do this weekend?',
            'Which dessert should we make?',
        ];

        const pick = ideas[Math.floor(Math.random() * ideas.length)];
        setRandomIdea(pick);
    }

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
                    <label htmlFor="username">Username</label>
                    <input
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                </div>

                <div>
                    <button type="button"
                    onClick={() => {
                        if (!usernameInput) return;
                        onLogin(usernameInput);
                    }}>
                        Sign up
                    </button>
                    <button type="button"
                    onClick={() => {
                        if (!usernameInput) return;
                        onLogin(usernameInput);
                    }}>
                        Log in
                    </button>
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

                <button type="button" onClick={generateRandomIdea}>
                    Get random poll idea
                </button>

                <p><em>{randomIdea || 'Generated prompt will appear here.'}</em></p>
            </section>
        </main>
    );
}