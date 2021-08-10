import './leftMenu.css'
import {SportsEsports, LiveTv, Games,Settings, Flag, Help, Feedback} from '@material-ui/icons';

export default function More__From_Youtube() {
    return (
        <div className="moreSection">
            <span className="subName">More From Youtube</span>
            <ul className="menuItems moreFromItems">
                            <li className="subMenuItem moreFrom menuItem">
                                <SportsEsports className="moreIcon" />
                               <span className="subChName">Gaming</span>
                                
                            </li>
                            <li className="subMenuItem moreFrom menuItem">
                                <LiveTv className="moreIcon"/>
                               <span className="subChName">Live</span>
                                
                            </li>
                            <li className="subMenuItem moreFrom menuItem">
                                <Games className="moreIcon"/>
                               <span className="subChName">Sports</span>
                                
                            </li>
                            <div className="line"></div>
                            <li className="subMenuItem moreFrom menuItem">
                                <Settings className="moreIcon"/>
                               <span className="subChName">Settings</span>
                                
                            </li>
                            
                            <li className="subMenuItem moreFrom menuItem">
                                <Flag className="moreIcon"/>
                               <span className="subChName">Report history</span>
                                
                            </li>
                            <li className="subMenuItem moreFrom menuItem">
                                <Help className="moreIcon"/>
                               <span className="subChName">Help</span>
                                
                            </li>
                            <li className="subMenuItem moreFrom menuItem">
                                <Feedback className="moreIcon"/>
                               <span className="subChName">Send feedback</span>
                                
                            </li>
                        </ul>
        </div>
    )
}
