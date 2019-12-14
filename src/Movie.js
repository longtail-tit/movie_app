import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    // movie의 props의 타입을 지정할 수 있다. 
    static propTypes = {
        //isRequired : movie 컴포넌트는 title 이라는 prop을 제공하는 것이 필수로 설정된다.
        // => 부모컴포넌트로부터 받는 정보를 확인할 수 있다. 
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired
    }

    render(){
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
        return(
      <img  src={this.props.poster}/>
        )
    }
}
export default Movie