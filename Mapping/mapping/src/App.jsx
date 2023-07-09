import React from "react";

import Card from "./components/Card";

import info from "./info";

function createCard(item) {
    return (
        <Card
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.imgUrl}
            title={item.title}
            anime={item.anime}
        />
    );
}

function App() {
    return <div>{info.map(createCard)}</div>;
}

export default App;
