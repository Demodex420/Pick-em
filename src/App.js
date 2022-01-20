import "./App.css";
import Item from "./components/Item";
import axios from 'axios'
import {useState, useEffect} from 'react'
import Header from "./components/Header";
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import DragDrop from "./components/DragDrop";


function App() {
 
  
  return (
    <div className="App">

      <Header />
      <main>
        <DndProvider backend={HTML5Backend}>
          <section className="your-list-box">
            <div className="your-list-header">
              <h3>Your list:</h3>
              <p className="calories">Total Calories: XXXX</p>
            </div>
            <div className="your-list-items">

            </div>
          </section>
          <DragDrop />
          <section className="all-items-box">
            
            <h3>All items:</h3>
            
            <div className="all-items">
            </div>
          </section>
        </DndProvider>  
      </main>
      <footer>©2022 Crossover Team 1</footer>
    </div>
  );
}

function value(){
  let counter = 0
  let randomNo = Math.floor(Math.random() * (10 - 0 + 1) + 0);

  while(randomNo != 5){
    randomNo =Math.floor(Math.random() * (10 - 0 +1) + 0);
    counter += 1;
}
  return counter;
}

console.log("Counter value is", value())


export default App;
