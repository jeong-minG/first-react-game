import React, { Component } from 'react';
import "./App.css";
import BoxClass from "./component/BoxClass.js";

const choice = {
    rock: {
        name: "Rock",
        img: "https://i.ibb.co/VVYNKZb/rock.png"
    },
    scissor: {
        name: "Scissor",
        img: "https://i.ibb.co/K0xhny3/scissor.png"
    },
    paper: {
        name: "Paper",
        img: "https://i.ibb.co/mSpKcHJ/paper.png"
    },
}

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
            userScore: 0,
            comScore: 0,
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        let gameResult = this.judgement(choice[userChoice], computerChoice);
        
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: gameResult,
        }, () => {
            this.updateScore(gameResult); // 상태 업데이트 후 점수 업데이트
        });
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) return "TIE";
        else if (user.name === "Rock") return computer.name === "Scissor" ? "WIN" : "LOSE";
        else if (user.name === "Scissor") return computer.name === "Paper" ? "WIN" : "LOSE";
        else if (user.name === "Paper") return computer.name === "Rock" ? "WIN" : "LOSE";
    };

    updateScore = (gameResult) => {
        if (gameResult === 'WIN') {
            this.setState(prevState => ({
                userScore: prevState.userScore + 1
            }));
        } else if (gameResult === 'LOSE') {
            this.setState(prevState => ({
                comScore: prevState.comScore + 1
            }));
        }
    };

    resetBtn = () => {
        this.setState({
            userSelect: null,
            computerSelect: null,
            result: "",
            userScore: 0,
            comScore: 0,
        });
    };

    render() {
        return (
            <div>
                <div className='score'>
                    <span>{this.state.userScore}</span>
                    ← SCORE →
                    <span>{this.state.comScore}</span>
                </div>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
                    <div className="buttons">
                        <button onClick={() => this.resetBtn()} className='reset-btn'>리셋</button>
                        <button onClick={() => this.play("scissor")}>가위</button>
                        <button onClick={() => this.play("rock")} className='middleBtn'>바위</button>
                        <button onClick={() => this.play("paper")}>보</button>
                    </div>
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
                </div>
            </div>
        );
    }
}
