import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/PricingTable.scss";
import OfferBand from "../assets/OfferBand.png";

export default function PricingTable() {
  const tableData = [
    {
      heading: "PERSONAL",
      pricing: "99",
      info1: "1 Hosting",
      info2: "2 Email Marketing        ",
      info3: "5 Database",
      info4: "2 Design Pack",
      info5: "3 Website Layouts",
      info6: "5 Header Style",
      info7: "3 Online Store",
    },
    {
      heading: "BUISSNESS",
      pricing: "199",
      info1: "1 Hosting",
      info2: "2 Email Marketing        ",
      info3: "5 Database",
      info4: "2 Design Pack",
      info5: "3 Website Layouts",
      info6: "5 Header Style",
      info7: "3 Online Store",
    },
    {
      heading: "PROFESSIONAL",
      pricing: "299",
      info1: "1 Hosting",
      info2: "2 Email Marketing        ",
      info3: "5 Database",
      info4: "2 Design Pack",
      info5: "3 Website Layouts",
      info6: "5 Header Style",
      info7: "3 Online Store",
      class: "accentRow",
    },
    {
      heading: "DIAMOND",
      pricing: "299",
      info1: "1 Hosting",
      info2: "2 Email Marketing        ",
      info3: "5 Database",
      info4: "2 Design Pack",
      info5: "3 Website Layouts",
      info6: "5 Header Style",
      info7: "3 Online Store",
    },
  ];
  return (
    <div className="pricingTableMainContainer">
      <div className="heading">
        <h1>Our Pricing Table</h1>
        <ShiftedDoubleLineBorder />
      </div>
      <div className="tableContainer">
        {tableData.map((content, index) => (
          <>
            <table key={index} className={content.class}>
              <tbody>
                <tr className={content.class}>
                  <th>{content.heading}</th>
                  <img
                    src={OfferBand}
                    alt=""
                    className={content.class}
                    style={{ display: index === 2 ? "block" : "none" }}
                  />
                </tr>
                <tr className={`pricingRow ${content.class}`}>
                  <td>
                    <span>${content.pricing}</span>/Month
                  </td>
                </tr>
                <tr>
                  <td>{content.info1}</td>
                </tr>
                <tr>
                  <td>{content.info2}</td>
                </tr>
                <tr>
                  <td>{content.info3}</td>
                </tr>
                <tr>
                  <td>{content.info4}</td>
                </tr>
                <tr>
                  <td>{content.info5}</td>
                </tr>
                <tr>
                  <td>{content.info6}</td>
                </tr>
                <tr>
                  <td>{content.info7}</td>
                </tr>
                <tr>
                  <td className={`buttonRow ${content.class}`}>
                    <button>BUY NOW</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ))}
      </div>
    </div>
  );
}
