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
      <Button style={"basicButton accentColor"} text={"PURCHASE NOW"} />
    </div>
  );
}
