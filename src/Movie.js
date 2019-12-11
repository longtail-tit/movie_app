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
      <img  src="http://mblogthumb3.phinf.naver.net/MjAxODA0MjVfOTEg/MDAxNTI0NjUwMDgwNjcx.DcrOx0X-FfRtHrogSVfjdQHIRnHYNSAz79Nc1l7LdWsg.QBjQSbwmXD055E5PFpH2vZB5xfvUQsU4Fv2-cBTsdzUg.JPEG.comeinto_/IMG_4375.jpg?type=w800"/>
        )
    }
}
export default Movie