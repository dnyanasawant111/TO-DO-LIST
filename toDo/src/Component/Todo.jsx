import React from 'react';

import { useState } from 'react';
import moment from 'moment';

export default function App() {


  const [input, setinput] = useState({
    name: '',
    date: '',
    completed: false

  })

  const [add, setadd] = useState([]);



  function adddata() {

    setadd([...add, input]);
    console.log(input)
    setinput({
      name:'',
      date:'',
      completed:"false"
    })

  }

  function onchange1(event) {

    setinput({ name: event.target.value })

  }

  function onchange2(event) {

    setinput({ ...input, date: event.target.value })

  }


  function remove(i) {
    add.splice(i, 1)
    setadd([...add])
  }


  function oncheckbox(i) {

    const item = add[i]
    item.completed = !item.completed;
    add[i] = item;
    setadd([...add])

  }

  const differenceofDate = (date) => {
    return moment().diff(date, 'days');
  };

  return (
    <div className='main' >
      
      <h1 className="todo"> To-Do-List</h1>

      <h4> Enter Decription </h4>
      
      <input
        className="rounded-pill"
        type={'text'}
        placeholder="Add Data"
        value={input.name}
        onChange={onchange1}
      />
      <br />
      
      <h4> Enter Date  </h4>

      <input type={"date"}   
        className="rounded-pill" 
        value={input.date}
        onChange={onchange2} />
      <br/>

      <button className="onhover" onClick={adddata}>  ADD TO DO </button>
      <br /> <br />



      {add.map((ele, i) => {
        return (
          <div key={i} >

            <p key={i}

              style={{ border: differenceofDate(ele.date) > 0 ? "4px solid yellow" : '', textDecoration: ele.completed ? "line-through" : '' }}

            >

              {
                differenceofDate(ele.date) > 0 ?
                <h1> 'Due day is passed' </h1>
                :
                ''
              }



              <input onChange={() => oncheckbox(i)} type={"checkbox"} />

              <strong> Task- </strong>  {ele.name}
              <strong> Date-</strong>  {ele.date}

              <button className="btn btn-info" onClick={remove}>Delete</button>


            </p>


          </div>



        );
      })}


    </div>

  );
}
