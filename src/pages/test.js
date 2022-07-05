import { createVendiaClient } from '@vendia/client';



const client = createVendiaClient({
    apiUrl: 'https://arimkqyeak.execute-api.us-west-2.amazonaws.com/graphql/',
    apiKey: '413K6uKaD5V4QKoV3SRFo3RagGmz6qj3MK8ESei98uD6'

  });



export default function AddEmployee()
{
  async function asyncAddEmployee() {
    console.log('Testing...');
    window.alert("Added employee!");
      const employeeResponse = await entities.employee.add({
        emp_id:1,
        firstName: 'This is',
        lastName: 'Test',
        age: 13,
        genderIdentity: 'Man',
        height: 67,
        weight: 45,
        BodyTemperature: 67,
        pulseRate: 45,
        bloodPressureSystolic: 120,
        bloodPressureDiastolic: 100,
        respirationRate: 12,
        exerciseHours: 12,
        vacationBalance: 34,
        workHours: 12,
      });
      console.log(employeeResponse);

      asyncAddEmployee();
      console.log('You have added an employee.');
    }
   

}