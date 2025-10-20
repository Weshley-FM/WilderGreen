// App.js
import React from 'react';
// Import the component you want to display
import Navbar from './components/Navbar.jsx'; 

function App() {
    return (
        // This is the main JSX structure for your application
        <div className="App">
            {/* The Navbar component is rendered as a custom JSX tag */}
            <Navbar /> 
            
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Welcome to Your JSX-Powered React App!</h2>
                <p>The navigation bar above was created using the Navbar component.</p>
            </main>
        </div>
    );
}

export default App;