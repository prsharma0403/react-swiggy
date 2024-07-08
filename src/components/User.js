import { useState } from "react";

const User = ({name}) => {
    const [count]=useState(0);
    const [count1]=useState(1);

    return (
      <div className="user-card">
        <ul>
        <h1> count={count}</h1>
        <h1> count={count1}</h1>
          <li>Name:{name}</li>
          <li>Location:Bihar</li>
          <li>Contact:@firstratedengineer</li>
        </ul>
      </div>
    );
  };
  export default User;
  