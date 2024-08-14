import {useState} from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock:{
    name:"Rock",
    img:"https://i.ibb.co/VVYNKZb/rock.png"
  },
  scissor:{
    name:"Scissor",
    img:"https://i.ibb.co/K0xhny3/scissor.png"
  },
  paper:{
    name:"Paper",
    img:"https://i.ibb.co/mSpKcHJ/paper.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    // console.log("선택됨!",userChoice)
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) return "TIE";
    else if (user.name === "Rock") return computer.name === "Scissor" ? "WIN" : "LOSE";
    else if (user.name === "Scissor") return computer.name === "Paper" ? "WIN" : "LOSE";
    else if (user.name === "Paper") return computer.name === "Rock" ? "WIN" : "LOSE";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 있는 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} /> 
      <div className="buttons">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
        <Box title="Computer" item={computerSelect}  result={result} />
      </div>
    </div>
  );
}

export default App;
