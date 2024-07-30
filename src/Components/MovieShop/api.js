import axios from "axios";

const headers = {
    headers:{
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY"
    }
}

export const IMG_PATH = "https://image.tmdb.org/t/p/original"

export let genre = [];

export function getMovieListKey(key){
    return axios.get("https://api.themoviedb.org/3/movie/"+key+"?language=ko-KR&page=1",
      headers
    )
}

export function getMovieDetailById(id){
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
    headers
  )
}

export function getMovieCreditById(id){
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`,
    headers
  )
}

export function SearchMovie(keyword){
  return axios.get(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=1`,
    headers
  )
}

export async function setGenreListOfMovie(){
  // 로컬스토리지에 장르리스트가 있으면 그걸 사용
  genre = JSON.parse(localStorage.getItem("MovieGenreList"));
  // 없으면 api로 받아와서 로컬스토리지에 저장하고 사용
  if(!genre){
    try{
      const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=ko",
        headers
      );
      genre = response.data.genres;
      localStorage.setItem("MovieGenreList", JSON.stringify(genre));
    } catch(error){
      console.log("error", error);
    }
  }
}

export function getGenre(list){
    // let str = "";
    // list.forEach((a, index)=>{
    //     const temp = genre.find((g)=>g.id==a);
    //     if(index==0){
    //         str = temp.name;
    //     }else{
    //         str = str + ", " + temp.name;
    //     }
    // })
    // return str
    return list.map((id)=>{
      const temp = genre.find(g=>g.id == id);
      return temp? temp.name: ""
    }).filter(name=>name).join(", ");
}