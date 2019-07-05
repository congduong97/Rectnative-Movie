import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import MovieDetail from './MovieDetail';

class Movie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                movies: responseJson.movies
            });
        })
        .catch((error) => {
            console.error(error);
            
        })
    }
    
    render(){
        const  moviesList = this.state.movies.map(movie => <MovieDetail key={movie.id}  movie={movie} />);
        return( 
            <ScrollView>
                 {moviesList}
             </ScrollView>
            );
     }
   
}

export default Movie;