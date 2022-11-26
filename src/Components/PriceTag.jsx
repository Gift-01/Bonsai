import React from "react";
import "../styles/PriceTag.css";
import { TiTick } from "react-icons/ti";

export default function PriceTag() {
  return (
    <div>
      <div className="price-tag">
        <div className="starter-price-tag">
          <h1 className="header-price-tag"> Starter</h1>
          <p> Ideal for freelancers and contractors just starting out</p>
          <p className="price-text">
            <small>$</small> <strong>24</strong> <span> /MONTH</span>
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> All Templates
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Unlimited clients & Projects
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Invoicing & Payments
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Proposals & contracts
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Tasks & Time Tracking
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Client CRM
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Expense Tracking
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" />
            Up to 5 Project Collaborators
          </p>
          <button className="price-tag-btn"> START FREE</button>
        </div>
        <div className="professional-price-tag">
          <h1 className="header-price-tag"> Professional</h1>
          <p>Everything a growing independent business needs to thrive.</p>
          <p className="price-text">
            <small>$</small> <strong>39</strong> <span> /MONTH</span>
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Everything in Starter plus...{" "}
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Custom Brandings{" "}
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Forms & Questionnaires{" "}
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Workflow Automations{" "}
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Client Portal
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> QuickBooks Integration
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Calendly Integration
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Zapier Integration
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Up to 15 Project
            Collaborators
          </p>
          <button className="price-tag-btn-one"> START FREE</button>
        </div>
        <div className="Business-price-tag">
          <h1 className="header-price-tag"> Business</h1>
          <p>The perfect package for small businesses and agencies.</p>
          <p className="price-text">
            <small>$</small> <strong>79</strong> <span> /MONTH</span>
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Everything in Starter and
            Professional plus...
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Subcontractor Management
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Hiring Agreement Templates
            (1099 contracts)
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Subcontractor Onboarding
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Talent Pool
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> 3 Team Seats (additional
            seats $9/month)
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Accountant Access
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Connect Multiple Bank
            Accounts
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Unlimited Subcontractors
          </p>
          <p className="price-tag-text">
            <TiTick className=" price-tag-logo" /> Unlimited Project
            Collaborators
          </p>
          <button className="price-tag-btn-two"> START FREE</button>
        </div>
      </div>
      <div className="main-sect">
        <h4 className="text-break"> Super charge your work with add-ons</h4>
        <div className="main-section">
          <section className="sub-section">
            <h1 className="sub-section-text">
              Collaborators <b>Free</b>
            </h1>
            <p>
              Invite other users to specific projects for limited access and
              functionality.
            </p>
          </section>
          <section className="sub-section">
            <h1 className="sub-section-text">
              Partners<b>$9 /MONTH</b>
            </h1>
            <p className="sub-section-text-one">
              Invite other users for full account access and company management.
            </p>
          </section>
          <section className="sub-section">
            <h1 className="sub-section-text">
              Bonsai Tax <b>$10 /MONTH</b>
            </h1>
            <p>
              Track expenses, identify write-offs, and estimate quarterly taxes
              easily.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
