import {React, useState} from "react";
import Table from 'react-bootstrap/Table';
import { addBM, removeBM, setBM } from "../Store";
import { useDispatch , useSelector } from "react-redux";

function SearchResult({searchResultList}){

    let dispatch = useDispatch()
    let bookmark = useSelector((state)=>(state.bookmark))
    let busData = useSelector((state)=>state.busData)
    let [info,setInfo] = useState(false)

    console.log(bookmark)
    return(
        <>
        {!info ?
        <>
        <div>
        <Table>
            <thead>
                <tr>
                <th>버스 번호</th>
                <th>즐겨 찾기</th>
                </tr>
            </thead>
            <tbody>
                {searchResultList.map((item, index) => (
                    <tr key={index}>
                    <td onClick={()=>(
                        setInfo(!info)
                    )}>{item.name}</td>
                    <td>
                    {
                    busData[index].bm === false ?
                    (<button onClick ={()=>{
                        if(!busData.includes({id:busData[index].id,name:busData[index].name})){
                        dispatch(addBM({id:busData[index].id,name:busData[index].name}));
                        dispatch(setBM(index));
                        }
                    }}>
                        즐찾
                    </button>):(
                        <button onClick={()=>{
                            dispatch(removeBM(index))
                            dispatch(setBM(index))
                        }}>
                            즐찾해제
                        </button>
                    )
                        }</td>
                </tr>
        ))}
        </tbody>
        </Table>
    </div>
    </>
    :
    <>
    <h1>버스정보</h1>
    <></>
    <button onClick={()=>(setInfo(!info))}>닫기</button>
    </>
    }
    </>
    )
}
export default SearchResult;