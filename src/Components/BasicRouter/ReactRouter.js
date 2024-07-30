import { useState } from "react"
import styled from "styled-components"
import { Home } from "./Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Container = styled.div``
const Menu = styled.div`
    display: flex;
`
const Body = styled.div``

export function ReactRouter(){
    console.log("렌더링");
    return <>
        <BrowserRouter>
            <Container>
                <Menu>
                    {/* a 태그는 화면 새로고침을 강제하기 때문에 리엑트 구조에 맞지 않음. 모든 상태 초기화됨
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a> */}
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>

                </Menu>
                <Body>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                    </Routes>
                </Body>
            </Container>
        </BrowserRouter>
    </>
}