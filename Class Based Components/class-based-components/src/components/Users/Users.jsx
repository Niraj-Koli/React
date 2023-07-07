import React, { Component } from "react";

import classes from "./Users.module.css";

import User from "../User/User";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true,
            more: "Test",
        };
    }

    toggleUsersHandler = () => {
        this.setState((curState) => {
            return { showUsers: !curState.showUsers };
        });
    };

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );

        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? "Hide" : "Show"} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// function Users() {
//     const [showUsers, setShowUsers] = useState(true);

//     function toggleUsersHandler() {
//         setShowUsers((prevShowUsers) => !prevShowUsers);
//     }

//     const usersList = (
//         <ul>
//             {USERS.map((user) => (
//                 <User key={user.id} name={user.name} />
//             ))}
//         </ul>
//     );

//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? "Hide" : "Show"} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     );
// }

export default Users;
