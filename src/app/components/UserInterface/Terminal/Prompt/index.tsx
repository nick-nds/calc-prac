import { useState, useEffect, useRef } from 'react'

export const Prompt = (props: any) => {
  const inputRef = useRef(null)
  const [correct, setCorrect] = useState('primary')
  const [answer, setAnswer] = useState()
  const [operator, setOperator] = useState(1)
  let [operationsMap, setOperationMap] = useState([
    {},
    {
      symbol: (a: number, b: number) => {
        return <>{a} / {b}</>
      },
      action: (a: number, b: number) => a/b
    },
    {
      symbol: (a: number, b: number) => {
        return <>{a} &times; {b}</>
      },
      action: (a: number, b: number) => a*b
    },
    {
      symbol: (a: number, b: number) => {
        return <>{a} &#43; {b}</>
      },
      action: (a: number, b: number) => a+b
    },
    {
      symbol: (a: number, b: number) => {
        return <>{a} &minus; {b}</>
      },
      action: (a: number, b: number) => a-b
    },
    {
      symbol: (a: number, b: number) => {
        return <>{a}<sup>{b}</sup></>
      },
      action: (a: number, b: number) => a**b
    },
    {
      symbol: (a: number, b: number) => {
        return <><sup>{b}</sup>&radic;{a}</>
      },
      action: (a: number, b: number) => a**(1/b)
    },
    {},
  ])

  useEffect(() => {
    if(!inputRef.current.readOnly) {
      setOperator(props.operation)
    }
  }, [props.operation])

  useEffect(() => {
    setOperationMap(values => {
      return [
        ...values,
        values[Math.floor(Math.random() * values.length)]
      ]
    })
  }, [])

  useEffect(() => {
    setOperationMap(values => {
      return [
        ...values.slice(0, 7),
        values[Math.floor(Math.random() * values.length)]
      ]
    })
    console.log("props", props.random)
  }, [props.random])

  const submitAnswer = (e: any) => {
    if(e.key == 'Enter') {
      e.target.readOnly = true
      checkAnswer(e.target.value)
      e.target.blur()
      props.setCurrentQuestion(v => {
        console.log("current", v)
        return v+1
      })
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const checkAnswer = (val: number) => {
    const ans = roundNumber(operationsMap[operator].action(props.expression.a, props.expression.b))
    const inputVal = roundNumber(Number(val))
    console.log("ans", inputVal, typeof inputVal, ans)
    if (inputVal == ans) {
      setCorrect('success')
    } else {
      setCorrect('danger')
    }
    setAnswer(ans)
  }

  const roundNumber = (num: number) => {
    return Math.round((num + Number.EPSILON) * 100) / 100
  }

  return <>
    <div className={"d-flex flex-column border border-" + correct +" p-2 justify-content-start"}>
      <p className="text-start">{ operationsMap[operator].symbol(props.expression.a, props.expression.b) }</p>
      <p className="text-start">
        <span>&gt;&gt; </span>
        <input ref={inputRef} className="border-0 text-white bg-dark prompt-input" type="number" 
          onKeyUp={(event) => submitAnswer(event)}
        />
      </p>
      <p className="text-start">Answer: {answer}</p>
    </div>
  </>
}
