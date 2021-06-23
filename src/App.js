import { useEffect, useState } from "react"
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://streinvestapi.herokuapp.com/consortium/fjuhrHbtkje3qUoEqWzo")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <div className="App">
      <Autocomplete
        id="combo-box-demo"
        options={data.response}
        getOptionLabel={(option) => option.consortium_name}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="consorcios" variant="outlined" />}
      />
    </div>
  );
}

export default App;
