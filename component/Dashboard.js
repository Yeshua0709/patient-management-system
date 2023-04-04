import React from 'react'
import Sidebar from './Sidebar'
import {activeComponent} from './Sidebar';

export default function Dashboard(){
    return(
        <div>
        <Sidebar/>
        {activeComponent}
        </div>
    )
}