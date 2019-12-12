import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]
//영화들의 제목을 자식 컴포넌트인 movie컴포넌트에 보내고 싶다면 ?

const movieImages=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0aMKrj8CQmPgSYhWfnV1tkaEIDuHu-mLNypNjEs8dgxNjst3h&s",
  "http://mblogthumb1.phinf.naver.net/MjAxOTAxMDNfMSAg/MDAxNTQ2NTIyNzIxMDQy.Mg-Unq0TcP20nuJt4jwQIII0qaJoxf9blEmWZryiL_Ig.Iya4LSd-MU81saiCOXhBAAaF87TMoWCTfO-pz_WjyI4g.JPEG.winpil99/full.jpg?type=w800",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIxcRSI3uJNGwJIhZW-gyeAbQemnlnL3cdBl7M9F2zTmkpcrG&s",
  "https://pbs.twimg.com/media/ED5kOUeWsAEGBDL.jpg"

]
// 메인컴포넌트가 주소를 다 가지고 있고 차일드 컴포넌트에서는 this.props.poster로만 사용해주면 된다. 
//즉 데이터 플로우 -> 큰 컴포넌트가 전체 정보를 다 가지고있고 각기 칠드런에게 정보를 전달한다. 이를 이용해서 강력한 UI를 구축할 수 있다. 
class App extends  Component {
  render() {
    return (
      <div className="App">
    {/* 모든 영화 내용, 정보가 들어갈 곳 */}
      <Movie  title={movieTitle[0]} poster={movieImages[0]} />
      <Movie  title={movieTitle[1]} poster={movieImages[1]}/>
      <Movie  title={movieTitle[2]} poster={movieImages[2]}/>
      <Movie  title={movieTitle[3]} poster={movieImages[3]}/>
      </div>
    )

  }
}

export default App