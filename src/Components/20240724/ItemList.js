import { useState } from "react";

export function ItemList(){
    const [items, setItems] = useState([]);
    const [newInputItem, setNewInputItem] = useState("");
    function addItem(){
        const temp = [...items, newInputItem];
        setItems(temp);
        setNewInputItem("");
    }

    return <>
        <input placeholder="물품 이름을 입력하세요"
            onChange={(e)=> setNewInputItem(e.target.value)}
            value={newInputItem}
        />
        <button onClick={addItem}>물품추가</button>
        <h3>물품 목록</h3>
        <ul>
            {
                items.map((item, index)=> (<li key={index}>{item}</li>))
                // 리엑트가 리스트 관리 목적으로 key 속성을 필요로 함
                // items가 DB의 table 정보라면 해당 테이블의 id컬럼을 대신 입력하는 것이 좋음
                // 예) <li key={item.id}>{item}</li>
            }
        </ul>
    </>
}