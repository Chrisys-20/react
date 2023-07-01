import './App.css';
import Employee from './components/Employee';

function App() {

  const showEmployees =true;
  return (
    <div className="App">
      {console.log('inside the return')}
      { 
      showEmployees ?(
        <>
      <Employee name="Caleb" role="Inter"/>
      <Employee />
      <Employee/>
      <Employee/>
      </>
      ):(<p>You cannot see the employees.</p>)
      }
    </div>
  );
}

export default App;
