import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailServices.module.css";
const FundDetailServices: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCompanyProfileContainerClick = useCallback(() => {
    navigate("/fund-detail-services-1");
  }, [navigate]);

  const onComponeSeeMoreButtonnt254Click = useCallback(() => {
    navigate("/capital-call-detail-1-2");
  }, [navigate]);

  const onTabNavButton1Click = useCallback(() => {
    navigate("/fund-detail-performance");
  }, [navigate]);

  const onTabNavButton2Click = useCallback(() => {
    navigate("/fund-detail-portfolio-companies");
  }, [navigate]);

  const onTabNavButton3Click = useCallback(() => {
    navigate("/fund-detail-investor-relations");
  }, [navigate]);

  const onTabNavButton5Click = useCallback(() => {
    navigate("/fund-detail-compliance");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onTabNavButton8Click = useCallback(() => {
    navigate("/fund-detail-portfolio-companies");
  }, [navigate]);

  const onTabNavButton9Click = useCallback(() => {
    navigate("/fund-detail-investor-relations");
  }, [navigate]);

  const onTabNavButton11Click = useCallback(() => {
    navigate("/fund-detail-compliance");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.fundDetailServices}>
      <div
        className={styles.companyProfile}
        onClick={onCompanyProfileContainerClick}
      >
        <img className={styles.bgIcon} alt="" src="/bg3.svg" />
        <img
          className={styles.iconMetroExpandLess}
          alt=""
          src="/icon-metroexpandless.svg"
        />
        <div className={styles.totalCapitalCallAmountParent}>
          <div className={styles.totalCapitalCall}>
            Total Capital Call Amount
          </div>
          <div className={styles.capitalCallDate}>Capital call date:</div>
          <div className={styles.capitalCallNumberid}>
            Capital call number/ID
          </div>
          <div className={styles.capitalCallPurpose}>Capital call purpose:</div>
          <div className={styles.totalAmountPending}>Total Amount Pending</div>
          <b className={styles.july2023}>July 2023</b>
          <b className={styles.b}>—</b>
          <b className={styles.investmentManagementFees}>
            Investment, Management fees
          </b>
          <b className={styles.b1}>$7,850,000</b>
          <b className={styles.b2}>24</b>
          <b className={styles.b3}>0</b>
          <b className={styles.b4}>0</b>
          <b className={styles.b5}>$0</b>
          <b className={styles.b6}>$0</b>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.totalAmountReceived}>
            Total Amount Received
          </div>
          <div className={styles.ofInvestors}># OF INVESTORS</div>
          <div className={styles.capitalAmount}>CAPITAL AMOUNT</div>
        </div>
        <div
          className={styles.componeseeMoreButtonnt254}
          onClick={onComponeSeeMoreButtonnt254Click}
        >
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>Draft</b>
        </div>
        <div className={styles.capitalCall}>Capital Call​</div>
      </div>
      <div className={styles.companyProfile1}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.distribution}>Distribution​</div>
        <div className={styles.label1}>
          <b className={styles.labelcontent1}>Pending</b>
        </div>
      </div>
      <div className={styles.companyProfile2}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.distribution}>K-1s</div>
      </div>
      <div className={styles.companyProfile3}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.investorReporting}>Investor Reporting</div>
      </div>
      <div className={styles.services}>Services</div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild4} />
        <div className={styles.tabNavButton}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton1} onClick={onTabNavButton1Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild5} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2} onClick={onTabNavButton2Click}>
          <div className={styles.tabNavButtonChild} />
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
        <div className={styles.tabNavButton4}>
          <div className={styles.tabNavButtonChild2} />
          <div className={styles.servicing}>ServicING</div>
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
      <div className={styles.fundDetailServicesInner}>
        <div className={styles.maskGroup35Parent}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.privateHealthcareFundIiiParent}>
            <div className={styles.privateHealthcareFundContainer}>
              <p
                className={styles.privateHealthcare}
              >{`Private Healthcare `}</p>
              <p className={styles.privateHealthcare}>Fund III</p>
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
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild4} />
        <div className={styles.tabNavButton}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton7}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild5} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2} onClick={onTabNavButton8Click}>
          <div className={styles.tabNavButtonChild} />
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
        <div className={styles.tabNavButton4}>
          <div className={styles.tabNavButtonChild2} />
          <div className={styles.servicing}>ServicING</div>
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
      <div className={styles.fundDetailServicesChild} />
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
        className={styles.component20936}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default FundDetailServices;
