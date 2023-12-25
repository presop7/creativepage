import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/OurWork.scss";
import plusIcon from "../assets/plusIcon.png";
export default function OurWork() {
  const myButtons = document.getElementsByClassName("categoryButton");
  const activeClass = "active";

  for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", function () {
      // Remove the active class from all buttons
      for (let j = 0; j < myButtons.length; j++) {
        myButtons[j].classList.remove(activeClass);
      }

      // Add the active class to the clicked button
      this.classList.add(activeClass);
    });
  }

  return (
    <div className="ourWorkContainer" id="work">
      <div className="heading">
        <h1>Our Amazing Work</h1>
        <div className="lines">
          <ShiftedDoubleLineBorder />
        </div>
        <div className="categories">
          <button className="categoryButton">All</button>
          <button className="categoryButton">Lorem, ipsum.</button>
          <button className="categoryButton">Lorem, ipsum.</button>
          <button className="categoryButton">Lorem, ipsum.</button>
          <button className="categoryButton">Lorem, ipsum.</button>
        </div>
        <div className="workCatalog">
          <div className="defaultTab">
            <div className="iconDiv">
              <img src="#" alt="a" />
              <img src="#" alt="a" />
            </div>
            <h3>CREATIVE DESIGN</h3>
            <p>Web Desing</p>
          </div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
          <div className="blanktab"></div>
        </div>
        <button id="loadMore">
          <img src={plusIcon} alt="" />
          <p>LOAD MORE</p>
        </button>
      </div>
    </div>
  );
}
