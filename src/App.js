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



// 컴포넌트 라이프사이클 : 컴포넌트는 여러 기능들을 정해진 순서대로 실행한다. 
//실행 순서 
//Render : componenetWillMount() -> render() -> componentDidMount()   <== 이 싸이클으 자동으로 발생한다
//Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component
// 새로운 컴포넌트를 받는다 -> old 와 new 를 비교해서 다르면(=true)  -> 업데이트 할거임 -> render -> 업데이트 완료 
class App extends Component {

  componentWillMount(){
    console.log('will mount')
  }
componentDidMount(){
  console.log('did mount')
}

  render() {
    console.log('render')
    return (
      <div className="App">
        {movies.map( (movie , index) => { 
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      
      </div>
    )

  }
}

export default App

