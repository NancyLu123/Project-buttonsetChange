import React ,{useState,FC} from 'react';

import styled from 'styled-components';
//引用APP interface Istate
import {Istate as Props} from "../App"

interface IProps{
    count:Props["count"]
    setcount:React.Dispatch<React.SetStateAction<Props["count"]>>

}

const Addcount:React.FC<IProps>=({count, setcount})=>{
    const[input,setInput]=useState({
        id:"",
        inpute:""
    })
   
    //void->什麼都不回傳
    const handleChange=(e:React.ChangeEvent<HTMLInputElement> ):void=>{
        setInput({
            ...input, 
            [e.target.name]:e.target.value
        })

    }
    const handleClick=():void=>{
        //!InputEvent.name相反，若是空值回傳false
        setcount([
            ...count,{
                //parseInt()函式能將輸入的字串轉成整數
                id:parseInt(input.id),
                inpute:parseInt(input.inpute)
            }
        ]);
    }
    const [open, setOpen] = React.useState(false);
    const [limit, setlimit] = React.useState(false);
    const [inplimit, setinplimit] = React.useState(false);
    
    for(let i=0;i<3;i++){
        i++;
    }
    return(
       
        <div className="Addcount">
            <div >
                <div >
                    <button className={open ? "Fbtton": "upBT"}   onClick={() => { setOpen(!open);}}> Flex</button>{/*Flex點擊顯示收回兩個按鈕*/}
                </div>
                
        
                <div className={open ? "ret" : "open"}>
                    <div >
                        <div className={limit ? "AA" : "BB"}>
                            <button className="downBTW">WNL</button>{/*WNL預設綠色，點擊顯示Limit輸入框*/}
                            <button className="downBTL"  onClick={() => { setlimit(!limit);}}>Limit</button>{/*Limit*/}
                        </div>
                        
                    </div>
                    <div className={limit ? "bake" : "come"} >
                        <div >
                             <button className="inputeL" onClick={() => { setlimit(!limit);}} >Limit</button>{/*Limit輸入框藍色//點擊還原*/}
                             <input  type="text" className="inpute" value={input.inpute} onChange={handleChange} name="inpute"/>{/*輸入*/}
                        </div>

                    </div>
                </div>
                
            </div>
            
            <button className="AddBT" onClick={handleClick} >
            輸出
            </button>
        </div>
    )
}
export default Addcount;