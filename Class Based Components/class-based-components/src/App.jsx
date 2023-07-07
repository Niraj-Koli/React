import React from "react";

import UsersContext from "./context/UsersContext";

import Finder from "./components/Finder/Finder";

const USERS = [
    { id: "u1", name: "Kaizer" },
    { id: "u2", name: "Vivy" },
    { id: "u3", name: "Dante" },
];

function App() {
    const usersContext = {
        users: USERS,
    };

    return (
        <UsersContext.Provider value={usersContext}>
            <Finder />
        </UsersContext.Provider>
    );
}

export default App;
