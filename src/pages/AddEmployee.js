import React from "react";
import {useState} from 'react';
import { createVendiaClient } from '@vendia/client';



const client = createVendiaClient({
    apiUrl: 'https://arimkqyeak.execute-api.us-west-2.amazonaws.com/graphql/',
    apiKey: '413K6uKaD5V4QKoV3SRFo3RagGmz6qj3MK8ESei98uD6'

  });



const AddEmployee = () => {

  const[EmpId, setEmpId] = useState("");
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[age, setAge] = useState("");
  const[genderIdentity, setGenderIdentity] = useState("");
  const[height, setHeight] = useState("");
  const[weight, setWeight] = useState("");
  const[BodyTemperature, setBodyTemperature] = useState("");
  const[pulseRate, setPulseRate] = useState("");
  const[bloodPressureSystolic, setBloodPressureSystolic] = useState("");
  const[bloodPressureDiastolic, setBloodPressureDiastolic] = useState("");
  const[respirationRate, setRespirationRate] = useState("");
  const[exerciseHours, setExerciseHours] = useState("");
  const[vacationBalance, setVacationBalance] = useState("");
  const[workHours, setWorkHours] = useState("");

  async function asyncAddEmployee() {
    window.alert('Adding data to Vendia');
    const { entities } = client;
      const employeeResponse = await entities.employee.add({
        //emp_id: EmpId,
        firstName: firstName,
        lastName: lastName,
        age: age,
        genderIdentity: genderIdentity,
        height: height,
        weight: weight,
        BodyTemperature: BodyTemperature,
        pulseRate: pulseRate,
        bloodPressureSystolic: bloodPressureSystolic,
        bloodPressureDiastolic: bloodPressureDiastolic,
        respirationRate: respirationRate,
        exerciseHours: exerciseHours,
        vacationBalance: vacationBalance,
        workHours: workHours,
      });
      console.log(employeeResponse);
      window.alert("Employee added to Vendia!");
    }

    function handleSubmit(e) {
      e.preventDefault();
      asyncAddEmployee();
      
    }
    
    
    
    
    return(
            <div className="App">
            <h1>Add Employee</h1>
      <form  onSubmit={handleSubmit}>
      <label>
    Employee Id: 
    <input type="number" value={EmpId} onChange={(e)=> {setEmpId(e.target.value)}}/><br/>
    </label>
    <label>
    First Name: 
    <input type="text" value={firstName} onChange={(e)=> {setFirstName(e.target.value)}}/><br/>
    </label>
    <label>
    Last Name: 
    <input type="text" value={lastName} onChange={(e)=> {setLastName(e.target.value)}}/><br/>
    </label>
    <label>
    Age: 
    <input type="number" value={age} onChange={(e)=> {setAge(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Gender:<br/>
    <input type="radio" value={genderIdentity} onChange={(e)=> {setGenderIdentity("Woman")}}/>Female
    <input type="radio" value={genderIdentity} onChange={(e)=> {setGenderIdentity("Man")}}/>Male
    <input type="radio" value={genderIdentity} onChange={(e)=> {setGenderIdentity("Transgender")}}/>Transgender
    <input type="radio" value={genderIdentity} onChange={(e)=> {setGenderIdentity("NonbinaryNonconforming")}}/>NonBinary
    <input type="radio" value={genderIdentity} onChange={(e)=> {setGenderIdentity("PreferNotToRespond")}}/>No Response<br/>
    </label>
    <label>
    Height (*In inches): 
    <input type="number" value={height} onChange={(e)=> {setHeight(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Weight (*In pounds): 
    <input type="number" value={weight} onChange={(e)=> {setWeight(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Body Temperature (*In Fahrenheit): 
    <input type="number" value={BodyTemperature} onChange={(e)=> {setBodyTemperature(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Pulse Rate (*In BPM): 
    <input type="number" value={pulseRate} onChange={(e)=> {setPulseRate(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Blood Pressure (*In mm Hg):
    <input type="number" value={bloodPressureSystolic} onChange={(e)=> {setBloodPressureSystolic(parseInt(e.target.value))}}/><br/>
    <input type="number" value={bloodPressureDiastolic} onChange={(e)=> {setBloodPressureDiastolic(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Respiration Rate (*In breaths per minute):
    <input type="number" value={respirationRate} onChange={(e)=> {setRespirationRate(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Average Hours of Exercise Per Week:
    <input type="number" value={exerciseHours} onChange={(e)=> {setExerciseHours(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Vacation Balance (*In Days):
    <input type="number" value={vacationBalance} onChange={(e)=> {setVacationBalance(parseInt(e.target.value))}}/><br/>
    </label>
    <label>
    Average Hours of Work Per Week:
    <input type="number" value={workHours} onChange={(e)=> {setWorkHours(parseInt(e.target.value))}}/><br/>
    </label>
    </form>
    <button onClick={asyncAddEmployee}>Add Employee</button>
    </div>
  );
}

export default AddEmployee;