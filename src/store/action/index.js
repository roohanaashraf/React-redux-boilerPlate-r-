import Firebase from '../../config/firebase';
import firebase from 'firebase';


// Craating a fn file for mapDispatchToProps()


const set_data = (data) => {      //data="Data passed from Home component from containers/Home/index.js"
    // returning a fn (in which we get dispatch parameter)
    return (dispatch) => {     //use dispatch to pass data to redux (update state)
        console.log(data);
        dispatch({ type: "SETDATA", data: data })  //calling dispatch() on which we'll get it's data in 'action' parameter in all reducers
    }
}



// ---------***   Chatapp  *****--------

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

                console.log("user==>", user)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log("error==>", errorMessage)
            });
    }
}

export {
    set_data,
    facebook_login
}