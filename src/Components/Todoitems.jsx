import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'
const Todoitems = ({no,display,text,setTodos}) => {
  const deleteitem=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!=no);
    setTodos(data);

  }
  const tog=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    for (let i=0;i<data.length;i++)
    {
      if (data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through";
        }
        else{
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div class="todo-items">
      <div className={`todo-items-container ${display}`} onClick={()=>tog(no)}>
        {display===""?<img className="not_tick" src={not_tick} alt="" />:<img className="tick" src={tick} alt="" />}
        <div className="todo-items-text">{text}</div>
      </div>
      <img className="todoitem-cross-icon" onClick={()=>deleteitem(no)}src={cross} alt="" />
    </div>
  )
}

export default Todoitems
