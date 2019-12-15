import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}){ //<== 사용할 prop 정의
    return(  // JSK에서는 일반적인 class 를 className이라고 쓴다. 
        <div className="Movie">  
            <div className="Movie__Columns" >
               <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns" >
                <h1>{title}</h1>
                    <div className="Movie__Genres">
                       {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                       {/* 장르 array 매핑 */}
                    </div>
            </div>
            <p className="Movie__Synosis" >
                {synopsis}
            </p>
        </div>
       
    )
}


function MoviePoster({poster,alt}){
    return( // alt prop을 추가했더니...이미지에 커서 올리면 title 띄워짐 
        <img  src={poster} alt={alt} title={alt} className="Movie__Poster"/>
        )
    }

function MovieGenre({genre}){
        return(
        <span className="Movie__Genres">{genre} </span>
        )
    }



//prop types check
Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.array.isRequired,
    synopsis :propTypes.string.isRequired
}     
    
//How can check prop types?
MoviePoster.propTypes = {
    poster : propTypes.string.isRequired,
    alt : propTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre : propTypes.string.isRequired
}

//*정리* 
// props 추가 (genre, synosis, alt)
// propTypes에 regist -> 체크할 수 있도록 
// html 클래스명 추가 
// 컬럼 - 무비포스터, 제목, 장르 array 매핑, 무비시놉시스 클래스 
// 이미지의 제목이 뜨도록 alt 이미지 만듦
// 장르를 맵핑할 때 movie renre라는 새로운 컴포넌트를 만들었다.<= functional 컴포넌트로 간단한 span 을 return 하게끔 

export default Movie