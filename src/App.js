import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import List from './list'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasil: 'empty'
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    var hitung
    switch(event.target[1].value) {
      case '+':
        hitung = parseFloat(event.target[0].value) + parseFloat(event.target[2].value)
      break
      case '-':
        hitung = parseFloat(event.target[0].value) - parseFloat(event.target[2].value)
      break
      case '*':
        hitung = parseFloat(event.target[0].value) * parseFloat(event.target[2].value)
      break
      case '/':
        hitung = parseFloat(event.target[0].value) / parseFloat(event.target[2].value)
      break
    }
    this.setState({
      hasil: hitung
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }

  render() {
    return (
      <div className='mt-5 container text-center'>
        <div className='card'>
          <h1>Aplikasi Kalkulator</h1>
          <h5>Silahkan masukan Angka</h5>
            <form onSubmit={this.handleSubmit}>
              <input type='number'/>
              <select>
                  <option>+</option>
                  <option>-</option>
                  <option>*</option>
                  <option>/</option>
              </select>
              <input type='number'/>
              <button type='submit'>Kirim</button>
            </form>
            
            <List hasil={this.state.hasil}/>
        </div>
      </div>
    )
  }
}


export default App;
