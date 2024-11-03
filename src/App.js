import Weather from "./Weather";

function App() {
  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <Weather city="Tokyo" />
      </header>
      <p>
        Coded by
        <a href="https://github.com/FrantiskaM" target="_blank" rel="noopener">
          FrantiskaM
        </a>
        on
        <a
          href="https://github.com/FrantiskaM/weather-react"
          target="_blank"
          rel="noopener"
        >
          Github
        </a>
        , hosted on
        <a
          href="https://weather-react-myproject.netlify.app/"
          target="_blank"
          rel="noopener"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
