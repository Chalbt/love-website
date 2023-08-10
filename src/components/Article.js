import LoveBackground from "../assets/sunset.png"
import "../styles/Article.css"

function Home() {

    return (
        <div className="global-article">
            <div className="article">
                <div className="article-container">
                    <div className="background-image-article-small">
                        <img src={LoveBackground} alt="Néons rouge mot Amour"/>
                    </div>
                    <div className="big-text-high">
                        HOW<br />
                        TO
                    </div>
                    <div className="introduction-text">
                        <div className="intro-1">
                            Lorem ipsum dolor sit amet<br />
                            consectetur adipiscing elit, sed do eiusmod<br />
                            tempor incididunt ut labore
                        </div>
                        <div className="sub-intro">
                            <div className="intro-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                            <div className="intro-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                    <div className="big-text-middle">
                        PLAN A<br />
                        MEMORABLE<br />
                    </div>
                    <div className="big-text-down">
                        MARRIAGE<br />
                        PROPOSAL
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home