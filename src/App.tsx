import { Button, Text } from "@koki-iwaizumi/lit-element-starter-ts";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button
        name="Add"
        onClickButton={(e) => {
          console.log("ボタンが押されました", e);
          setCount(count + 1);
        }}
      />
      <Text value={"" + count} />
    </div>
  );
}

export default App;
