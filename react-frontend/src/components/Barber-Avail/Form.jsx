import React, { useState } from 'react'
import Select from 'react-select'
import './form.css'
import TimeRange from 'react-time-range'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function Form(props) {
  const options = [
    { value: 'barber_id', label: 'Sun' },
    { value: 'barber_id', label: 'Mon' },
    { value: 'barber0_id', label: 'Tue' },
    { value: 'barber1_id', label: 'Wed' },
    { value: 'barber1_id', label: 'Thurs' },
    { value: 'barber1_id', label: 'Fri' },
    { value: 'barber1_id', label: 'Sat' },
  ]

  const appoinTimes = [
    {value: '0', label: '30 Min'},
    {value: '1', label: '1 Hour'}
  ]

  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [date, setDate] = useState(new Date())
  const [checked, setChecked] = useState(false)
  const [len, setLen] = useState()

  const checkChange = () => {
    return setChecked(!checked);
  };

  function handleChange(event) {
    if (event.startTime) {
      setStart(event.startTime)
    }
    if (event.endTime) {
      setEnd(event.endTime)
    }
  }

  function getTime(dateString) {
    return dateString.split("T")[1]
  }

  function getDate(dateString) {
    return dateString.split("T")[0]
  }

  function submitForm() {
    let startTime = getDate(date.toISOString()) + "T" + getTime(start.toString())
    let endTime = getDate(date.toISOString()) + "T" + getTime(end.toString())
    let hourDiff = (Math.abs(avail['startTime'] - avail['endTime']) / 60 / 60 / 1000)
    let avail = {startTime: new Date(startTime), endTime: new Date(endTime)}
    console.log(avail)
    console.log((Math.abs(avail['startTime'] - avail['endTime']) / 60 / 60 / 1000))
    console.log(len)
    for (let i=0; i < hourDiff; i+=1) {
      
    }

  }

  return (
    <form>
      <label htmlFor="day">Day</label>
      <input
            type="date"
            onChange={(e) => setDate(e.target.valueAsDate)}
          />
      <label>Length of Appointments?
        <Select options={appoinTimes} onChange={setLen}/>
      </label>
      <label>Time</label>
      <TimeRange onChange={handleChange} startMoment={start} endMoment={end}/>
      <label>
      <input type="checkbox" value={checked} onChange={checkChange}/>
      Recurring?
      </label>
      {checked && (<label>How many weeks?<input type="number"/></label>)}
      <input type="button" value="Add" onClick={submitForm} />
    </form>
  )
}
export default Form
