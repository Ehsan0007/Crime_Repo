import * as React from "react";
import { Link } from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';



export class SigninComponent extends React.Component {


    render() {
        const center = {
            width: '90%',
            margin: '0 auto'
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
            marginTop : 20
        }
      
        const para = {
           marginLeft : -110
        }
        return (
            /*<div style={center}>
                <AppBar
                    title="Please Signin"
                    showMenuIconButton={false} />
                <form onSubmit={this.props._submit}>
                    <TextField
                        type="email"
                        hintText="email"
                        name="email"
                        onChange={this.props._inputHandler}
                        required fullWidth
                        /><br />

                    <TextField
                        type="password"
                        hintText="password"
                        name="pass"
                        onChange={this.props._inputHandler}
                        required fullWidth
                        /><br />
                    <RaisedButton type="submit" label="Sign in" primary={true} />
                </form>
                <div style={{ marginTop: "10px" }}> Don't have account?? <Link to="/" style={{ cursor: "pointer" }}>Create an account.</Link>
                </div>
            </div>*/
            <div style={center}>
                <AppBar style={Main_App}
                    title="Online Blood System"
                    showMenuIconButton={false} />
              
                    <Paper style={paperstyle} zDepth={5}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{color:'#87ceeb'}}>Login</h1>
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

                         <RaisedButton type="submit" label="Login" primary={true} style={login}/><br/>
                          {/*<p style={para}>Create Account <Link to="/login">Login</Link></p>*/}
                   
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