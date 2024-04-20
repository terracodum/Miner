import { useState } from "react";
import Gh from "./assets/git.png";
import leader from "./assets/leaderCup.png";
import telegram from "./assets/tele.png";
import "./Header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function OpenPopUp() {
        setIsOpen(true);
    };
    function ClosePopUp() {
        setIsOpen(false);
    }
    return (
    <>
    <header className="header">
        <h2 className="leaderboard" onClick={OpenPopUp}>
            Leaderboard 
            <img className="cup" src={leader} alt="Cup"></img>
        </h2>
        <h1 className="Logo">Minesweeper</h1>
        <div className="social">
            <a href="https://t.me/Lucky_WoIf">
                <img className="tele" src={telegram} alt="My Telegram" />
            </a>
            <a href="https://github.com/terracodum">
                <img className="git" src={Gh} alt="My GitHub" />
            </a>
        </div>
        {isOpen && (
            <div className="overlay">
                <div className="popup">
                    <div className="popupHeader">
                        <h2 className="leaderboard">
                            Leaderboard 
                            <img className="cup" src={leader} alt="Cup"></img>
                        </h2>
                    </div>
                    <div className="popupLeaders">
                        <h2>There's nothing here</h2>
                    </div>
                    <h2 className="popupButton" onClick={ClosePopUp}>Close</h2>
                </div>
            </div>
        )}
    </header>
    </>
    )
};

export default Header;