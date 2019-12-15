import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



// smart component : state 가 있는 컴포넌트 
// dump component : state가 없고 필요도 없는 컴포넌트 Only have is props (=stateless component)

class App extends Component {

  state={}

  componentDidMount(){ 
   fetch('https://yts.lt/api/v2/list_movies.json?sort_by=like_count')
   .then(potato => potato.json())          // 위의 작업이 있으면 뭔갈 해라. then function 은 1개의 attribute만 준다. //console결과의 ReadableStream은 바이트로 이루어졌다는것. Json으로 바꿔야함.
   .then(json => console.log(json))  //위의 potato를 response로 체크 -> json으로 변환 -> console 출력 
   .catch(err => console.log('err')) // 위 작업이 에러가 있으면 에러 출력
  }
// promises ? 작업 수행의 결과물을 catch(에러잡는거),then 으로 받아볼 수 있다. (시나리오 관리가 가능하다.)
// fetch ? url을 AJAX로 심플하게 받아올수있음 


 _renderMoview = () => {  // <- 최신 자바스크립트.
    const movies = this.state.movies.map( (movie , index) => { 
    return <Movie title={movie.title} poster={movie.poster} key={index}/>
   }) // movies 라는 variable 에 데이터를 저장
   return movies
  }

  render() {
    return (
      <div className="App">
        {/* Loading State */}
        {this.state.movies ? this._renderMoview() : 'Loading'} 
      </div>
    )

  }
}

export default App

