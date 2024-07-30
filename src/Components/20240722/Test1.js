// import "./Test1.css";
import styled from "styled-components";

// const w = 300;
// const h = 200;
// width: ${w}px;
// height: ${h}px;

const Box = styled.div`
    width: 500px;
    height: 400px;
    background-color: dodgerblue;
    margin: auto;
`;

export function Test1(){
    return <>
        {/* <div className="box">Test1</div> */}
        <Box>Test1</Box>
    </>
}