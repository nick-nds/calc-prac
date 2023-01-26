import { useState } from 'react'
import { GlobalHotKeys } from 'react-hotkeys';

export const Operations = (props: any) => {
  const operate = (op: number) => {
    console.log("operate", op)
  }

  const [showShortcuts, setShowShortcuts] = useState(false)

  const keyMaps = {
    divide: '/',
    multiply: '*',
    add: '+',
    subtract: '-',
    exponential: 'e',
    root: 'r',
    random: 'shift+r',
    show: 'shift+?'
  }
  const handlers = {
    divide: () => props.setOperation(1),
    multiply: () => props.setOperation(2),
    add: () => props.setOperation(3),
    subtract: () => props.setOperation(4),
    exponential: () => props.setOperation(5),
    root: () => props.setOperation(6),
    random: () => {
      props.setOperation(7)
      // props.setRandom(v => {
      //   console.log(v)
      //   return v++
      // })
    },
    show: () => setShowShortcuts(value => !value)
  }
  return <>
    <GlobalHotKeys keyMap={keyMaps} handlers={handlers} allowChanges={true} />
    <div className="d-flex flex-row flex-wrap justify-content-center">
      <div className="d-flex flex-column">
        <button onClick={() => props.setOperation(1)} className="btn btn-dark mx-2">/</button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.divide}</code></span> }
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => props.setOperation(2)} className="btn btn-dark mx-2">&times;</button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.multiply}</code></span> }
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => props.setOperation(3)} className="btn btn-dark mx-2">&#43;</button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.add}</code></span> }
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => props.setOperation(4)} className="btn btn-dark mx-2">&minus;</button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.subtract}</code></span> }
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => props.setOperation(5)} className="btn btn-dark mx-2">a<sup>b</sup></button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.exponential}</code></span> }
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => props.setOperation(6)} className="btn btn-dark mx-2"><sup>b</sup>&radic;a</button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.root}</code></span> }
      </div>
      <div className="d-flex flex-column">
        <button onClick={() => handlers.random()} className="btn btn-dark mx-2">Random</button>
        { showShortcuts && <span className="m-2"><code>{keyMaps.random}</code></span> }
      </div>
    </div>
  </>
}
