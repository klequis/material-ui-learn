import React from 'react';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import SimpleDialog from './SimpleDialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const rowData = [
    { id: 'a22', region: 'East', q1: 10, q2: 20 },
    { id: 'a33', region: 'West', q1: 10, q2: 20 }
]

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    console.log('handleClickOpen')
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const rows = rowData.map(r => {
      console.log('rendering rows')
      return (
        <TableRow key={r.id} onClick={this.handleClickOpen}>
          <TableCell>{r.region}</TableCell>
          <TableCell>{r.q1}</TableCell>
          <TableCell>{r.q2}</TableCell>
        </TableRow>
      )
    })
    return (
      <div>
        <Typography variant="subheading">Selected: {this.state.selectedValue}</Typography>
        <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Region</TableCell>
              <TableCell>Q1</TableCell>
              <TableCell>Q2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
        <SimpleDialog
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          emails={emails}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;
