import { useState, useContext, createContext } from "react"

const UserContext = createContext();

export function ReactContext(){
    const [user, setUser] = useState("Tom")
    return <>
        <UserContext.Provider value={{user, setUser}}>
            <Component1 />
        </UserContext.Provider>
    </>
}

function Component1(){
    return <>
        <h1>Component1</h1>
        <Component2/>
    </>
}

function Component2(){
    return <>
        <h1>Component2</h1>
        <Component3/>
    </>
}

function Component3(){
    return <>
        <h1>Component3</h1>
        <Component4/>
    </>
}

function Component4(){
    const {user, setUser} = useContext(UserContext)
    return <>
        <h1>Component4</h1>
        <p>Hello {user}</p>
    </>
}