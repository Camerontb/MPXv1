import React, { Component } from "react";
import {StrictMode} from "react";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from './Pag/Home'
import NewMPX from './Pag/NewMPX'
import MyPassage from "./Pag/MyPassage";

class Main extends Component{
    render(){
        return(
            <StrictMode>
                <BrowserRouter>
                    <Routes>
                        
                        <Route path="/" element={<App />} >
                            <Route index element={<Home/>} />  
                            <Route path ='/NewMPX' element={<NewMPX />} />
                            <Route path ='/MyPassage' element={<MyPassage/>} />

                            

                        </Route>
                        
                    </Routes>    
                </BrowserRouter> 
                

            </StrictMode>
              
        )   
        
    }
}

export default Main 