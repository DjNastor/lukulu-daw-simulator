export function AssistantPanel() {
  const actions = [
    'Explain EQ',
    'Fix my Mix',
    'Suggest Chords',
    'Build Bassline',
    'Humanize MIDI',
    'Generate Melody',
  ];

  return (
    <aside className="assistant-rail" aria-label="AI assistant and lesson guidance">
      <section className="assistant-card ai-card">
        <div className="rail-title">
          <h2>AI Assistant</h2>
          <button type="button">×</button>
        </div>
        <h3>Ask Lukulu AI</h3>
        <p>Get help with your production while staying inside the lesson flow.</p>
        <div className="ai-actions">
          {actions.map((action) => (
            <button type="button" key={action}>
              {action}
            </button>
          ))}
        </div>
        <button className="wide-action" type="button">
          Open AI Chat
        </button>
      </section>

      <section className="assistant-card lesson-card-mini">
        <h2>Today's Lesson</h2>
        <strong>Build an Afro House Groove</strong>
        <ul>
          <li className="done">Kick</li>
          <li className="done">Clap</li>
          <li>Bass</li>
          <li>Melody</li>
        </ul>
        <span className="xp-pill">+25 XP</span>
      </section>

      <section className="assistant-card feedback-card">
        <h2>Instructor Feedback</h2>
        <div className="feedback-row">
          <span className="avatar">LA</span>
          <p>
            <strong>Great progress!</strong>Your groove is solid. Try reducing your kick
            velocity slightly.
          </p>
          <div className="score-ring">82%</div>
        </div>
      </section>

      <section className="assistant-card assignment-card">
        <h2>Assignment 4</h2>
        <strong>Recreate this beat</strong>
        <div className="reference-player">
          <button type="button">▶</button>
          <span />
        </div>
        <p>Deadline: 7 days</p>
        <button type="button">Submit</button>
      </section>
    </aside>
  );
}
