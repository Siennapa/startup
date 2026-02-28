import React from 'react';

export function Results() {
  const [poll, setPoll] = React.useState(null);
  const [feed, setFeed] = React.useState([]);

  React.useEffect(() => {
    const stored = localStorage.getItem('currentPoll');
    if (stored) {
      setPoll(JSON.parse(stored));
    }
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem('currentPoll');
      if (!stored) return;

      const p = JSON.parse(stored);
      if (!p.options || p.options.length === 0) return;

      const randomOption =
        p.options[Math.floor(Math.random() * p.options.length)];

      p.votes[randomOption] = (p.votes[randomOption] || 0) + 1;

      localStorage.setItem('currentPoll', JSON.stringify(p));
      setPoll({ ...p });

      const randomUser = `User-${Math.floor(Math.random() * 100)}`;
      const message = `(Live) ${randomUser} voted for ${randomOption}`;

      setFeed((prev) => {
        const updated = [message, ...prev];
        return updated.length > 6 ? updated.slice(0, 6) : updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container-fluid bg-secondary text-center">
      <section>
        <h2>Database Data (placeholder)</h2>
        <p>
          This data will be retrieved from the database and represents previously
          created polls and their stored vote counts.
        </p>

        <h3>Saved Poll Results</h3>

        {poll ? (
          <div>
            <strong>{poll.title}</strong>
            <ul>
              {poll.options.map((opt) => (
                <li key={opt}>
                  {opt}: {poll.votes?.[opt] ?? 0} votes
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p><em>No poll created yet. Go create one first.</em></p>
        )}
      </section>

      <section>
        <h2>Realtime Updates (WebSocket placeholder)</h2>

        <p>
          This section will display realtime updates pushed from the server
          using WebSockets whenever users interact with a poll.
        </p>

        <h3>Live Activity Feed</h3>

        <ul>
          {feed.length ? (
            feed.map((msg, i) => <li key={i}>{msg}</li>)
          ) : (
            <li><em>(Live) Waiting for votes...</em></li>
          )}
        </ul>
      </section>
    </main>
  );
}