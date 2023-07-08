import React, { Fragment, useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import List from "./components/List/List";

function App() {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(uName, uAge) {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    name: uName,
                    age: uAge,
                    id: new Date().toISOString(),
                },
            ];
        });
    }

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <List users={usersList} />
        </Fragment>
    );
}

export default App;
