import * as React from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class SignupComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 1 }
    }
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        console.log(this.props)
        const styles = {
            customWidth: {
                width: 150,
                marginRight: 100
            },
        };
        const style = {
            fontSize: '17px',
            padding: '2px 23px 2px 23px',
            boxShadow: '5px 5px 5px black',
            border: 'outset 3px red'
        }
        const center = {
            width: '90%',
            margin: '0 auto'
        }
        const Main_App = {
            width: '100%',
            margin: '0 auto'
        }
        const paperstyle = {
            height: 'auto',
            width: '40%',
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            marginTop: 60
        };
        const login = {
            marginLeft: -170,
            marginTop: 20
        }
        const sign = {
            margin: 10
        }
        const para = {
            marginLeft: -110
        }


        return (
            <div style={center}>
                <AppBar style={Main_App}
                    title="Online Blood System"
                    showMenuIconButton={false} />
                <Paper style={paperstyle} zDepth={5}>
                    <form onSubmit={this.props._submit} >
                        <h1 style={{ color: '#87ceeb' }}>SignUP</h1>
                        <TextField
                            hintText="First Name"
                            floatingLabelText="First Name"
                            name="first"
                            ref="first"
                            value={this.props.signUpState.first}
                            onChange={this.props._inputHandler}
                        /><br />
                        <TextField
                            hintText="Last Name"
                            floatingLabelText="Last Name"
                            name="last"
                            ref="last"
                            value={this.props.signUpState.last}
                            onChange={this.props._inputHandler}
                        /><br />

                        <TextField
                            hintText="Enter Email"
                            floatingLabelText="Email"
                            name="email"
                            ref="email"
                            value={this.props.signUpState.email}
                            onChange={this.props._inputHandler}
                        /><br />
                        <TextField
                            hintText="Enter password"
                            floatingLabelText="Password"
                            name="pass"
                            ref="pass"
                            value={this.props.signUpState.pass}
                            onChange={this.props._inputHandler}
                        /><br />

                        <select
                            name="blood"
                            value={this.props.signUpState.blood}
                            required
                            onChange={this.props._inputHandler}>
                            <option>Blood Type   </option>
                            <option value="A">A+   </option>
                            <option value="B">B+   </option>
                            <option value="O">O+   </option>
                            <option value="AB">AB+</option>
                        </select>
                        {/*<SelectField
                            name="group"
                            floatingLabelText="Frequency"
                            value={this.props.signUpState.group}
                            onChange={this.props._inputHandler}
                            style={styles.customWidth}
                        >
                            <MenuItem value="A" primaryText="A" />
                            <MenuItem value="AB" primaryText="AB" />
                            <MenuItem value="B" primaryText="B" />
                            <MenuItem value="O" primaryText="O" />


                        </SelectField><br />*/}

                        <RaisedButton type="submit" label="Submit" primary={true} style={login} /><br />
                        <p style={para}>Create Account <Link to="/login">Login</Link></p>

                        <br />

                    </form>
                </Paper>

            </div>
        )
    }
}
SignupComponent.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}