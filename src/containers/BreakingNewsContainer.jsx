import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/BreakingNewsContainer.scss";
export default function BreakingNewsContainer() {
  const cardData = [
    {
      img: "#",
      date: "12 Feb",
      heading: "Amazing Image Post",
      creator: "By Admin",
      comments: "2",
    },
    {
      img: "#",
      date: "18 Feb",
      heading: "Great Image Post",
      creator: "By Admin",
      comments: "1",
    },
    {
      img: "#",
      date: "20 Feb",
      heading: "Wonderful Image Post",
      creator: "By Admin",
      comments: "10",
    },
    {
      img: "#",
      date: "21 Feb",
      heading: "Splendid Image Post",
      creator: "By Admin",
      comments: "8",
    },
    {
      img: "#",
      date: "10 Mar",
      heading: "Extravagant Image Post",
      creator: "By Admin",
      comments: "7",
    },
    {
      img: "#",
      date: "1 April",
      heading: "Outstanding Image Post",
      creator: "By Admin",
      comments: "5",
    },
    {
      img: "#",
      date: "3 April",
      heading: "Different Image Post",
      creator: "By Admin",
      comments: "1",
    },
    {
      img: "#",
      date: "10 April",
      heading: "Strange Image Post",
      creator: "By Admin",
      comments: "6",
    },
  ];
  return (
    <div className="breakingNewsContainer">
      <div className="headingContainerNews">
        <h1>Breaking News</h1>
        <ShiftedDoubleLineBorder />
      </div>
      <div className="newsCardsContainer">
        {cardData.map((content, index) => (
          <div className="newsCard" key={index}>
            <div className="image">
              <img src={content.img} alt="" />
              <div className="dateBox">
                <p>{content.date}</p>
              </div>
            </div>
            <div className="postText">
              <h3>{content.heading}</h3>
              <div className="postInformation">
                <p>{content.creator}</p>
                <p>{content.comments} comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
