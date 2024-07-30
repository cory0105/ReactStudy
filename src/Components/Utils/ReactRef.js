import { useRef } from "react"

export function ReactRef(){
    console.log("ReactRef 렌더링...")
    const inputRef = useRef(null);
    const h3Rdf = useRef(null);

    return <>
        <div>
            <input ref={inputRef}></input>
            <button onClick={()=>{inputRef.current.focus()}}>입력창에 포커스</button>
            <h3 ref={h3Rdf}></h3>
            <button onClick={()=>{h3Rdf.current.textContent = "테스트"}}>h3태그에 텍스트 입력</button>
        </div>
    </>
}