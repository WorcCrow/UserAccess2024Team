import React from "react";
import { Image } from "react-bootstrap";

export default function HelpfulLink() {
  return (
    <div class="card">
      <div class="card-body hepleful_links">
        <h5 class="card-title ">
          Helpful Links for Massive Dynamics Inc.{" "}
          <span className="icon-sa-angles-up"></span>
        </h5>
        <p>
          <span className="icon-sa-chaine"></span> www.mycompanywebsite.com
        </p>
        <p>
          <span className="icon-sa-data_cloud"></span>BambooHR
        </p>
        <p>
          <span className="icon-sa-overview"></span>Company/Employee Handbook
        </p>
        <p>
          <span className="icon-sa-comment"></span>
          Need Help?
        </p>
        <p>
          <Image
            height={32}
            width={32}
            style={{ borderRadius: "50%", marginRight: 8, marginLeft: 32 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6nVahvfvPx_pIFW2StOIMEK8TqCDdtzwow&s"
          />
          Contact your HR Adminstrator
        </p>
      </div>
    </div>
  );
}
