import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import {
  FaFacebook,
  FaTwitter,
  FaSkype,
  FaVimeoV,
  FaPlus,
} from "react-icons/fa";
import "../styles/MeetOurTeam.scss";

export default function MeetOurTeam() {
  // Card data array
  const cardData = [
    { mainImage: "#", name: "Alex", role: "Founder" },
    { mainImage: "#", name: "Pauline", role: "UX Designer" },
    { mainImage: "#", name: "Justin", role: "Web Designer" },
    { mainImage: "#", name: "Ronald", role: "Web Designer" },
  ];
  return (
    <div className="meetOurTeamMainContainer">
      {/* Heading */}
      <h1>Meet Our Team</h1>
      <ShiftedDoubleLineBorder />
      {/* Card Container and Content */}
      <div className="teamCardsContainer">
        {cardData.map((content, index) => (
          <div className="teamCard">
            <div className="imgContainer">
              <img src={content.mainImage} alt="" className="teamMemberImage" />
              <div className="plusImageBox">
                <div className="plusOvarlayImage">
                  <FaPlus />
                </div>
              </div>
            </div>
            <div className="nameRoleContainer">
              <p className="name">{content.name}</p>
              <p className="role">{content.role}</p>
            </div>
            <div className="socialButtons">
              <button>
                <FaFacebook />
              </button>
              <button>
                <FaTwitter />
              </button>
              <button>
                <FaSkype />
              </button>
              <button>
                <FaVimeoV />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
