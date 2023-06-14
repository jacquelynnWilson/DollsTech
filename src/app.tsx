import React from 'react';

function App() {
    const headerStyle = {
        padding: '20px',
        textAlign: 'center',
        background: '#DB7093',
        color: 'white',
    };

    const headingStyle = {
        fontSize: '40px',
    };

    return (
        <div style={{ fontFamily: 'Consolas, Helvetica, sans-serif', margin: '0' }}>
            <div style={headerStyle}>
                <h1 style={headingStyle}>Expand Your Mind</h1>
                <h4>
                    “If people never did silly things, nothing intelligent would ever get done.” — Ludwig Wittgenstein
                </h4>
            </div>

            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="navbar-brand" href="https://www.dollstech.com/weather">
                                Weather
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default App;