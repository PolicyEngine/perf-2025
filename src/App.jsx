import './App.css'

const SELF_REVIEW_DOC = 'https://docs.google.com/document/d/1augs-A5yJ-Jl91cq_KFbUhFEdML9_JgplyfE5ReWsTM/copy'

function DesignCard({ title, source, sourceUrl, children }) {
  return (
    <div className="design-card">
      <h4>{title}</h4>
      <p>{children}</p>
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
        {source} →
      </a>
    </div>
  )
}

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
            This cycle incorporates evidence from I/O psychology research and lessons from Google's performance system.
          </p>
          <div className="design-grid">
            <DesignCard
              title="No Self-Ratings"
              source="Harvard Kennedy School"
              sourceUrl="https://www.hks.harvard.edu/faculty-research/policy-topics/gender-race-identity/self-ratings-and-bias-performance-reviews"
            >
              Numeric self-ratings anchor manager ratings upward.
              We ask for examples only—reflection without anchoring bias.
            </DesignCard>

            <DesignCard
              title="Examples Over Checklists"
              source="I/O Psychology Research"
              sourceUrl="https://www.annualreviews.org/doi/abs/10.1146/annurev-orgpsych-031413-091305"
            >
              Specific examples predict performance better than trait checklists.
              No behavioral tables—just "what did you do and what happened?"
            </DesignCard>

            <DesignCard
              title="Keep/Develop Framing"
              source="Google Perf (Laszlo Bock)"
              sourceUrl="https://www.workrules.net/"
            >
              Simple reflection beats formal goal-setting matrices.
              "What will you keep doing? What will you develop?"
            </DesignCard>

            <DesignCard
              title="Comp Fully Separated"
              source="ResearchGate"
              sourceUrl="https://www.researchgate.net/publication/280820632_The_Determinants_and_Performance_Effects_of_Managers_Performance_Evaluation_Biases"
            >
              Mixing comp with developmental feedback makes people defensive.
              No comp questions in self-review—that's a separate conversation.
            </DesignCard>

            <DesignCard
              title="No Forced Distribution"
              source="ScienceDirect"
              sourceUrl="https://www.sciencedirect.com/science/article/pii/S0167268121001827"
            >
              Forced ranking harms collaboration and causes ~33% misclassification.
              Calibration achieves differentiation without quotas.
            </DesignCard>

            <DesignCard
              title="Minimal Process"
              source="Molly Graham (ex-Facebook)"
              sourceUrl="https://mollyg.substack.com/p/startup-performance-review-system"
            >
              At 4 people, heavy process adds overhead without value.
              Form takes ~15 minutes. The conversation is what matters.
            </DesignCard>
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
