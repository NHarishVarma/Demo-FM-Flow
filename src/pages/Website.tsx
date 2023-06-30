import { FunctionComponent } from "react";
import styles from "./Website.module.css";
const Website: FunctionComponent = () => {
  return (
    <div className={styles.website}>
      <div className={styles.websiteChild} />
      <div className={styles.websiteItem} />
      <div className={styles.websiteInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.premierDigitalPlatform}>
        Premier digital platform for alternative investing
      </div>
      <b className={styles.b}>20,000</b>
      <b className={styles.b1}>$2.6B</b>
      <b className={styles.b2}>24</b>
      <b className={styles.b3}>75</b>
      <div className={styles.committedCapital}>Committed Capital</div>
      <div className={styles.countries}>Countries</div>
      <div className={styles.fundsToDate}>Funds to Date</div>
      <div className={styles.v}>v</div>
      <img className={styles.path424Icon} alt="" src="/path-424.svg" />
      <img className={styles.groupIcon} alt="" src="/group-17384.svg" />
      <div className={styles.itsGoodTo}>It’s Good to Have Alternatives</div>
      <div className={styles.ourPlatformDelivers}>
        Our platform delivers alternative investments more efficiently than ever
        before. We connect independent financial advisors with leading
        alternative asset managers, empowering them to engage and transact on a
        massive scale.
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg1.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al
                <span className={styles.t}>t</span>ernati
                <span className={styles.v1}>v</span>e
              </div>
            </div>
          </div>
        </div>
        <div className={styles.marketplaceParent}>
          <div className={styles.marketplace}>Marketplace</div>
          <div className={styles.howItWorks}>How it Works</div>
          <div className={styles.privateMarketAcademy}>
            Private Market Academy
          </div>
          <div className={styles.aboutUs}>About Us</div>
          <img className={styles.groupItem} alt="" src="/polygon-2.svg" />
        </div>
        <div className={styles.signUpButtonParent}>
          <div className={styles.signUpButton}>
            <div className={styles.signUpButtonChild} />
            <div className={styles.signUp}>SIGN UP</div>
          </div>
          <div className={styles.component1172}>
            <div className={styles.component1172Child} />
            <div className={styles.login}>Login</div>
          </div>
        </div>
      </div>
      <div className={styles.members}>Members</div>
      <img
        className={styles.component20924}
        alt=""
        src="/component-209--64.svg"
      />
    </div>
  );
};

export default Website;
