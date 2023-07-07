import React, { useState } from "react";

function App() {
    // const [fName, setFName] = useState("");
    // const [lName, setLName] = useState("");
    // const [email, setEmail] = useState("");

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
    });

    function handleChange(event) {
        const { value, name } = event.target;

        setContact((prevValue) => {
            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email,
                };
            } else if (name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email,
                };
            } else if (name === "email") {
                return {
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value,
                };
            }
        });
    }

    // function handleChange(event) {
    //     const { name, value } = event.target;

    //     setContact(prevValue = {
    //         return {
    //             ...prevValue,
    //             [name]: value
    //         };
    //     });
    // }

    return (
        <div className="container">
            <h1>
                Yo {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input
                    name="fName"
                    onChange={handleChange}
                    placeholder="First Name"
                    value={contact.fName}
                />
                <input
                    name="lName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    value={contact.lName}
                />
                <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    value={contact.email}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
