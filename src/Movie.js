import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{
//     static propTypes = {
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired
//     }

//     render(){
//         return(
//             <div>
//             <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }


//*** class는 그 안에 this 키워드가 있다. 
//functionall 컴포넌트는 필요 없음.이미 props를 쓰기 때문에 
function Movie({title, poster}){ //<== 사용할 prop 정의
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}

// class MoviePoster extends Component{
//     render(){
//         return(
//       <img  src={this.props.poster}/>
//         )
//     }
// }
// How to make stateless functional component 
// Use function instead of class

// 덤프컴포넌트는 props 만 있으면 된다. 라이프사이클 이딴거 없음. state 없음!!
// only have return 

function MoviePoster({poster}){
    return(
        <img  src={poster} alt="Movie Poster"/>
        )
    }

//prop types check
Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster : propTypes.string.isRequired
}    
    
//How can check prop types?
MoviePoster.propTypes = {
    poster : propTypes.string.isRequired
}


// ==> 멍청이 state를 사용하면 state가 없기때문에 생명주기도 필요없어짐. 코드가 간결해짐 
//     state를 잃는 대신 업데이트 같은 간즤나는 것들 다 사라짐. 오로지 return
export default Movie