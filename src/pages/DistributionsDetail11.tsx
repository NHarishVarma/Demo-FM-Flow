import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DistributionsDetail11.module.css";
const DistributionsDetail11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonNormalContainerClick = useCallback(() => {
    navigate("/distributions-detail-1-6");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/distributions-detail-1-7");
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
    <div className={styles.distributionsDetail11}>
      <div
        className={styles.buttonNormal}
        onClick={onButtonNormalContainerClick}
      >
        <div className={styles.buttonNormalChild} />
        <div className={styles.addDistribution}>{`Add Distribution `}</div>
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div className={styles.distributionsDetail11Child} />
      <div className={styles.distributionsDetail11Item} />
      <div className={styles.distributionsDetail11Inner} />
      <div className={styles.rectangleDiv} onClick={onRectangle1Click} />
      <div className={styles.jun2023}>Jun. 2023</div>
      <b className={styles.b}>$1,500,000</b>
      <b className={styles.pending}>Pending</b>
      <b className={styles.returnOfCapital}>Return of Capital</b>
      <b className={styles.b1}>5</b>
      <div className={styles.distributionsDetail11Child1} />
      <div className={styles.mar2023}>Mar, 2023</div>
      <b className={styles.b2}>$2,000,000</b>
      <b className={styles.closed}>Closed</b>
      <b className={styles.realizedGains}>Realized Gains</b>
      <b className={styles.b3}>10</b>
      <div className={styles.distributionsDetail11Child2} />
      <div className={styles.jun2022}>Jun. 2022</div>
      <b className={styles.b4}>$6,000,000</b>
      <b className={styles.closed1}>Closed</b>
      <b className={styles.dividend}>Dividend</b>
      <b className={styles.b5}>22</b>
      <div className={styles.distributionsDetail11Child3} />
      <div className={styles.mar2022}>Mar, 2022</div>
      <b className={styles.b6}>$2,000,000</b>
      <b className={styles.closed2}>Closed</b>
      <b className={styles.dividend1}>Dividend</b>
      <b className={styles.b7}>14</b>
      <div className={styles.groupParent}>
        <div className={styles.dateParent}>
          <div className={styles.date}>DATE</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
        <div className={styles.statusParent}>
          <div className={styles.status}>Status</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
        <div className={styles.amountParent}>
          <div className={styles.status}>Amount</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
        <div className={styles.typeParent}>
          <div className={styles.type}>Type</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
        <div className={styles.ofInvestorsParent}>
          <div className={styles.ofInvestors}># of investors</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.previousDistributions}>Previous Distributions</div>
      <img
        className={styles.iconMetroExpandMore}
        alt=""
        src="/icon-metroexpandmore.svg"
      />
      <img
        className={styles.iconMetroExpandMore1}
        alt=""
        src="/icon-metroexpandmore.svg"
      />
      <img
        className={styles.iconMetroExpandMore2}
        alt=""
        src="/icon-metroexpandmore.svg"
      />
      <img
        className={styles.iconMetroExpandMore3}
        alt=""
        src="/icon-metroexpandmore.svg"
      />
      <div className={styles.groupDiv}>
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
      <div className={styles.distributionsDetail11Child4} />
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
        <div className={styles.groupContainer}>
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
        className={styles.component20949}
        alt=""
        src="/component-209--47.svg"
      />
      <div className={styles.distributionsActivity}>Distributions Activity</div>
    </div>
  );
};

export default DistributionsDetail11;
