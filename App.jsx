import React from 'react';
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to="/HelloUser">Example.1.Hello User - react routing and Props</Link>
                </nav>               
            </div>
        );
    }
}
export default App;