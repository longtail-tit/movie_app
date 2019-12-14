import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



// state? 컴포넌트의 Object
// state가 바뀌면 다시 render 한다.
class App extends Component {

  state = { // state는 컴포넌트를 로드하는 방법
    greeting: 'Hello',
    movies : [
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
  }

  componentDidMount(){ 
    //time out : 지정된 시간 후에 어떠한 작업을 수행시힌다.
    // setTimeout(function(){
    //   console.log('hello')
    // },1000)
    setTimeout(()=>{
      this.setState({
        movies: [
          //...this.state.movies,  // 이전 영화 리스트 그대로 두고, 한개 영화를 추가하라는 뜻 // 없으면 한개 영화로만 대체된다.
          {
            title:"Trainpotting",
            poster: "https://mblogthumb-phinf.pstatic.net/MjAxODAxMDZfMjI3/MDAxNTE1MTgyMzk5OTIw.7BK0zUzbr5xIBPjISJ6eG8GgdSUYfiYnPDV1PaKfJkwg.HnP9ikM4L4B51qhMS017xY0nBH2oq9sYfL89Nargb9Eg.JPEG.jojosweetheart/1515182395263.jpg?type=w800"
          },
          ...this.state.movies
        ]
      })
    },5000)
     // state로 infinit scroll 등 여러가지로 응용할 수 있다. 
  }



  render() {
    return (
      <div className="App">
        {this.state.movies.map( (movie , index) => { 
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      
      </div>
    )

  }
}

export default App

