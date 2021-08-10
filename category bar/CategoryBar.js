import './categoryBar.css'
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

export default function CategoryBar() {
    return (
        <div className="wrapper">
            <div className="arrowBack">
            <ArrowBackIos/>
            </div>
        <div className="categoryBar">
           
            <button>All</button>
            <button>Cryptocurrency</button>
            <button>Music</button>
            <button>Ocean</button>
            <button>Zoo</button>
            <button>PUBG</button>
            <button>Islamic</button>
            <button>Space</button>
            <button>Universe</button>
            <button>Celebrity</button>
            <button>Politics</button>
            <button>Zoo</button>
            <button>PUBG</button>
            <button>Islamic</button>
            <button>Space</button>
            <button>Ocean</button>
            <button>Ocean</button>
            <button>Ocean</button>
            <button>Ocean</button>
            <button>Ocean</button>
        </div>
        <div className="arrowBack arrowForward">
            <ArrowForwardIos/>
            </div>
        </div>
    )
}
