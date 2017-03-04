import React, { Component } from 'react';
import { Loggedin } from '../store/action/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { FirebaseService } from '../helpers/firebaseService'
// import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableCrime from './MainCrime'

const homeapp = {
   width : '15  0%',
   padding : 0,
   margin : 0,
   
}
const list = {
  backgroundColor : 'transparent',
  height : 40,
  marginTop : 10
   
}
const logout = {
  backgroundColor : 'transparent',
  height : 40,
  marginTop : 10,
  margin : 10
}
const search = {
  backgroundColor : 'transparent',
  height : 40,
  marginTop : 10,
  margin : 10
}

const styles = {
    root: {
        border: '2px outset',
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.authReducer.user.email
        }
    }

    componentWillMount() {
        let key = localStorage.getItem('currentUser')
        FirebaseService.ref.child(`/Blood`).on("child_added", (snapshot) => {
            if (snapshot.val().type === 'donor') {

            console.log(snapshot.val())
            }
        })
        FirebaseService.ref.child(`/users/${key}`).on("value", (snapshot) => {
            if (snapshot.val()) {
                this.setState({
                    name: snapshot.val().firstname + " " + snapshot.val().lastname
                })
                this.props.Loggedin(snapshot.val())
            }
        })
    }
    render() {
        
        setInterval(() => {
            (this.props.authReducer.user.type === 'donor') ? this.setState(<h1></h1>) : <h1></h1>
        }, 200)
        return (
           
            <div className="App">
                 <AppBar style={{backgroundColor : '#9C27B0'}}
                        title="Crime Report System"
                        iconClassNameRight="muidocs-icon-navigation-expand-more">

               
                      <Link to ="/home/signup"> <RaisedButton label="SignUp"  style={search} /></Link>
                     <Link to ="/home/login"><RaisedButton label="Login" style={logout} /></Link>
                        </AppBar>
                <TableCrime/>
                {this.props.children}
              
            </div>
        );
    }
}
const mapStateToProps = (state) => { // mapStateToProps ye iska apna function he
    return {
        authReducer: state
    }
}
const mapDispatchToProps = (dispatch) => { // mapDispatchToProps ye iska apna function he
    return {
        Loggedin: (data) => {
            dispatch(Loggedin(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

                        // <List>
                        //     <ListItem
                        //         primaryText="Name"
                        //         secondaryText={this.props.authReducer.user.firstname + " " + this.props.authReducer.user.lastname}
                        //         />
                        //     <ListItem
                        //         primaryText="Email"
                        //         secondaryText={this.props.authReducer.user.email}
                        //         />
                        //     <ListItem
                        //         primaryText="Age"
                        //         secondaryText={this.props.authReducer.user.age}
                        //         />
                        //     <ListItem
                        //         primaryText="Blood Group"
                        //         secondaryText={this.props.authReducer.user.blood}
                        //         />
                        // </List>