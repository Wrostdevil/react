import React from 'react'

const card = (props) => {
  console.log(props);
  console.log(props.user);
  console.log(props.age);

  return (
      <div className="card">
        <img src={props.a}></img>
        <h1>{props.user}</h1>
          <p>I am  b.tech 3rd year student and {props.age} years old.</p>
          <button >View Profile</button>
        </div>
  )
}

export default card