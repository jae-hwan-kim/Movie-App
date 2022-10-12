import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars

function App() {
    const [counter, setCounter] = React.useState(0);
    const [keyword, setKeyword] = React.useState("");
    const onClick = () => setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
        console.log("I run only once");
    }, []);
    useEffect(() => {
        console.log("I run when keyword changes");
    }, [keyword])
    useEffect(() => {
        console.log("I run when counter changes");
    }, [counter])
    return (
        <div>
            <input
                onChange={onChange}
                value={keyword}
                type="text"
                placeholder='Search'
            />
            <p>{counter}</p>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default App;
