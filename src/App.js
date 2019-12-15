import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state={}

  componentDidMount(){  // <= 사이즈가 커지면 좋은 코딩이 아님. 왜냐면 많은 펑션을 불러올거라서 펑션들이 한 군데에 있는것보다 다른 장소에 잇는게 좋음 
    this._getMovies();
  }



 _renderMoview = () => { 
  const movies = this.state.movies.map( movie  => {  // index 대신 movie.id 사용 => component에서 index 사용하면 느림 
    return <Movie title={movie.title} poster={movie.large_cover_image} />
   }) 
   return movies
  }
 
  //async function? 이전 라인의 작업이 끝날때까지 기다리는 것이 아닐 때 , 순서 노상관 
  //await 한다는것?  callApi기능이 끝나는 것을 기다리고, 그것의 return value(그것이 무엇이던)를 movies변수에 넣는것이다. 
   _getMovies = async () => {
    const movies = await this._callApi() // await모드에서 callApi 펑션 밸류를 갖는 moves 변수 선언 
    this.setState({ //<= callApi 작업이 완료되기 전 까지는 실행되지 않는다.
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=like_count')
    .then(potato => potato.json())          
    .then(json =>  json.data.movies)   // '=>' 모던 자바스크립트라서 화살표 자체에 return 이라는 뜻이 내재되어 있다. 
    .catch(err => console.log('err')) 
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

//*정리*
// 1. fetch 를 call api 로 변경 
// 2. get movies라는 function 사용 (asynchronous function )
// 3. ㄴ 안에 movies라는 이름의 const variable을 생성 
// 4. call api 작업이 완료되고 return 하기를 await
// 5. call api 는 fetch promise를 return할 것인데, 이는 모든 데이터의 제이슨이다.
// 6. json.data.movies 라는 value는 const movies의 결과값이 된다. 
// 7. get movies 함수 안에서 this.setState를 movies로 설정 

export default App

