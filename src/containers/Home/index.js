// getting data from redux in this page

import React, { Component } from 'react';
// to connect comp. with redux:
import { connect } from 'react-redux';

// to update state
import { set_data, facebook_login } from '../../store/action';
import './style.css';


class Home extends Component {

    static getDerivedStateFromProps(props,state){
        console.log("props==>",props)
        return{

        }
    }

    render() {
        let user = { name: "Umair", email: "umair@gmail.com" }
        console.log("users==>", this.props.users)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=>this.props.facebook_login()}>Facebook Login</button>
                {/* <button onClick={() => this.props.set_data(user)}>Set Data</button> */}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    // ----Getting data from redux------
    users: state.users  //state.reducerName.value in case of multiple reducers
})


// To update the global state (to call action)
const mapDispatchToProps = (dispatch) => ({
    // Create fns. in it(these fns. will be obtained in Component's(here Home) props)
    set_data: (data) => dispatch(set_data(data)) ,    // calling set_data() within dispatch to connect this fn. with redux
    facebook_login : () => dispatch(facebook_login()) 
})



export default connect(mapStateToProps, mapDispatchToProps)(Home);
