import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Word Shark</header>
        <main>
          <Dictionary defaultKeyword="prey" />
        </main>
        <footer>
          {" "}
          Coded 👩‍💻 by{" "}
          <a
            href="https://github.com/j4mieLeigh"
            target="_blank"
            title="GitHub profile"
          >
            Jamie Leigh
          </a>{" "}
          | Open-sourced 👋 on{" "}
          <a
            href="https://github.com/j4mieLeigh/dictionary-app-react"
            target="_blank"
            title="Source code"
          >
            Github
          </a>{" "}
          | Hosted 🥳 by{" "}
          <a
            href="https://steady-kitsune-53dd78.netlify.app/"
            target="_blank"
            title="Hosted site"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
