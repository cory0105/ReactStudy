import styled from "styled-components"

const Container = styled.div`
    width: 400px;
    margin: 0 auto;
    text-align: center;
`

const Gridbox = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export function Score({firstName, score:{math, english, history}, children,}){
    return <>
        <Container>
            <div>
                <h1>{firstName}</h1>
                <Gridbox>
                    <h3>math</h3>
                    <p>{math}</p>
                    <h3>english</h3>
                    <p>{english}</p>
                    <h3>history</h3>
                    <p>{history}</p>
                </Gridbox>
                {children}
            </div>
        </Container>
    </>
}