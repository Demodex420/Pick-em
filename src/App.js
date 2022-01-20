import "./App.css";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="your-list-box">
          <div className="your-list-header">
            <h3>Your list:</h3>
            <p className="calories">Total Calories: XXXX</p>
          </div>
          <div className="your-list-items">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </section>
        <section className="all-items-box">
          <h3>All items:</h3>

          <div className="all-items">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </section>
      </main>
      <footer>©2022 Crossover Team 1</footer>
    </div>
  );
}

export default App;
