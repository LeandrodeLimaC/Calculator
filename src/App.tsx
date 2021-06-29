import { useState } from "react";
// import { Display } from "./components/Display";

function App() {
  const [firstNumber, setfirstNumber] = useState<string>('')
  const [secondNumber, setSecondNumber] = useState<string>('')
  const [flag, setFlag] = useState<boolean>(false)
  const [result, setResult] = useState<string>()

  function handler(entry: number) {
    if (!flag) {
      let tmp = `${firstNumber || ''}${entry}`
      return setfirstNumber(tmp)
    }

    let tmp = `${secondNumber || ''}${entry}`
    return setSecondNumber(tmp)
  }

  function flagaa() {
    if (flag)
      getResult()
    else
      setFlag(true)
  }

  function getResult() {
    const a = sum(Number(firstNumber), Number(secondNumber))
    setResult(`${a}`)

    setFlag(false)
    setfirstNumber('')
    setSecondNumber('')
  }

  function sum(a: number, b: number): number {
    console.log(a + (b || a))
    return a + (b || a)
  }

  return (
    <div>
      <p> first: {firstNumber} </p>
      <p> second: {secondNumber} </p>
      <p> result: {result} </p>
      <button onClick={() => handler(1)}>1</button>
      <button onClick={() => handler(2)}>2</button>
      <button onClick={() => handler(3)}>3</button>
      <button onClick={() => handler(4)}>4</button>
      <button onClick={() => handler(5)}>5</button>

      <button onClick={() => flagaa()}>+</button>
      <button onClick={() => getResult()}>=</button>
    </div>
  );
}

export default App;
