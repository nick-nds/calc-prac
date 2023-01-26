import { useState, useEffect } from 'react'
import { NumberTypes } from '/interfaces'


export const useHook = () => {
  const [numberOne, setNumberOne] = useState<NumberTypes>({
    from: 1,
    to: 10,
  })
  const [numberTwo, setNumberTwo] = useState<NumberTypes>({
    from: 1,
    to: 10,
  })
  const [points, setPoints] = useState<number>(10)
  const [listOne, setListOne] = useState([1])
  const [listTwo, setListTwo] = useState([1])

  useEffect(() => {
    console.log("numbers", numberOne, numberTwo)
    if(numberOne.from && numberOne.to && numberTwo.from &&numberTwo.to && points) {
      console.log("now")
      setListOne([])
      setListTwo([])
      for(let i = 0; i < points; i++) {
        setListOne(values => [...values, Math.floor(Math.random() * (numberOne.to - numberOne.from + 1) ) + numberOne.from])
        setListTwo(values => [...values, Math.floor(Math.random() * (numberTwo.to - numberTwo.from + 1) ) + numberTwo.from])
      }
    }
  }, [numberOne, numberTwo, points])

  return {
    numberOne: [ numberOne, setNumberOne ],
    numberTwo: [ numberTwo, setNumberTwo ],
    points: [ points, setPoints ],
    listOne: listOne,
    listTwo: listTwo,
  }
}
