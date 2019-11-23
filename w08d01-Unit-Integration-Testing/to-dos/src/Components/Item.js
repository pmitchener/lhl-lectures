import React from 'react';

export default (props) => {
  return (
    <li className="todo-item" key={props.index} >
      {props && props.item && props.item.toLowerCase()}
      <input
        className="checkbox"
        type="checkbox"
        name="done"
        value="done"
        checked={props.done}
        onChange={() => props.toggleDone(props.index)}
      />
    </li>
  );
}