import ReactDOM from 'react-dom'
import React from 'react'

function App() {
  return (
    <div>
        Welcome To React
    </div>
  )
}

export default App

const rootElement = document.getElementById('root')
ReactDOM.render(<App></App>,rootElement)