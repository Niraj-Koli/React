import React from "react";

import Card from "./components/Card";
import Composition from "./components/Composition";

import Levi from "./images/LeviAlpha.jpg";
import Giyu from "./images/GiyuEta.jpg";
import Ichigo from "./images/IchigoAlpha.jpg";

function App() {
    return (
        <Composition>
            <h1 className="heading">Anime Characters</h1>

            <Card
                name="Levi Ackerman"
                img={Levi}
                title="Strongest Soldier"
                anime="Attack On Titan"
            />

            <Card
                name="Giyu Tomioka"
                img={Giyu}
                title="Water Hashira"
                anime="Demon Slayer"
            />

            <Card
                name="Ichigo Kurosaki"
                img={Ichigo}
                title="Shinigami"
                anime="Bleach"
            />
        </Composition>
    );
}

export default App;
