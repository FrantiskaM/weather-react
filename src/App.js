import Weather from "./Weather";

function App() {
  return (
    <div>
      <header>
        <h1>My Weather App</h1>
        <Weather city="Paris" />
      </header>
      <p>
        Coded by
        <a
          href="https://github.com/FrantiskaM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frantiska
        </a>
        on
        <a
          href="https://github.com/FrantiskaM/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        , hosted on
        <a
          href="https://app.netlify.com/sites/weather-react-myproject/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
