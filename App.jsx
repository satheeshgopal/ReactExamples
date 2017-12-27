import React from 'react';
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="list">
                    <Link to="/HelloUser">Example.1.Hello User - react routing and Props</Link>
                    <Link to="/IncrementCount">Example.2.Increment Count - react state </Link>
                    <Link to="/UserInput">Example.3.User Input - To do List </Link>
                    <Link to="/InlineStyles">Example.4.InlineStyles - Refs </Link>
                </nav>               
            </div>
        );
    }
}
export default App;