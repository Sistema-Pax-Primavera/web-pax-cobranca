import React from "react";
import RoutesApp from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <>
            <RoutesApp />
            <ToastContainer autoClose={3000} />
        </>
    );
}

export default App;