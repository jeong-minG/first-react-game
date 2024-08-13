import {useState} from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name:"Rock",
    img:"https://i.ibb.co/fGpdQ6F/2.png"
  },
  scissor:{
    name:"Scissor",
    img:"https://i.ibb.co/KWNqzyq/3.png"
  },
  paper:{
    name:"Paper",
    img:"https://i.ibb.co/wWqcprD/4.png"
  }
}
function App() {

  const [userSelect,setUserSelect] = useState(null)

  const play = (userChoice) =>{
    // console.log("선택됨!",userChoice)
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
    <div className='main'>
      <Box title="You" item={userSelect}/> 
      <Box title="Computer"/> 
    </div>
    <div className='main'>
      <button onClick={()=>play("scissor")}>가위</button>
      <button onClick={()=>play("rock")}>바위</button>
      <button onClick={()=>play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
