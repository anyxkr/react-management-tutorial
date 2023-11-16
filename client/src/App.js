import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import {Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

class App extends Component {
  state = {
    customers: "",
    completed: 0
  };

  componentDidMount() {
    const timer = setInterval(this.progress, 120);
    this.callApi()
      .then(res => { 
        this.setState({customers: res}); 
        clearInterval(timer);
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 15 });
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Jop</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            this.state.customers ?
            this.state.customers.map(c => {
              return (
                <Customer
                  key={c.id} 
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                  />
              )
            }) : 
            <TableRow>
              <TableCell colSpan={6} align="center">
                <Stack spacing={2} direction="row">
                  <CircularProgress variant="determinate" value={this.state.completed} />
                </Stack>
              </TableCell>
            </TableRow>
          }
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default App;
