import React from "react";

import gojo from "../images/GojoAlpha.jpg";
import jinwoo from "../images/SungJinwooAlpha.jpg";
import luffy from "../images/LuffyAlpha.jpg";
import levi from "../images/LeviAlpha.jpg";

const randomImg = "https://picsum.photos/200";

function Image() {
    return (
        <div>
            <h1 className="heading">Styling</h1>

            <h1 className="edit" contentEditable="true">
                ContentEditable
            </h1>

            <h1 className="check" contentEditable="true" spellCheck="false">
                SpellCheck
            </h1>

            <div className="img-group">
                <img src={gojo} alt="Gojo" />
                <img src={jinwoo} alt="Sung Jinwoo" />
                <img src={randomImg} alt="Random" />
                <img src={luffy} alt="Luffy" />
                <img src={levi} alt="Levi" />
            </div>
        </div>
    );
}

export default Image;
