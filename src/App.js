import './App.css';

const api = {
  key: "c1162f70597c56244d2103c91d4b9dda",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          >
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
