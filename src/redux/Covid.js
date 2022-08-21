import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCovidCases } from './covidCasesSlice'
import './covid.css'

function Covid() {
    const covidData = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCovidCases())
    },[dispatch])    
    return (
    <div>
    <div>
    {covidData.loading && <h1>Loading...</h1>}
    {!covidData.loading && covidData.error ? <h1>{covidData.error}</h1> : null}
    {
        !covidData.loading && 
        covidData.data ? <div id='head'>
            <h1>Covid cases in Nigeria</h1>
            <div id='hd-stat'>
            <div className='case-bx'><div className='hd-title'>Samples Tested</div><div className='hd-number'>{covidData.data.data.totalSamplesTested}</div></div>
            <div className='case-bx'><div className='hd-title'>Confirmed Cases</div><div className='hd-number'>{covidData.data.data.totalSamplesTested}</div></div>
            <div className='case-bx'><div className='hd-title'>Active Cases</div><div className='hd-number'>{covidData.data.data.totalSamplesTested}</div></div>
            <div className='case-bx'><div className='hd-title'>Discharged Cases</div><div className='hd-number'>{covidData.data.data.totalSamplesTested}</div></div>
            <div className='case-bx'><div className='hd-title'>Death</div><div className='hd-number'>{covidData.data.data.totalSamplesTested}</div></div>
        </div>
        </div> : null
    }
    {
        !covidData.loading &&
        covidData.data ? 
        <div id='content'>
            <h1>Cases by State</h1>
            <div id='states'>
                {covidData.data.data.states.map((state)=>(
                    <div className='state-data'>
                        <h2 id='state-name'>{state.state}</h2>
                        <div>
                            <p>Confirmed cases: {state.confirmedCases}</p>
                            <p>Cases on admission: {state.casesOnAdmission}</p>
                            <p>Discharged: {state.discharged}</p>
                            <p>Deaths: {state.death}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> : null
    }
    </div>
    </div>
    )
}

export default Covid
