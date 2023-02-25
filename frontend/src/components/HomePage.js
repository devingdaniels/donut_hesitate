import React from "react";

import SchemaImage from "../images/schema.png";
import ERD from "../images/erd.png";

function HomePage() {
  return (
    <section>
      <div className="homepage-about">
        <h2>About</h2>
        <p>
          Donut Hesitate, also known as DH, started as a small family-owned
          bakery in McMinnville, OR. In the early days of the business, DH
          offered a limited variety of donuts and had modest sales with around
          ~$1000/week in gross profit.
        </p>
        <p>
          After a few months of operation, DH started to gain notoriety and the
          store started to become quite busy. With the increased demand, DH
          needed to hire more employees and wanted to expand their menu. The
          problem was DH lacked the proper system to track and manage the
          various aspects of the business.
        </p>
        <p>
          In order to solve this problem and manage the expanding business, DH
          decided to hire a software engineer to build out a database to assist
          in daily business operations and so DH could analyze sales metrics and
          employee performance.
        </p>
      </div>
      <hr className="homepage-divider"></hr>
      <div className="homepage-image-container">
        <div>
          <h3>Schema</h3>
          <img src={SchemaImage} width={600} height={400} alt=""></img>
        </div>
        <div>
          <h3>ERD</h3>
          <img src={ERD} width={600} height={400} alt=""></img>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
