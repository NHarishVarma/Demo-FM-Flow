import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CapitalCallDetail1.module.css";
const CapitalCallDetail1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonNormalContainerClick = useCallback(() => {
    navigate("/capital-call-detail-1-2");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
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
    <div className={styles.capitalCallDetail1}>
      <div className={styles.capitalCallActivity}>Capital Call Activity</div>
      <div
        className={styles.buttonNormal}
        onClick={onButtonNormalContainerClick}
      >
        <div className={styles.buttonNormalChild} />
        <div className={styles.addCall}>Add Call</div>
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div className={styles.capitalCallDetail1Child} />
      <div className={styles.capitalCallDetail1Item} />
      <div className={styles.capitalCallDetail1Inner} />
      <div className={styles.lineDiv} />
      <div className={styles.capitalCallDetail1Child1} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.jun2022}>Jun. 2022</div>
        <b className={styles.b}>$200,000,000.00</b>
        <b className={styles.closed}>Closed</b>
        <b className={styles.b1}>$40,000,000.00</b>
        <b className={styles.b2}>$40,000,000.00</b>
        <b className={styles.b3}>$40,000,000.00</b>
        <b className={styles.b4}>20</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.jun20221}>Jun. 2022</div>
        <b className={styles.b5}>$200,000,000.00</b>
        <b className={styles.closed1}>Closed</b>
        <b className={styles.b6}>$40,000,000.00</b>
        <b className={styles.b7}>$40,000,000.00</b>
        <b className={styles.b8}>$40,000,000.00</b>
        <b className={styles.b9}>20</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.jun20222}>Jun. 2022</div>
        <b className={styles.b10}>$200,000,000.00</b>
        <b className={styles.closed2}>Closed</b>
        <b className={styles.b11}>$40,000,000.00</b>
        <b className={styles.b12}>$40,000,000.00</b>
        <b className={styles.b13}>$40,000,000.00</b>
        <b className={styles.b14}>20</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.jun20223}>Jun. 2022</div>
        <b className={styles.b15}>$200,000,000.00</b>
        <b className={styles.closed3}>Closed</b>
        <b className={styles.b16}>$40,000,000.00</b>
        <b className={styles.b17}>$40,000,000.00</b>
        <b className={styles.b18}>$40,000,000.00</b>
        <b className={styles.b19}>20</b>
      </div>
      <div className={styles.previousCapitalCalls}>Previous Capital Calls</div>
      <div className={styles.subscribedcommittedParent}>
        <div className={styles.subscribedcommitted}>Subscribed/Committed</div>
        <div className={styles.totalContributed}>Total Contributed</div>
        <div className={styles.totalReceived}>Total Received</div>
        <div className={styles.ofInvestors}># of investors</div>
        <div className={styles.targetRaise}>Target Raise</div>
        <div className={styles.status}>Status</div>
        <div className={styles.date}>DATE</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild1} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild2} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild3} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild4} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild5} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild6} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.capitalCallDetail1Inner1}>
        <div className={styles.maskGroup35Parent}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.nexusHealthEquityFundParent}>
            <div className={styles.nexusHealthEquity}>
              Nexus Health Equity Fund
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
      <div className={styles.capitalCallDetail1Child2} />
      <div className={styles.maskGroup35Group}>
        <img
          className={styles.maskGroup351}
          alt=""
          src="/mask-group-351@2x.png"
        />
        <div className={styles.nexusHealthEquityFundGroup}>
          <div className={styles.nexusHealthEquity1}>
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
                className={styles.domainFill0Wght400Grad0OpsIcon}
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
        className={styles.component20912}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default CapitalCallDetail1;
