import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component{
    render(){
        return(
            <div>
            <MoviePoster/>
            <h1>hello this is the movie</h1>
            </div>
        )
    }
}


class MoviePoster extends Component{
    render(){
        return(
            <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9949FE385C90D19228"/>
        )
    }
}
export default Movie