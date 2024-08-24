import React, { useState } from 'react'
import './AddToDo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function AddToDo() {
    const [toDos,setToDos]=useState([]);
    const [toDo,setToDo]=useState('');
    const d=new Date()
  return (
    <div>
     <div className='addTodo'>
       <div> 
        <div>
            <input value={toDo} onChange={(e)=>setToDo(e.target.value)} className='input' type="text" placeholder=' 🖋️ Add toDo ....' />
        </div> 
       <div className='add'>
        <Button className='addButton' onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,time:d.toLocaleTimeString(),status:false}],setToDo(""))} size='sm' >Add</Button>
        </div>
       </div>
       <br />
       {
        toDos.map((Obj)=>{
            return(
                Obj.status?<div className='check-list'>
                <div>
                    <input onChange={(e)=> {
                        
                            setToDos(
                                toDos.map((Obj3)=>{
                                    if(Obj.id===Obj3.id){
                                      
                                        Obj3.status=e.target.checked;  
                                    }
                                    return Obj3
                                })
                            ) 
                    }
                    }type="checkbox"/>
                    <h6 style={{color:"rgb(27, 177, 27)"}}>{Obj.text}</h6>
                </div>
                <div className='time-delete'>
                    <p>{Obj.time}</p>
                    <Button onClick={()=>{
                     setToDos(
                        toDos.filter((Obj2)=>{
                            if(Obj.id===Obj2.id){
                              Obj2=toDos[toDos.indexOf(Obj2)]=null
                            }
                            return Obj2
                           })
                     )
                        
                    }} variant="danger" size='sm' className='deleteButton'>Delete</Button>
                </div>
            </div>
            :
            <div className='check-list'>
            <div>
                <input onChange={(e)=> {
                    
                        setToDos(
                            toDos.map((Obj3)=>{
                                if(Obj.id===Obj3.id){
                                  
                                    Obj3.status=e.target.checked;  
                                }
                                return Obj3
                            })
                        ) 
                }
                }type="checkbox" />
                <h6>{Obj.text}</h6>
            </div>
            <div className='time-delete'>
                <p>{Obj.time}</p>
                <Button onClick={()=>{
                 setToDos(
                    toDos.filter((Obj2)=>{
                        if(Obj.id===Obj2.id){
                          Obj2=toDos[toDos.indexOf(Obj2)]=null
                        }
                        return Obj2
                       })
                 )
                }} variant="danger" size='sm' className='deleteButton'>Delete</Button>
            </div>
        </div>
            )
        })
       }
     </div>
</div>
  )
}
export default AddToDo
