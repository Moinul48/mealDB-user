import React, { useEffect, useState } from 'react';
import { AccessAlarm } from '@material-ui/icons';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import './App.css';
import MealDetail from './Components/MealDetail/MealDetail';
import MealFinder from './Components/MealFinder/MealFinder'

function App() {
  const [likeColor, setLikeColor] = useState('');
  // const handleLike = () => {
  //   const color = likeColor ? '' : 'primary';
  //   setLikeColor(color);
  // }
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({})

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    //singleUser
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data))
    // randomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]))
  } , []);
  
  // const {title, first, last} = randomUser.name;
  // {randomUser.name?.title} 
  // {randomUser.name?.last}
  
  return (
    <div className="App">
      <AccessAlarm/>
      <ThumbUpAltIcon onClick = {()=> setLikeColor(likeColor? '' : 'primary')} color={likeColor}/>
      <MealDetail></MealDetail>
      <MealFinder></MealFinder>
      <h1>Name: {singleUser.name}</h1>
      <p>Random Name: {randomUser.name && randomUser.name.title}. {randomUser.name?.first} {randomUser.name?.last}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
      
    </div>
  );
}

export default App;
