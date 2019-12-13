import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

// 만약 대량의 영화 정보를 가져오고 싶을땐 비효율적인 방법임. 
// => 정렬된 항목으로 (array)
const movies = [
  // api에서 찾은 정보를 배열할 수 있는 array
  // 영화 - 제목, 포스터 
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
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map( (movie , index) => { 
          // **리액트는 엘리먼트가 많을 경우 key 를 줘야한다.  => 키는 유일해야한다. 
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      
      </div>
    )

  }
}

export default App

