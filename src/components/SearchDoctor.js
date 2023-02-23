import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SearchDoctor() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    
    <Box>
         <Typography variant="h4" gutterBottom align='center' sx={{mt:5}}>
            Find Doctor
                </Typography>
    <Box sx={{ minWidth: 220,mt:2 ,display:'flex', justifyContent:'center',gap:'60px',backgroundColor:'whitesmoke',p:2}}>
      <FormControl sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label">Specialist</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"

          onChange={handleChange}
        >
          <MenuItem value=''>Dematologist</MenuItem>
          <MenuItem value=''>Heart  Specialist</MenuItem>
          <MenuItem value=''>Kidney Specialist</MenuItem>
        </Select>
      </FormControl>

      <FormControl  sx={{width:'200px'}}>
        <InputLabel id="demo-simple-select-label">Doctor</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          
          onChange={handleChange}
        >
          <MenuItem value=''>Hamenta Jung Karki</MenuItem>
          <MenuItem value=''>Manish Rai</MenuItem>
          <MenuItem value=''>Binit Limbu</MenuItem>
          <MenuItem value=''>Sandesh Adhikari</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" size='small' >Find</Button>
    </Box>
    </Box>
  );
}