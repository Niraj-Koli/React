import React, { Component, Fragment } from "react";

import classes from "./Finder.module.css";

import UsersContext from "../../context/UsersContext";

import Users from "../Users/Users";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Finder extends Component {
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: "",
        };
    }

    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name
                        .toLowerCase()
                        .includes(this.state.searchTerm.toLowerCase())
                ),
            });
        }
    }

    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input
                        type="search"
                        onChange={this.searchChangeHandler.bind(this)}
                    />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// function Finder() {
//     const [filteredUsers, setFilteredUsers] = React.useState(USERS);
//     const [searchTerm, setSearchTerm] = React.useState("");

//     useEffect(() => {
//         setFilteredUsers(
//             USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     function searchChangeHandler(event) {
//         setSearchTerm(event.target.value);
//     }

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// }

export default Finder;
