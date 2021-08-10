import React from 'react'
import {Home, Explore, CardMembership , Subscriptions, VideoLibrary, History, OndemandVideo, WatchLater, ThumbUpAlt,ExpandMore} from '@material-ui/icons';
import './leftMenu.css'
import More__From_Youtube from './More__From_Youtube';


function LeftMenu() {
    return (
        <body className="leftMenu__body">
        <div className="leftMenu">
            <ul className="menuItems">
                <li className="menuItem active"><a href="#">
                    <Home className="icon" />
                    <span className="hideName"> Home</span> 
                    </a></li>
                <li className="menuItem"><a href="#">
                    <Explore className="icon"/>
                    <span className="hideName"> Explore</span>
                    </a></li>
                <li className="menuItem"><a href="#">
                    <Subscriptions className="icon"/>
                    <span className="hideName">Subscriptions </span>
                    </a></li>
                    <div className="line"></div>
                <li className="menuItem"><a href="#">
                    <VideoLibrary className="icon"/>
                    <span className="hideName">Library </span>
                    </a></li>
                <li className="menuItem"><a href="#">
                    <History className="icon"/>
                    History
                    </a></li>
                <li className="menuItem"><a href="#">
                    <OndemandVideo className="icon"/>
                    Your Videos
                    </a></li>
                <li className="menuItem"><a href="#">
                    <WatchLater className="icon"/>
                    Watch Later
                    </a></li>
                <li className="menuItem"><a href="#">
                    <ThumbUpAlt className="icon"/>
                    Liked Videos
                    </a></li>
                <li className="menuItem"><a href="#">
                    <ExpandMore className="icon"/>
                    More
                    </a></li>
                    <div className="line"></div>

                    <div className="subsriptions">
                        <span className="subName">Subscriptions</span>
                        <ul className="menuItems">
                            <li className="subMenuItem menuItem">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLT1CRcPARyvE_pR7TZT_DwM0_3-9TkWI27-HeWbvg=s88-c-k-c0x00ffffff-no-rj" alt="" />
                               <span className="subChName">5 Minutes Craft</span>
                           
                            </li>
                            <li className="subMenuItem menuItem">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLQuzkdeUxIhS3KWZrYcDf4F8k2VC6SHZt2HlyzCM_c=s88-c-k-c0x00ffffff-no-rj" alt="" />
                               <span className="subChName">Al Jazeera</span>
                                
                            </li>
                            <li className="subMenuItem menuItem">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s88-c-k-c0x00ffffff-no-rj" alt="" />
                               <span className="subChName">Joma Tech</span>
                                
                            </li>
                            <li className="subMenuItem menuItem">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLQ5QuLfoaMNDOE7xLh7IEVkyIjniez6-z0-b8neFS0=s88-c-k-c0x00ffffff-no-rj" alt="" />
                               <span className="subChName">NASA</span>
                                
                            </li>
                            <li className="subMenuItem menuItem">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLRIec7gUC89wc0OGstCraoIatVagBJHOpLW-n5QrQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
                               <span className="subChName">Apple</span>
                                
                            </li>
                            <li className="subMenuItem menuItem">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLRDdAd3EsOozEFNrsPuPDz6SHb-qRTLVFED7BM_Wxs=s88-c-k-c0x00ffffff-no-rj" alt="" />
                               <span className="subChName">Ayman Sadik</span>
                                
                            </li>

                        </ul>
                    </div>
                    <div className="line"></div>
                    <More__From_Youtube/>
            </ul>
        </div>
        </body>
    )
}

export default LeftMenu
