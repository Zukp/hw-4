import { useCallback, useState } from "react";
import ExpenseHome from './ExpenseHome'
import './Expense.css'
function Expense(props){
    const [text,setValue] = useState('')
    const [result,setResult] = useState([])

    function onHandText(event){
        setValue(event.target.value)
    }


    let one = useCallback(()=>{
        if(text.trim() === ''){
            return
        }
        setResult([...result,{text:text,}])
    setValue('')
     
       
    })
 
    return (
        <div className="cont-form">
                <input placeholder="напиши" value={text}   type='text'   onChange={onHandText}/>
                <button onClick={one}>click</button>
           
            <div className="cont-result">
                {result.map((e,i)=>{
                    return <div key={i}>{e.text} <ExpenseHome date={props.date} />  </div>
                })}
            </div>
        </div> 
    )
}
  
export default Expense