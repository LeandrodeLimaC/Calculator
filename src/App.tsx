import { useEffect, useState } from "react";

type OperatorType = {
  [key: string]: (a: number, b: number) => number
}

const operatorsTable: OperatorType = {
  sum: (a, b) => a + b
}

function App() {
  const [firstNumber, setFirstNumber] = useState<string>('')
  const [secondNumber, setSecondNumber] = useState<string>('')
  const [operatorName, setOperatorName] = useState<string>('')
  const [result, setResult] = useState<string>()

  // useEffect(() => {
  //   console.log('firstNumber', firstNumber)
  //   console.log('secondNumber', secondNumber)
  //   console.log('operatorName', operatorName)
  //   console.log('result', result)
  // }, [firstNumber, secondNumber, operatorName, result])

  function setNumber(entry: number) {
    if (!operatorName)
      return setFirstNumber(`${firstNumber || ''}${entry}`)

    return setSecondNumber(`${secondNumber || ''}${entry}`)
  }

  function handleOperator(operation: string) {
    if (operatorName) getResult()
    else {
      if (!firstNumber) {
        setFirstNumber(`${result}`)
        setResult('')
      }
      setOperatorName(operation)
    }
  }

  function getResult() {
    if (!operatorName) {
      if (firstNumber) return setResult(firstNumber)
      else return
    }

    const operator: Function = operatorsTable[operatorName]
    const result = operator(Number(firstNumber), Number(secondNumber || firstNumber))

    setResult(`${result}`)
    resetStates()
  }

  function resetStates() {
    setOperatorName('')
    setFirstNumber('')
    setSecondNumber('')
  }

  return (
    <div>
      <p> first: {firstNumber} </p>
      <p> second: {secondNumber} </p>
      {result && (<p> result: {result} </p>)}
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>

      <button onClick={() => handleOperator('sum')}>+</button>
      <button onClick={() => getResult()}>=</button>
    </div>
  );
}

export default App;
