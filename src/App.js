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
class App extends  Component {
  render() {
    return (
      <div className="App">
{/* array의 map 기능
movies는 array , 그 다음 map 기능을 통해서 새로운 array를 만듬 
=> movies array를 가져다가 매핑을 해서 새로운 array를 만드는 것. 해당 movies array 안의 엘러먼트를 활용해서.
현재 작업하고있는 movies array   를 활용한다는 것이 포인트이다. 
*/}
        {movies.map(movie => {
          // 위의 movies array의 엘리먼트를 토대로한 컴포넌트
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
        {/* {[
          <Movie title={movies[0].title} poster={movies[0].poster} />
          <Movie title={movies[1].title} poster={movies[1].poster} />
          <Movie title={movies[2].title} poster={movies[2].poster} />
          <Movie title={movies[3].title} poster={movies[3].poster} />
        ]} */}
      </div>
    )

  }
}

export default App