import ShiftedDoubleLineBorder from "../components/ShiftedDoubleLineBorder";
import "../styles/PricingTable.scss";

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
            <table key={index}>
              <tbody>
                <tr>
                  <th>{content.heading}</th>
                </tr>
                <tr className="pricingRow">
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
                  <td className="buttonRow">
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
