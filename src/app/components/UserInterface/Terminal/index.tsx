import { useEffect, useState, useRef } from 'react'
import { Prompt } from './Prompt'

export const Terminal = (props: any) => {
  const pRef = useRef(null)
  const [ currentQuestion, setCurrentQuestion] = useState(-1)
  const [ questionPrompt, setQuestionPrompt] = useState([])

  useEffect(() => {
    console.log("start now", currentQuestion)
    if(currentQuestion > -1 && currentQuestion < props.expressions.length) {
      setQuestionPrompt(values => {
        return [
          ...values,
          props.expressions[currentQuestion]
        ]
      })
    }
  }, [currentQuestion])

  useEffect(() => {
    pRef.current.scrollIntoView({ behaviour: 'smooth' })
  }, [questionPrompt])

  return <div className="container text-center mt-5">
    <div className="border w-75 m-auto pt-3 bg-dark text-white"
      style={{
        'height': '500px',
        'overflow': 'auto'
      }}
    >
      { currentQuestion < 0 && <button className="btn btn-primary" onClick={() => setCurrentQuestion(0)}>Start</button> }
      { questionPrompt.map((question: any, i: number) => {
        return <div key={i} className="px-3 my-3"><Prompt operation={props.operation} random={props.random} expression={question} setCurrentQuestion={setCurrentQuestion} /></div>
      }) }
      <br />
      <br ref={pRef} />
    </div>
  </div>
}
