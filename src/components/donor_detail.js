import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import firebase from 'firebase';
import { FirebaseService } from '../helpers/firebaseService'
import { Loggedin } from '../store/action/auth'
// import {
//   blue300,
//   indigo900,
//   orange200,
//   deepOrange300,
//   pink400,
//   purple500,
// } from 'material-ui/styles/colors';

const style = {margin: 5};
const spanstyle = {
    textAlign : 'left',
    fontWeight : 'bold'
};
const listitemclass = {
    // fontWeight: 'bold',
    textAlignVertical:'left',
    marginTop : 0,
    marginRight : 700
};
const text = {margin: 0,marginRight : 950};


class Donor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first : '',
            last : '',
            email: '',
            pass: '',
            group : '',
            donors: []
        }
        
    }
    componentWillMount() {
        // alert(243)
      var array = [];
      
        let key = localStorage.getItem('currentUser')
        FirebaseService.ref.child(`/Blood`).on("child_added", (snapshot) => {
            // if (snapshot.val().type === 'donor') {

            // console.log(snapshot.val())
            // }
        })
        FirebaseService.ref.child(`/Blood/`).on("value", (snapshot) => {
            // if (snapshot.val()) {
            //     this.setState({
            //         name: snapshot.val(),
            //     })
            //     this.props.Loggedin(snapshot.val())
                
                
                var allData = snapshot.val();
                for(var prop in allData)
                array.push(allData[prop]);
                console.log(array);
                // var first= allData.last;
                //     console.log("All data is", first)
                this.setState({
                    donors: array
                })
            // }
        })
    }
    render(){
        return(
            <div>
                {this.state.donors.map((m,i)=>{
                    return <List>
                        <ListItem style={listitemclass}  disabled={true} leftAvatar={ <Avatar icon={<FileFolder />} /> } >
                        <span style={{textAlign : 'center',fontWeight :'bold'}}>First Name :</span> {m.first} <br/>
                        <span style={{textAlign : 'center',fontWeight :'bold'}}>Last Name :</span> {m.last} <br/>
                        <span style={{textAlign : 'center',marginLeft:65,fontWeight :'bold'}}>Email Address :</span> {m.email} <br/>
                        <span style={{textAlign : 'center',marginRight:40,fontWeight :'bold'}}>Group  : </span>{m.group} <br/>
                        </ListItem>
                    </List>

                })}
           </div>
        )
    }
      
}



export default Donor;

//  {this.state.donors.map((m,i)=>{

     /*<div>
            {this.state.donors.map((m,i)=>{
              return  (<List key={i} style={text}>
                    <ListItem style={listitemclass}  disabled={true} leftAvatar={ <Avatar icon={<FileFolder />} /> } >
                    <div style={spanstyle}>First Name  :  {m.first} </div>
                    <div style={spanstyle}> Last Name   :  {m.last} </div>
                    <div style={spanstyle}>Blood_Group : {m.group} </div>
                    <div style={spanstyle}> Email Address       :  {m.email} </div>
                    
                    </ListItem>
                </List>)
            })}
                
        
                
            </div>*/