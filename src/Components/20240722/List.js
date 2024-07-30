import styled from "styled-components";

const Li = styled.li`
    color: lightcoral;
    list-style: none;
`

const Container = styled.div`
    width: 100vw;
    margin: 0 auto;
    text-align: center;
`
const Title = styled.h1`
    font-size: 2rem;
`

const Photo = styled.img`
    border-radius: 50%;
`

export function List({products, user}){
    return <>
        <h1>List Components</h1>
        <p>리엑트 연습 코드</p>
        <ul>
            {products.map(p=>
                <Li>{p.title}</Li>
            )}
        </ul>
        <Container>
            <Title>{user.name}</Title>
            <Photo src={user.imageUrl}></Photo>
        </Container>
    </>
}