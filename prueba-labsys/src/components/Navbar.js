import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/search"></Route>
                <Route path="/movie"></Route>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;