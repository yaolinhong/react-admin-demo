// TODO 增加权限控制
// TODO 增加全局状态管理

import React, { useState } from "react";
// import logo from "@/logo.svg";

function Test() {
  const [count, setCount] = useState(0);
  return (
    <div className="box-border bg-purple-400 App">
      {count}
      <button className="bg-yellow-400 rounded-3xl" onClick={(): void => setCount((currentCount) => currentCount + 1)}>
        +1
      </button>
      <img alt="" />
    </div>
  );
}

export default Test;
