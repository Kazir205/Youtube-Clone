import React from 'react'
import ContentDisplayRIght from '../ContentDisplayRIght/ContentDisplayRIght'
import Header from '../header/Header'
import LeftMenu from '../leftMenu/LeftMenu'
import './mainFile.css'

export default function MainFile() {
    return (
        <div>
            {/* header */}
            <Header/>

            {/* leftMenu */}
            <div className="main">

            <LeftMenu/>


            {/* ContentDisplayRight */}
            <ContentDisplayRIght/>

        
            </div>
        </div>
    )
}
