import React, { useState } from 'react'

export default function Calci() {
    const [firstNo, setfirstNo] = useState()
    const [secondNo, setsecondNo] = useState()
    const [result, setresult] = useState()
    const addition = ()=>{
        setresult(firstNo + secondNo)
    }
    const substraction = ()=>{
        setresult(firstNo - secondNo)
    }
    const multiplication = ()=>{
        setresult(firstNo * secondNo)
    }
    const division = ()=>{
        setresult(firstNo / secondNo)
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Calculator</div>
                    <div className="card-body">
                            <label htmlFor="Number1">Number 1</label>
                            <input onChange={e=> setfirstNo(+e.target.value)} type="number"  className="form-control" />
                        <br />
                            <label htmlFor="Number2">Number 2</label>
                            <input onChange={e=> setsecondNo(+e.target.value)} type="number" className="form-control" />
                        <br />
                        <h5>{result}</h5>
                        <br />
                        <div className="btn-group w-100">
                            <button className="btn btn-success" onClick={addition}>+</button>
                            <button className="btn btn-danger" onClick={substraction}>-</button>
                            <button className="btn btn-warning" onClick={multiplication}>*</button>
                            <button className="btn btn-info" onClick={division}>/</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
