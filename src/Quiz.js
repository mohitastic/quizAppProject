import React, { Component } from 'react'
import  QuizData  from './QuizData'
import './style.css'

export class Quiz extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userAnswer:null,
         currIndex:0,
         options:[],
         quizEnd:false,
         score:0,
         disabled:true
      }
    }
    
    loadQuiz = () => {
      const {currIndex} = this.state;
      this.setState(()=>{
          return{
            question: QuizData[currIndex].question,
            options: QuizData[currIndex].options,
            answer: QuizData[currIndex].answer
          }
      })
    }

    nextQuestionHandler = () => {
      const{userAnswer,answer,score} = this.state

      if(userAnswer === answer){
        this.setState({
          score:score+1
        })
      }
      this.setState({
        currentIndex: this.state.currentIndex+1,
        userAnswer: null
      })
    }

    componentDidMount(){
      this.loadQuiz();
    }

    checkAnswer = answer => {
      this.setState({
        userAnswer: answer,
        disabled: false
      })
    }

    componentDidUpdate(prevProps,prevState){
      const{currentIndex} = this.state;
      if(this.state.currentIndex!=prevState.currentIndex){
        this.setState(()=>{
          return{
            question: QuizData[currentIndex].question,
            options: QuizData[currentIndex].options,
            answer: QuizData[currentIndex].answer
          }
        });
      }
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Quiz
