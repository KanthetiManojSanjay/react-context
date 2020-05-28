import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseList from './components/CourseList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <CourseList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
