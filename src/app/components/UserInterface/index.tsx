import { useState, useEffect } from 'react'
import { Operations } from './Operations'
import { Terminal } from './Terminal'

export const UserInterface = (props: any) => {
  const [ operation, setOperation ] = useState(1)
  const [random, setRandom] = useState(0)
  const [ expressions, setExpressions ] = useState([])

  useEffect(() => {
    console.log("Random effect", random)
  }, [random])

  useEffect(() => {
    setExpressions(props.lists.l1.map((l: number, i: number) => {
      return {
        a: l,
        b: props.lists.l2[i],
      }
    }))

  }, [props.lists])

  return <>
    <Operations setOperation={setOperation} random={random} setRandom={setRandom} />
    <Terminal operation={operation} expressions={expressions} random={random} />
  </>
}
