import './ExpenseHome.css';
function ExpenseHome (props) {
    let month = props.date.toLocaleString('en-Us',{month:'long'})
    let day = props.date.toLocaleString('en-Us',{day:'2-digit'})
    let year = props.date.getFullYear()
    return (
      
            <div className="cont-date">{month} {day} {year}</div>  
     
    )
}
export default ExpenseHome