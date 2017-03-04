import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TableCrime extends React.Component{
    render(){
    const tablewidth = {
        width : '90%',
        margin : '0 auto',
        border : '1px solid #000',
        marginTop : 20
    }
        return(
            <div style={tablewidth}>
                <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Gender</TableHeaderColumn>
        <TableHeaderColumn>Incident</TableHeaderColumn>
        <TableHeaderColumn>City</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Male</TableRowColumn>
        <TableRowColumn>Crime</TableRowColumn>
        <TableRowColumn>City</TableRowColumn>
        <TableRowColumn>2/10/2017</TableRowColumn>
      </TableRow>
       <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Ehsan</TableRowColumn>
        <TableRowColumn>Male</TableRowColumn>
        <TableRowColumn>Crime</TableRowColumn>
        <TableRowColumn>City</TableRowColumn>
        <TableRowColumn>2/10/2017</TableRowColumn>
      </TableRow>
       <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Ali</TableRowColumn>
        <TableRowColumn>Male</TableRowColumn>
        <TableRowColumn>Crime</TableRowColumn>
        <TableRowColumn>City</TableRowColumn>
        <TableRowColumn>2/10/2017</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Nafees</TableRowColumn>
        <TableRowColumn>Male</TableRowColumn>
        <TableRowColumn>Crime</TableRowColumn>
        <TableRowColumn>City</TableRowColumn>
        <TableRowColumn>2/10/2017</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
            </div>
        )
    }
}
export default TableCrime;
