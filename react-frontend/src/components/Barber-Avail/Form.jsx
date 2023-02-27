import React, {useState} from 'react';
import Select from 'react-select'
import "./form.css"
import TimeRange from 'react-time-range';

function Form(props) {

  const options = [
    { value: 'barber_id', label: 'Sun' },
    { value: 'barber_id', label: 'Mon' },
    { value: 'barber0_id', label: 'Tue' },
    { value: 'barber1_id', label: 'Wed' },
    { value: 'barber1_id', label: 'Thu' },
    { value: 'barber1_id', label: 'Fri' },
    { value: 'barber1_id', label: 'Sat' }
  ]

  const [avail, setAvail] = useState(
     {
        day: "",
        startTime: "",
        endTime: ""
     }
  );

  function convertTime(date) {
    let time = new Date(date)
    let hrs = time.getHours()
    let min = time.getMinutes()
    if (hrs > 12)
      var post = "PM"
    else 
      var post = "AM"
    hrs = hrs % 12
    return `${hrs}:${min} ${post}`
  }

  function handleChange(event) {
    const day = event.label;
    const start = event.startTime;
    const end = event.endTime;
    if (day) {
      setAvail(
          {day: day, startTime: avail['startTime'], endTime: avail['endTime']});
      }
    else if (start) {
      setAvail(
        {day: avail['day'], startTime: convertTime(start), endTime: avail['endTime']});
      }
    else if (end){
      setAvail(
        {day: avail['day'], startTime: avail['startTime'], endTime: convertTime(end)});
      }
  }

  function submitForm() {
    props.handleSubmit(avail);
    setAvail({day: '', startTime: '', endTime: ''});
  }  

  return (
    <form>
      <label htmlFor="day">Day</label>
      <Select 
        isSearchable={false} 
        options={options}
        value={{label: avail.day}}
        onChange={handleChange}
      />
      <label htmlFor="time">Time</label>
      <TimeRange onChange={handleChange}/>
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
);

}
export default Form;