import { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl"
import styled from "styled-components"

const Container = styled.div`
    width: 1344px;
    height: 756px;
    margin: auto;
    border: 1px solid gray;
`

export function GameAction(){
    const [playingGame, setPlayingGame] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [userName, setUserName] = useState();
    const [score, setScore] = useState();

    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({
        loaderUrl: "build/build3.loader.js",
        dataUrl: "build/build3.data",
        frameworkUrl: "build/build3.framework.js",
        codeUrl: "build/build3.wasm",
    });

    function handleGameOver(userName, score) {
        setIsGameOver(true);
        setUserName(userName);
        setScore(score);
    };
    
    useEffect(() => {
        addEventListener("GameOver", handleGameOver);
        return () => {
          removeEventListener("GameOver", handleGameOver);
        };
    }, []);
    
    return <>
        <h1>Game</h1>
        <button onClick={()=>{setPlayingGame(true)}}>Start Game</button>
        <button onClick={()=>{sendMessage("player", "Jump")}}>jump</button>
        <Container>
            {
                playingGame? (<Unity unityProvider={unityProvider} style={{
                    width:"100%", 
                    height:"100%"
                }} />) : null
            }
            
        </Container>
        {isGameOver && (
            <p>{`Game Over ${userName}! You've scored ${score} points.`}</p>
        )}
    </>;
}