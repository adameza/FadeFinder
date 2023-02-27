import React, {useState} from 'react';
import Select from 'react-select'
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

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "day")
      setAvail(
         {day: value, startTime: avail['startTime'], endTime: avail['endTime']});
    else if (name === "startTime")
      setAvail(
        {day: avail['day'], startTime: value, endTime: avail['endTime']});
    else
      setAvail(
        {day: avail['day'], startTime: avail['startTime'], endTime: value});
  }

  function submitForm() {
    props.handleSubmit(avail);
    setAvail({day: '', startTime: '', endTime: ''});
  }  

  return (
    <form>
      <label htmlFor="day">Day</label>
      <Select 
        isSearchable={true} 
        name="day"
        id="day"
        options={options}
        value={avail.day}
        onChange={handleChange}
      />
      <label htmlFor="time">Time</label>
      <TimeRange startMoment={avail.startTime} endMoment={avail.endTime} onChange={handleChange}/>
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
);

}
export default Form;