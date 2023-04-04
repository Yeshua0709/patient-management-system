import React, { Component, useState } from 'react'
import Overview from './Overview';
import Patient from './Patient';

export default function Sidebar(){


    let [activeComponent, setActiveComponent] = useState(<Overview />);



    return(
        <nav>
        <ul>
            <button onClick={() => setActiveComponent(<Overview/>)}>Overview</button>
            <button onClick={() => setActiveComponent(<Patient />)}> Patients</button>
        </ul>

            {activeComponent}
        
    </nav>

    )
}