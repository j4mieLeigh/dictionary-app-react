import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">dictionary</header>
        <main>
          <Dictionary defaultKeyword="nugget" />
        </main>
        <footer>
          {" "}
          Coded 👩‍💻 by{" "}
          <a
            href="https://github.com/j4mieLeigh"
            target="_blank"
          >
            Jamie Leigh
          </a>{" "}
          | Open-sourced 👋 on{" "}
          <a
            href="https://github.com/j4mieLeigh/dictionary-app-react"
            target="_blank"
          >
            Github
          </a>{" "}
          | Hosted 🥳 by{" "}
          <a
            href="https://steady-kitsune-53dd78.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
