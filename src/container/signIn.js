import * as React from "react";
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';



export class SigninComponent extends React.Component {


    render() {
        const center = {
            width: '80%',
            margin: 'auto'
        }
         const Main_App = {
            width: '100%',
            margin: '0 auto'
        }
        const paperstyle = {
            height: 350,
            width: '40%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            marginTop : 100,
            marginLeft : '30%'
        };
        const login = {
            marginLeft : -170,
            marginTop : 20,
            backgroundColor : '#9C27B0'
        }
      
        const para = {
           marginLeft : -110
        }
        return (
        
            <div style={center}>

                    <Paper style={paperstyle} zDepth={5}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{color:'#9C27B0'}}>Login</h1>
                        <TextField
                             hintText="Enter Email Address"
                             floatingLabelText="Email Address"
                             name="email"
                          
                             onChange={this.props._inputHandler}
                             /><br />

                             <TextField
                             hintText="Enter password"
                             floatingLabelText="Password"
                              name="pass"
                            
                             onChange={this.props._inputHandler}
                             /><br />

                         <RaisedButton type="submit" label="Login"  style={login}/><br/>
                   
                    <br />
                   
                        </form>
                    </Paper>
              
            </div>
        )
    }
}
SigninComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}