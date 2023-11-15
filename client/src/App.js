import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import {Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";

class App extends Component {
  state = {
    customers: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({customers: res})
        .catch(err => console.log(err));
      });
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
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
              <TableCell cellSpan={6}>데이터가 없습니다</TableCell>
            </TableRow>
          }
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default App;
