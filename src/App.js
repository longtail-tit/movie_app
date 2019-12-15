import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



// smart component : state 가 있는 컴포넌트 
// dump component : state가 없고 필요도 없는 컴포넌트 Only have is props (=stateless component)

class App extends Component {

  state={}

  componentDidMount(){ 
   fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
  }
// component가 moount 되면 , 저 url을 가서 fetch 해오는거
// AJAX? 새로고침 없이 작업, 리액트랑 작업이 간편하다.  

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

