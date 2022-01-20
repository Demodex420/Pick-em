import "./App.css";
import Item from "./components/Item";



function App() {
  return (
    <div className="App">
      <header>
        <div className="header-icons">[]icons[]</div>
        <div className="header-text">
          <h1>Pick 'Em</h1>

          <h2>Shopping List App</h2>
        </div>
        <div className="header-icons">[]icons[]</div>
      </header>
      <main>
        <section className="your-list-box">
          <div className="your-list-header">
            <h3>Your list:</h3>
            <p className="calories">Total Calories: XXXX</p>
          </div>
          <div className="your-list-items">
            <Item />
          </div>
        </section>
        <section className="all-items-box">
          <h3>All items:</h3>

          <div className="all-items">
            <Item />
          </div>
        </section>
      </main>
      <footer>©2022 Crossover Team 1</footer>
    </div>
  );
}

export default App;
