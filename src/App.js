import { useState } from 'react';
import './App.css';

function App() {
  const [capacity,setCapacity]=useState(120);
  const [count,setCount]=useState(4);
  const [data_size,setData]=useState(60);
  const [current_num,setNum]=useState(1);
  const [table,setTable]=useState(null);


  function buttonPush(){
    let disk_arr_in =[];
    let thtable=[];
    let trtable=[];
    let block=data_size/(count-2);
    let cycle_count=capacity/block;
    for(let i=0;i<cycle_count;i++){
      let tdtable=[]
      tdtable.push(<td>Строка {i+1}</td>)
      for(let j=0;j<count;j++){
        disk_arr_in[j]='empty';
        tdtable.push(<td>{disk_arr_in[j]}</td>)
      }
      trtable.push(<tr>{tdtable}</tr>);
    }

    thtable.push(<th></th>)
    for(let i=0;i<count;i++) thtable.push(<th>Диск {i+1}</th>)
    let teble=
    <table border="1" cellPadding="4" cellSpacing="0">
      <tr>
        {thtable}
      </tr>
      {trtable}
    </table>
    setTable(teble);
    setNum(0);
  };

  function buttonPush2(){
    let disk_arr_in =new Array(count);
    let thtable=[];
    let trtable=[];
    let block=data_size/(count-2);
    let cycle_count=capacity/block;
    let k=0;
    for(let i=0;i<=current_num;i++){
      let tdtable=[]
      tdtable.push(<td>Строка {i+1}</td>)
    for(let j=0;j<count;j++){
      disk_arr_in[j]=i+1;
      disk_arr_in[count-1-k]='q';
      if(count-1-k===0)disk_arr_in[count-1]='p';
      else disk_arr_in[count-1-k-1]='p';
      tdtable.push(<td>{disk_arr_in[j]}</td>)
    }
    k++;
    if(k>=count) k=0;
    trtable.push(<tr>{tdtable}</tr>);
    }
    for(let i=current_num+1;i<cycle_count;i++){
      let tdtable=[]
      tdtable.push(<td>Строка {i+1}</td>)
      for(let j=0;j<count;j++){
        disk_arr_in[j]='empty';
        tdtable.push(<td>{disk_arr_in[j]}</td>)
      }
      trtable.push(<tr>{tdtable}</tr>);
      }
    setNum(current_num+1);
    thtable.push(<th></th>)
    for(let i=0;i<count;i++) thtable.push(<th>Диск {i+1}</th>)
    let teble=
    <table border="1" cellPadding="4" cellSpacing="0">
      <tr>
        {thtable}
      </tr>
      {trtable}
    </table>
     if(current_num===cycle_count-1) {
      setNum(0);
    }
    setTable(teble);   
   };

  return (
    <div className="main">
      <div>
        <span>
          <label htmlFor="Capacity"> Объем диска</label>
          <input className='params' type="number" id="Capacity" value={capacity} onChange={(e)=>{
            e.target.value=e.target.value<=0 ? 1 : e.target.value;
            setCapacity(e.target.value)}}/>
        </span>
        <span>
          <label htmlFor="Count"> Количество дисков</label>
          <input className='params' type="number" id="Count" value={count} onChange={(e)=>{
            e.target.value=e.target.value<=3 ? 4 : e.target.value;
            setCount(e.target.value);
            }}/>

        </span>
        <button onClick={buttonPush}>OK</button>
      </div>
      <div className='second_string'>
        <span>
          <label htmlFor="Size_data"> Объем входных данных</label>
          <input className='params' type="number" id="Size_data" value={data_size} onChange={(e)=>{
            e.target.value=e.target.value<=0 ? 1 : e.target.value;
            setData(e.target.value)}}/>
        </span>
        <button onClick={buttonPush2}>OK</button>
      </div>
      {table}
    </div>
  );
}

export default App;
