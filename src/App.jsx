import './App.css'

const SELF_REVIEW_DOC = 'https://docs.google.com/document/d/YOUR_DOC_ID/copy' // Replace with actual doc link

function App() {
  return (
    <div className="app">
      <div className="bg" />
      <div className="container">
        <header className="header">
          <div className="badge">December 2025</div>
          <h1>Performance Review</h1>
          <p className="subtitle">
            PolicyEngine's annual review cycle. Self-reviews due Friday, Dec 19.
          </p>
        </header>

        <div className="actions">
          <a href={SELF_REVIEW_DOC} target="_blank" rel="noopener" className="action-card">
            <div className="action-icon">📝</div>
            <h3>Self-Review Form</h3>
            <p>Copy the template to your Google Docs and complete your self-assessment.</p>
            <span className="action-link">
              Copy to Google Docs <span>→</span>
            </span>
          </a>

          <a href="https://policyengine.github.io/github-wrapped/" target="_blank" rel="noopener" className="action-card">
            <div className="action-icon">📊</div>
            <h3>GitHub Wrapped</h3>
            <p>Review your 2025 GitHub activity across PolicyEngine repos.</p>
            <span className="action-link">
              View your stats <span>→</span>
            </span>
          </a>

          <a href="#design" className="action-card">
            <div className="action-icon">🔬</div>
            <h3>Design Rationale</h3>
            <p>Why the forms ask what they ask—research-backed design decisions.</p>
            <span className="action-link">
              Learn more <span>↓</span>
            </span>
          </a>
        </div>

        <section className="section">
          <h2>📅 Timeline</h2>
          <div className="timeline">
            <div className="phase active">
              <h3>
                Self-Reviews
                <span className="phase-dates">Dec 12–19</span>
              </h3>
              <p>Complete your self-assessment form and submit to Max.</p>
              <ul>
                <li>Dec 12: Kickoff email sent</li>
                <li>Dec 17: Reminder for outstanding submissions</li>
                <li>Dec 19: <strong>Self-reviews due</strong></li>
              </ul>
            </div>

            <div className="phase">
              <h3>
                Manager Assessment
                <span className="phase-dates">Dec 20–24</span>
              </h3>
              <p>Max completes assessments and calibrates with Nikhil.</p>
              <ul>
                <li>Dec 20–23: Manager assessments</li>
                <li>Dec 24: Calibration session</li>
              </ul>
            </div>

            <div className="phase">
              <h3>
                Conversations
                <span className="phase-dates">Dec 26–31</span>
              </h3>
              <p>1:1 performance conversations scheduled during holiday week.</p>
            </div>

            <div className="phase">
              <h3>
                Wrap-Up
                <span className="phase-dates">Jan 2–3</span>
              </h3>
              <p>Follow-up emails, salary changes processed in Rippling.</p>
            </div>

            <div className="phase">
              <h3>
                Feedback Collection
                <span className="phase-dates">Jan 13–17</span>
              </h3>
              <p>Post-cycle survey to improve next year's process.</p>
            </div>
          </div>
        </section>

        <section className="section" id="design">
          <h2>🔬 Design Decisions</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
            This cycle incorporates evidence from I/O psychology research. Here's why the forms ask what they ask:
          </p>
          <div className="design-grid">
            <div className="design-card">
              <h4>No Self-Ratings</h4>
              <p>
                Harvard research shows numeric self-ratings anchor manager ratings upward.
                We ask for examples only to preserve reflection without anchoring bias.
              </p>
            </div>

            <div className="design-card">
              <h4>3-Point Scale</h4>
              <p>
                With 4 people, 5-point scales create false precision.
                Exceeds/Meets/Below + trajectory gives clear signal without pretending statistical power.
              </p>
            </div>

            <div className="design-card">
              <h4>Behaviors Over Traits</h4>
              <p>
                Forms ask about observable behaviors, not personality.
                "Delivers work on time" beats "is reliable"—more actionable, less biased.
              </p>
            </div>

            <div className="design-card">
              <h4>Specific Examples</h4>
              <p>
                Research shows concrete examples predict performance better than general claims.
                "What did you do?" not "How good are you?"
              </p>
            </div>

            <div className="design-card">
              <h4>No Forced Distribution</h4>
              <p>
                Forced ranking harms collaboration and causes ~33% misclassification.
                Calibration conversation achieves differentiation without quotas.
              </p>
            </div>

            <div className="design-card">
              <h4>Comp Informed, Not Determined</h4>
              <p>
                Separating developmental feedback from compensation leads to more honest reflection.
                Performance informs but doesn't mechanically determine raises.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            PolicyEngine · <a href="https://policyengine.org">policyengine.org</a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
