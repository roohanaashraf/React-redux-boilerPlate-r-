// creating a reducer/store(global state) in it 

const INITIAL_STATE = {        //global state
    users: [
        {
            name: "Roohana",
            email: "roohana@gmail.com"
        },
        {
            name: "Anzeela",
            email: "anz@gmail.com"
        }
    ]
}

// fn in which we update and return state
export default (state = INITIAL_STATE, action) => {   // whatever passed in 'dispatch' (in store/action/index.js) will be obtained in 'action' param
    // console.log("action==>", action)

    // To update state(can also use if/else):
    switch (action.type) {
        case "SETDATA":
            return ({         //the thing returned here will be set in state
                ...state,     //bringing whole state
                users: [...state.users, action.data] //updating state (bringing prev. users + adding new user)
            })
        default:
            return state;
    }
}