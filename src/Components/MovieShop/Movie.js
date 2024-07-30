import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetailById, getMovieCreditById, IMG_PATH } from "./api";
import styled from "styled-components";
import { IconBack } from "./Icon";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin: 20px;
  color: dodgerblue;
  text-align: center;
  position: relative;
  padding: 5px;
`;
const Back = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 1rem;
  line-height: 30px;
  color: #333;
`;

export function Movie() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null)
  const [credit, setCredit] = useState(null)
  
  useEffect(()=>{
    getMovieInfo()
  }, [])

  async function getMovieInfo(){
    try{
      let response = await getMovieDetailById(id);
      console.log(response.data)
      setDetail(response.data)
      response = await getMovieCreditById(id)
      console.log(response.data)
      setCredit(response.data)
    }catch(error){
      console.log("error", error)
    }
  }

  // function listStr(object, str, limit){
  //   let result = "";
  //   for(let i=0; i<object.length; i++){
  //     if(i==limit){
  //       break;
  //     }
  //     if(i==0){
  //       result = object[i][str]
  //     }else{
  //       result = result + ", " + object[i][str]
  //     }
  //   }
  //   return result;
  // }

  const goBack = () => {
    window.history.back(); // 브라우저의 이전 페이지로 이동
  };

  return <>
    {detail && credit &&(
      <>
        <Header>
          <h1>{detail.title}</h1>
          <Back onClick={goBack}>
            {/* <Link to="/movie">BACK</Link> */}
            <IconBack/>
          </Back>
        </Header>
        <Img src={IMG_PATH + (detail.backdrop_path? detail.backdrop_path: detail.poster_path)} />
        <Content>
          <p><b>타이틀</b> : {detail.title}</p>
          <p><b>장르</b> : {detail.genres.map((g)=>g.name).filter((name)=>name).join(", ")}</p>
          <p><b>개봉일</b> : {detail.release_date}</p>
          <p><b>상영시간</b> : {detail.runtime}분</p>
          <p><b>감독</b> : {credit.crew.filter((c)=>c.job=="Director").map((c)=>c.name).filter((name)=>name).join(", ")}</p>
          {/* <p><b>배우</b> : {listStr(credit.cast, "name", 10)}</p> */}
          <p><b>배우</b> : {credit.cast.slice(0, 10).map((g)=>g.name).filter((name)=>name).join(", ")}</p>
          <hr />
          <p>{detail.overview}</p>
        </Content>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </>
    )}
  </>;
}
