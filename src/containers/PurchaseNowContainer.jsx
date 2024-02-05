import Button from "../components/Button";
import "../styles/PurchaseNowContainer.scss";
export default function PurchaseNowContainer() {
  return (
    <div className="purchaseNowContainer">
      <h1>EVERYTHING IS READY. JUST BUY AND INSTALL NOW</h1>
      <p>
        Smooth reliable, responsive ready, perfect portfolio, unique blog layout
        and many many options for you
      </p>
      <a href="#price">
        <Button css={"basicButton accentColor"} text={"PURCHASE NOW"} />
      </a>
    </div>
  );
}
