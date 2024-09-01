import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [count, Setcount] = useState(0)
  return (
    <div>
      <button onClick={() => Setcount(1)}>1</button>
      <button onClick={() => Setcount(2)}>2</button>
      <button onClick={() => Setcount(3)}>3</button>
      <button onClick={() => Setcount(4)}>4</button>
      <button onClick={() => Setcount(5)}>5</button>
      <button onClick={() => Setcount(6)}>6</button>
      <button onClick={() => Setcount(7)}>7</button>
      <button onClick={() => Setcount(8)}>8</button>
      <button onClick={() => Setcount(9)}>9</button>
      <button onClick={() => Setcount(10)}>10</button>
      <Todo id={count} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => {
        setTodo(response.data); // Assign the single todo object to state
      })
      .catch((error) => {
        console.error("There was an error fetching the todo:", error);
      });
    }, 5000);
  }, [id]); // Include id in dependency array

  if (!todo) {
    return <div>Loading...</div>; // Handle the loading state
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default App;

