import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailPortfolioCompan1.module.css";
const FundDetailPortfolioCompan1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCompanyProfileContainer4Click = useCallback(() => {
    navigate("/fund-detail-portfolio-companies-open");
  }, [navigate]);

  const onTabNavButtonClick = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onTabNavButton3Click = useCallback(() => {
    navigate("/fund-detail-investor-relations");
  }, [navigate]);

  const onTabNavButton4Click = useCallback(() => {
    navigate("/fund-detail-services");
  }, [navigate]);

  const onTabNavButton5Click = useCallback(() => {
    navigate("/fund-detail-compliance");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onTabNavButton9Click = useCallback(() => {
    navigate("/fund-detail-investor-relations");
  }, [navigate]);

  const onTabNavButton10Click = useCallback(() => {
    navigate("/fund-detail-services");
  }, [navigate]);

  const onTabNavButton11Click = useCallback(() => {
    navigate("/fund-detail-compliance");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.fundDetailPortfolioCompan}>
      <div className={styles.location}>Location</div>
      <div className={styles.investmentStage}>Investment Stage</div>
      <div className={styles.status}>Status</div>
      <div
        className={styles.ownershipConcentration}
      >{`Ownership Concentration `}</div>
      <div className={styles.originalInvestmentAmountContainer}>
        <p className={styles.originalInvestmentAmount}>
          Original investment amount​
        </p>
      </div>
      <div className={styles.sector}>Sector</div>
      <div className={styles.portfolioCompanies}>Portfolio Companies</div>
      <div className={styles.companyProfile}>
        <img className={styles.bgIcon} alt="" src="/bg1.svg" />
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.us}>US</b>
        <b className={styles.cRound}>C Round</b>
        <b className={styles.b}>$28,000,000</b>
        <b className={styles.watchlist}>Watchlist</b>
        <b className={styles.b1}>16%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.impactHealth}>Portfolio Company 02</div>
        <div className={styles.founded2020}>Founded: 2020</div>
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProfile1}>
        <img className={styles.bgIcon} alt="" src="/bg1.svg" />
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.us}>US</b>
        <b className={styles.cRound}>C Round</b>
        <b className={styles.b}>$28,000,000</b>
        <b className={styles.impaired}>Impaired</b>
        <b className={styles.b3}>20%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.impactHealth}>Portfolio Company 03</div>
        <div className={styles.founded2020}>Founded: 2020</div>
        <div className={styles.maskGroup11Container}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProfile2}>
        <img className={styles.bgIcon} alt="" src="/bg1.svg" />
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.us}>US</b>
        <b className={styles.cRound}>C Round</b>
        <b className={styles.b}>$28,000,000</b>
        <b className={styles.impaired}>Performing</b>
        <b className={styles.b5}>10%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.impactHealth}>Portfolio Company 04</div>
        <div className={styles.founded2020}>Founded: 2020</div>
        <div className={styles.maskGroup11Frame}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProfile3}>
        <img className={styles.bgIcon} alt="" src="/bg1.svg" />
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.us}>US</b>
        <b className={styles.cRound}>C Round</b>
        <b className={styles.b}>$28,000,000</b>
        <b className={styles.impaired}>Performing</b>
        <b className={styles.b7}>49%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.impactHealth}>Portfolio Company 05</div>
        <div className={styles.founded2020}>Founded: 2020</div>
        <div className={styles.groupDiv}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div
        className={styles.companyProfile4}
        onClick={onCompanyProfileContainer4Click}
      >
        <img className={styles.bgIcon} alt="" src="/bg1.svg" />
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.us}>US</b>
        <b className={styles.cRound}>C Round</b>
        <b className={styles.b}>$28,000,000</b>
        <b className={styles.impaired}>Performing</b>
        <b className={styles.b7}>38%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.impactHealth}>Impact Health</div>
        <div className={styles.founded2020}>Founded: 2020</div>
        <div className={styles.maskGroup11Wrapper1}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
        <img
          className={styles.maskGroup40}
          alt=""
          src="/mask-group-401@2x.png"
        />
        <div className={styles.image} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabNavButton} onClick={onTabNavButtonClick}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonInner} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3} onClick={onTabNavButton3Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4} onClick={onTabNavButton4Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5} onClick={onTabNavButton5Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.fundDetailPortfolioCompanInner}>
        <div className={styles.maskGroup35Parent}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.privateHealthcareFundIiiParent}>
            <div className={styles.privateHealthcareFundContainer}>
              <p
                className={styles.originalInvestmentAmount}
              >{`Private Healthcare `}</p>
              <p className={styles.originalInvestmentAmount}>Fund III</p>
            </div>
            <img
              className={styles.backArrowButton}
              alt=""
              src="/back-arrow-button.svg"
              onClick={onBackArrowButtonClick}
            />
            <div className={styles.maskGroup38Wrapper}>
              <img
                className={styles.maskGroup38}
                alt=""
                src="/mask-group-38@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabNavButton6}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonInner} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3} onClick={onTabNavButton9Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4} onClick={onTabNavButton10Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5} onClick={onTabNavButton11Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.fundDetailPortfolioCompanChild} />
      <div className={styles.maskGroup35Group}>
        <img
          className={styles.maskGroup351}
          alt=""
          src="/mask-group-351@2x.png"
        />
        <div className={styles.nexusHealthEquityFundParent}>
          <div className={styles.nexusHealthEquity}>
            Nexus Health Equity Fund
          </div>
          <img
            className={styles.backArrowButton1}
            alt=""
            src="/back-arrow-button.svg"
            onClick={onBackArrowButton1Click}
          />
          <div className={styles.maskGroup38Container}>
            <img
              className={styles.maskGroup381}
              alt=""
              src="/mask-group-381@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.maskGroup35Parent}>
            <div className={styles.maskGroup35Parent}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al
                <span className={styles.t}>t</span>ernati
                <span className={styles.v}>v</span>e
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchParent}>
          <div className={styles.search}>Search</div>
          <img
            className={styles.iconactionsearch24px}
            alt=""
            src="/iconactionsearch-24px.svg"
          />
        </div>
      </div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.maskGroup35Parent}>
          <div className={styles.maskGroup35Parent}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.maskGroup35Parent} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div
              className={styles.leftNavButton7}
              onClick={onLeftNavButton7Click}
            >
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div
              className={styles.leftNavButton8}
              onClick={onLeftNavButton8Click}
            >
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.domainFill0Wght400Grad0OpsIcon2}
                alt=""
                src="/domain-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component2095}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default FundDetailPortfolioCompan1;
