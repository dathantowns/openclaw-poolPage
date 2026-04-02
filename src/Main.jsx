import React from \"react\";
import './Main.css';

function Main() {
  return (
    <div className=\"root\">
      <header className=\"App-header\">
        <h1>Pool Service Landing</h1>
      </header>
      <main>
        <section className=\"hero\">
          <h2>We keep your pool sparkling</h2>
          <p>Professional pool cleaning and maintenance for homes and businesses.</p>
        </section>
        <section className=\"cta\">
          <button>Book a Free Quote</button>
        </section>
      </main>
    </div>
  );
}

export default Main;
