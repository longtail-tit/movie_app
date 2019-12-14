import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aMKrj8CQmPgSYhWfnV1tkaEIDuHu-mLNypNjEs8dgxNjst3h&s"
  },
  {
    title: "Full Metal Jacket",
    poster: "http://mblogthumb1.phinf.naver.net/MjAxOTAxMDNfMSAg/MDAxNTQ2NTIyNzIxMDQy.Mg-Unq0TcP20nuJt4jwQIII0qaJoxf9blEmWZryiL_Ig.Iya4LSd-MU81saiCOXhBAAaF87TMoWCTfO-pz_WjyI4g.JPEG.winpil99/full.jpg?type=w800"
  },
  {
    title: "Oldboy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIxcRSI3uJNGwJIhZW-gyeAbQemnlnL3cdBl7M9F2zTmkpcrG&s"
  },
  {
    title: "Star Wars",
    poster: "https://pbs.twimg.com/media/ED5kOUeWsAEGBDL.jpg"
  }
]


// state? 컴포넌트의 Object
// state가 바뀌면 다시 render 한다.
class App extends Component {

  state = { state는 컴포넌트를 로드하는 방법
    greeting: 'Hello'
  }
  // 컴포넌트가 mount되면 5초를 기다리고 greeting을 업데이트 
  componentDidMount(){ 
    setTimeout(()=> {
      //this.state.greeting = 'somthing' //state를 직접적으로 변경하면 위의 render 설정들이 작동을 안한다.
      this.setState({
        //여기서 새로운 state를 만들어야한다. 
        greeting: "Hello again"
      })
    },5000)
  }



  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map( (movie , index) => { 
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      
      </div>
    )

  }
}

export default App

