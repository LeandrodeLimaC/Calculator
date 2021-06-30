import { useState } from "react";

function App() {
  const [firstNumber, setfirstNumber] = useState<string>('')
  const [secondNumber, setSecondNumber] = useState<string>('')
  const [flag, setFlag] = useState<string>('')
  const [result, setResult] = useState<string>()

  type OperatorType = {
    [key: string]: (a: number, b: number) => number
  }

  const operatorsTable: OperatorType = {
    sum: (a, b) => a + b
  }

  function setNumber(entry: number) {
    if (!flag) {
      let tmp = `${firstNumber || ''}${entry}`
      return setfirstNumber(tmp)
    }

    let tmp = `${secondNumber || ''}${entry}`
    return setSecondNumber(tmp)
  }

  function flagaa(operation: string) {
    if (flag)
      getResult()
    else
      setFlag(operation)
  }

  function getResult() {
    const operator: Function = operatorsTable[flag]

    const result = operator(Number(firstNumber), Number(secondNumber || firstNumber))
    setResult(`${result}`)

    setFlag('')
    setfirstNumber('')
    setSecondNumber('')
  }

  return (
    <div>
      <p> first: {firstNumber} </p>
      <p> second: {secondNumber} </p>
      <p> result: {result} </p>
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>

      <button onClick={() => flagaa('sum')}>+</button>
      <button onClick={() => getResult()}>=</button>
    </div>
  );
}

export default App;
