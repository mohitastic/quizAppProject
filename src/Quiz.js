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
    

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Quiz
