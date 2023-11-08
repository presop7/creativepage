import postCardFooterData from "../Data/postCardFooterData"
import "../styles/Footer.scss"

export default function Footer(props) {
    return (
        <>
        <footer>
            {/* Footers first column */}
            <div className="footerContainer">
                {/* Short Page Information - Footer */}
                <div className="pageInfoFooter">
                    <img src="#" alt="Page Logo Variant" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, sequi vel nam obcaecati voluptate odio.</p>
                </div>

                {/* Contact Information */}
                <div className="contactsContainter">
                    <div>
                    <h3>Office:</h3>
                    <p>Some address</p>

                    <h3>Phone:</h3>
                    <p>0872318542</p>
                    </div>

                    <div>
                    <h3>Fax:</h3>
                    <p>087231854242</p>

                    <h3>Email:</h3>
                    <p>info@theHam.com</p>
                    </div>
                </div>
            </div>


            {/* Footers second column */}
            <div className="footerContainer">
                <div className="recentPosts">
                    <h3>RECENT POST</h3>
                    <div className="postCard" details={postCardFooterData}>
                        {postCardFooterData.map((item, i) => {
                            <div key={i}>
                                <img src={item.img} alt="Post Image" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <h4>{item.date}</h4>
                            </div>
                        })}

                    </div>
                </div>
            </div>


            {/* Footers third column */}
            <div className="footerContainer">
                <div className="footerTags">
                    <h3>TAGS</h3>
                    <div className="footerTagColumns">
                        <div className="firstTagColumn tagColumn">
                            <button>audio</button>
                            <button>audio</button>
                            <button>audio</button>
                            <button>audio</button>
                        </div>
                        <div className="secondTagColumn tagColumn">
                            <button>gallery</button>
                            <button>gallery</button>
                            <button>gallery</button>
                            <button>gallery</button>
                        </div>
                        <div className="thirdTagColumn tagColumn">
                            <button>Image</button>
                            <button>Image</button>
                            <button>Image</button>
                            <button>Image</button>
                        </div>
                    </div>
                </div>
                <div className="footerNewsletterContainer">
                    <h3>NEWSLETTER</h3>
                    <p>Subscribe to our Newsletter to get important News and Amazing offers</p>
                    <div className="newsletterEmailInput">
                        <input type="email" placeholder="Enter email"/>
                        <button>GO</button>
                    </div>
                </div>
            </div>


            {/* Footers forth column */}
            <div className="footerContainer">
                <div className="flickeFeed">
                    <h3>FLICKE FEED</h3>
                    <img src="#" alt="Flicke Image" />
                    <img src="#" alt="Flicke Image" />
                    <img src="#" alt="Flicke Image" />
                    <img src="#" alt="Flicke Image" />
                    <img src="#" alt="Flicke Image" />
                    <img src="#" alt="Flicke Image" />
                </div>
            </div>

        </footer>
            {/* Footers copyright bar */}
            <div className="footerCopyright">
                <p>Copyright 2023 <a href="#">theHam</a> | All rights Reserved</p>
            </div>
        </>
    )
}