import "../styles/Hero.scss"

export default function Hero () {
    return (
        <>
        <div className="heroContainer">
            <h2>THE HAM IS <span>WORDPRESS THEME</span></h2>
            <h1>WE ARE CREATIVE</h1>
            <h3>Just Buy And Enjoy These Awesome Features</h3>
            <div className="heroButtonContainer">
                <button>EXPLORE NOW</button>
                <button>PURCHASE NOW</button>
            </div>
            <div className="heroBannerChangebutton">
                <img src="#" alt="Next Hero Banner" />
                <button>
                    <img src="#" alt="#" />
                </button>
                <button>
                    <img src="#" alt="#" />
                </button>
            </div>
        </div>
        </>
    )
}