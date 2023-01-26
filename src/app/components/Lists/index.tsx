import { useCallback, useState } from 'react'

export const Lists = (props) => {
  const renderList = useCallback((li) => {
    return  props.lists[li].map((l, i) => {
      return <div className="mx-2 p-2" key={i}>
        <input type="number" 
          className="text-center p-1 border-0 border-bottom"
          style={{
            'width': '100px'
          }}
          value={l} 
          onChange={(e) => {
            props.setLists((values) => {
              return {
                ...values,
                [li]: values[li].map((v,k) => {
                  return k==i ? e.target.value : v
                }),
              }
            })
          }}
        />
      </div>
    }) 
  }, [props.lists])

  return <>
    <div className="container mt-3 pl-5">
      <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#lists">View lists</button>
      <div id="lists" className="collapse">
        <div className="d-flex flex-row flex-wrap">
          { renderList('l1') }
        </div>
        <hr />
        <div className="d-flex flex-row flex-wrap">
          { renderList('l2') }
        </div>
      </div>
    </div>
  </>
}
