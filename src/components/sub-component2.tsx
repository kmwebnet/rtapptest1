/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import GenericTemplate from "./GenericTemplate";

interface IProps {
  name: string;
}

function SubComponent2(props: IProps)  {
  const [count, setcount] = useState<number>(0);
  const handleClick = () => {
    console.log('clicked');
    setcount( count + 1);
  }
    return (
      <GenericTemplate>
      <div>
        <h2>{props.name}</h2>
        <div>{count}</div>
        <button onClick={handleClick}>Add +1</button>
      </div>
      </GenericTemplate>
    );
}
export default SubComponent2;