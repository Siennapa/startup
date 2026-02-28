import React from 'react';

export function Poll() {
    const [pollTitle, setPollTitle] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [newOption, setNewOption] = React.useState('');
    const [votes, setVotes] = React.useState({});

        function addOption() {
            if (!newOption) return;
            setOptions([...options, newOption]);
            setNewOption('')
        }

        function createPoll() {
            const poll = {
                title: pollTitle,
                options,
                votes: options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {})
            };

            localStorage.setItem('currentPoll', JSON.stringify(poll));
            setVotes(poll.votes);
        }

        function vote(option) {
            const updatedVotes = { ...votes };
            updatedVotes[option]++;
            setVotes(updatedVotes);

            const poll = JSON.parse(localStorage.getItem('currentPoll'));
            poll.votes = updatedVotes;
            localStorage.setItem('currentPoll', JSON.stringify(poll));
        }

        React.useEffect(() => {
            const stored = localStorage.getItem('currentPoll');
            if (stored) {
                const poll = JSON.parse(stored);
                setPollTitle(poll.title);
                setOptions(poll.options);
                setVotes(poll.votes);
            }
        }, []);
    
      const hasPoll = options.length > 0 && Object.keys(votes).length > 0;

  return (
    <main className="container-fluid bg-secondary text-center">
      <h1>Create &amp; Vote</h1>

      {/* CREATE POLL */}
      <section>
        <h2>Create a Poll</h2>

        <div>
          <label htmlFor="pollTitle">Poll Title</label>
          <input
            id="pollTitle"
            type="text"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
            placeholder="What should we eat tonight?"
          />
        </div>

        <div>
          <label htmlFor="newOption">Add Option</label>
          <input
            id="newOption"
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Tacos"
          />
          <button type="button" onClick={addOption}>
            Add
          </button>
        </div>

        {options.length > 0 && (
          <div>
            <h3>Options</h3>
            <ul>
              {options.map((opt) => (
                <li key={opt}>{opt}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={createPoll}
          disabled={!pollTitle.trim() || options.length < 2}
        >
          Create Poll
        </button>

        {!pollTitle.trim() && <p><em>Enter a title to enable Create.</em></p>}
        {pollTitle.trim() && options.length < 2 && <p><em>Add at least 2 options.</em></p>}
      </section>

      <hr />

      {/* VOTE */}
      <section>
        <h2>Vote</h2>

        {!hasPoll ? (
          <p><em>Create a poll first (or refresh if one is already stored).</em></p>
        ) : (
          <div>
            <p><strong>{pollTitle}</strong></p>

            {options.map((opt) => (
              <div key={opt} style={{ marginBottom: '0.5rem' }}>
                <button type="button" onClick={() => vote(opt)}>
                  Vote: {opt}
                </button>
                <span style={{ marginLeft: '0.75rem' }}>
                  Votes: {votes[opt]}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}