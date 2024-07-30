import { useContext, useEffect, useState } from "react";
import { getGenre, getMovieListKey, IMG_PATH, setGenreListOfMovie } from "./api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "./MovieWrapper";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`
const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`
const Img = styled.img`
  width: 100%;
`
const Text = styled.div``

const BtnBox = styled.div`
  display: flex;
`
const Button = styled.button`
  width: 150px;
  height: 40px;
  /* background-color: dodgerblue; */
  background-color: ${props=>(props.$menu==props.$statue)? "blue": "dodgerblue"};
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover{
      background-color: blue;
  }
  &:active{
      background-color: darkblue;
  }
`

export function MovieList() {
  const [data, setData] = useState(null);
  const {movieListKey, setMovieListKey} = useContext(MovieContext);
  // const [movieListKey, setMovieListKey] = useState("now_playing");
  // useNavigate 후크는 url주소를 매개변수로 갖는 페이지 변경 함수를 리턴
  const navigate = useNavigate();

  useEffect(()=>{
    getMovies();
  }, [movieListKey])

  useEffect(()=>{
    setGenreListOfMovie();
  }, [])


  async function getMovies(){
    try{
      const response = await getMovieListKey(movieListKey)
      console.log(response.data);
      setData(response.data);
    }catch(error){
      console.log("error", error);
    }
  }

  function getMoviesButton(key){
    setMovieListKey(key)
  }

  return (
    <>
      <h1>Movie List</h1>
      <BtnBox>
        <Button $statue = {movieListKey} $menu="now_playing" onClick={()=>{getMoviesButton("now_playing")}}>Now Playing</Button>
        <Button $statue = {movieListKey} $menu="popular" onClick={()=>{getMoviesButton("popular")}}>Populor</Button>
        <Button $statue = {movieListKey} $menu="top_rated" onClick={()=>{getMoviesButton("top_rated")}}>Top Rated</Button>
        <Button $statue = {movieListKey} $menu="upcoming" onClick={()=>{getMoviesButton("upcoming")}}>Upcoming</Button>
      </BtnBox>
      <Container>
        {
          data && data.results.map((movie)=>(
            <Card key={movie.id} onClick={()=>{
              navigate(`${movie.id}`)
            }}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenre(movie.genre_ids)}</Text>
              <hr />
              <Text>소개글 : {movie.overview}</Text>
            </Card>
          ))
        }
      </Container>
    </>
  );
}
