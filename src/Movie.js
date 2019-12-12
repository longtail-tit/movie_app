import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component{
    render(){
        // console.log(this.props);
        return(
            <div>
            <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
        {/* 영화 제목들 출력. props는 요소들?요소의 title을 출력한다. */}
        {/* JSX명령어를 실행시키려면 꼭 괄호를 쳐줘야한다. */}
            </div>
        )
    }
}


class MoviePoster extends Component{
    render(){
        console.log(this.props)
        return(
      <img  src={this.props.poster}/>
        )
    }
}
export default Movie