import { useEffect } from 'react'
import { useHook } from './hooks'
import { NumberTypes } from '@/interfaces'

export const UserInput = (props: any) => {
  const hook = useHook()
  const [n1, setN1] = hook.numberOne
  const [n2, setN2] = hook.numberTwo
  const [p, setP] = hook.points
  useEffect(() => {
    props.setLists({
      l1: hook.listOne,
      l2: hook.listTwo,
    })
  }, [hook.listOne, hook.listTwo])
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          Number 1 (a)
        </div>
        <div className="col">
          Number 2 (b)
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <input id="from-1" className="form-control" type="number" placeholder="From" 
              value={n1.from ? n1.from : 1}
              onChange={(e) => setN1((values: NumberTypes) => {
                return {
                  ...values,
                  from: parseInt(e.target.value),
                }
              })}
            />
            <label htmlFor="from-1">From</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <input id="to-1" className="form-control" type="number" placeholder="To" 
              value={n1.to ? n1.to : 1}
              onChange={(e) => setN1((values: NumberTypes) => {
                return {
                  ...values,
                  to: parseInt(e.target.value),
                }
              })}
            />
            <label htmlFor="to-1">To</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <input id="from-2" className="form-control" type="number" placeholder="From" 
              value={n2.from ? n2.from : 1}
              onChange={(e) => setN2((values: NumberTypes) => {
                return {
                  ...values,
                  from: parseInt(e.target.value),
                }
              })}
            />
            <label htmlFor="from-2">From</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3 mt-3">
            <input id="to-2" className="form-control" type="number" placeholder="To" 
              value={n2.to ? n2.to : 1}
              onChange={(e) => setN2((values: NumberTypes) => {
                return {
                  ...values,
                  to: parseInt(e.target.value),
                }
              })}
            />
            <label htmlFor="to-2">To</label>
          </div>
        </div>
      </div>
      <div className="form-floating mb-3 mt-3">
        <input id="points" className="form-control" type="number" placeholder="List length" 
          value={p}
          onChange={e => setP(e.target.value)}
        />
        <label htmlFor="points">List length</label>
      </div>
    </div>
  )
}

