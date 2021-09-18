import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

//making a counter start
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>My Awesome Counter</h1>
      <h2>Count : {count}</h2>
      <button className = "increase-button" onClick = {handleIncrease}>Increase</button>
      <button className = "decrease-button" onClick = {handleDecrease}>Increase</button>
    </div>
  )
};
//making a counter end

function LoadComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h2>Load Comments</h2>
      {
        comments.map(comment => <Comments name = {comment.name} email = {comment.email} body = {comment.body}></Comments>)
      }
    </div>
  )
};

function Comments(props){
  return (
    <div style = {{
      backgroundColor: "cyan",
      margin: "10px",
      padding: "20px",
      border: "3px solid gray",
      borderRadius: "10px"
      }}>
      <h3>Name : {props.name}</h3>
      <h4>Email : {props.email}</h4>
      <p>Body : {props.body}</p>
    </div>
  )
}

export default App;
