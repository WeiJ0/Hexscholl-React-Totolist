import { Link, useLocation } from "react-router-dom";
import '../style/Home.css';
import '../style/NoMatch.css';

import logo from "../assets/logo.svg";
import empty from "../assets/empty.png";


export default function NoMatch() {
    const location = useLocation();
    console.log(location);
    return (
        <div className="content">
            <div className="header">
                <img src={logo} />
            </div>
            <p className="Error">沒有{location.pathname}這一頁哦，是不是想去什麼怪怪的地方</p>
            <div>
                <img src={empty} />
            </div>
            <Link className='btn' to="/">趕快點我回去吧</Link>
        </div>
    )
}