import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars

function Hello() {
    function byeFn() {console.log("destroyed");}
    function hiFn() {
        console.log("created");
        return byeFn;
    }
    useEffect(hiFn, []);
    return <h1>HELLO</h1>
}

function App() {
    const [showing, setShowing] = React.useState(0);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>
                {showing ? "Hide" : "Show"}
            </button>
        </div>
    );
}

export default App;
