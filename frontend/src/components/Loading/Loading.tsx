import React from "react";
import logo from "../../assets/pokeball.png";
// import ;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <br></br>
                <div className="dot-flashing"></div>
            </header>
        </div>
    );
}

export default App;
