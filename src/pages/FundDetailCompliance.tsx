import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailCompliance.module.css";
const FundDetailCompliance: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabNavButton4Click = useCallback(() => {
    navigate("/fund-detail-services");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
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

  const onTabNavButton12Click = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onTabNavButton16Click = useCallback(() => {
    navigate("/fund-detail-services");
  }, [navigate]);

  return (
    <div className={styles.fundDetailCompliance}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.componeseeMoreButtonnt254}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.groupChild9} />
        <b className={styles.formPf}>Form PF</b>
        <b className={styles.amlkycDocumentation}>AML/KYC Documentation</b>
        <b className={styles.fatcaReporting}>FATCA Reporting</b>
        <b className={styles.crsReporting}>CRS Reporting</b>
        <b className={styles.aifmdReporting}>AIFMD Reporting</b>
        <b className={styles.formD}>Form D</b>
        <b className={styles.erisaCompliance}>ERISA Compliance</b>
        <b className={styles.gdprCompliance}>GDPR Compliance</b>
        <b className={styles.esgWorkshop}>ESG Workshop</b>
        <b className={styles.tradeComplianceAlert}>Trade Compliance Alert</b>
        <b className={styles.formAdv}>Form ADV</b>
        <div className={styles.nexusHealthEqu}>Nexus Health Equ…</div>
        <div className={styles.completed}>Completed</div>
        <div className={styles.crestmontCapital}>Crestmont Capital…</div>
        <div className={styles.completed1}>Completed</div>
        <div className={styles.pinecrestFundI}>Pinecrest Fund I</div>
        <div className={styles.cascadeInfrastruct}>Cascade Infrastruct…</div>
        <div className={styles.summitRidgeCredi}>Summit Ridge Credi….</div>
        <div className={styles.redwoodNatural}>Redwood Natural….</div>
        <div className={styles.summitRidgeInfr}>Summit Ridge Infr…</div>
        <div className={styles.arrowheadEquity}>{`Arrowhead Equity `}</div>
        <div className={styles.atlasPeakCapital}>{`Atlas Peak Capital `}</div>
        <div className={styles.crestmontCapital1}>Crestmont Capital…</div>
        <div className={styles.pinecrestFundI1}>Pinecrest Fund I</div>
        <div className={styles.completed2}>Completed</div>
        <div className={styles.completed3}>Completed</div>
        <div className={styles.inProgress}>In Progress</div>
        <div className={styles.inProgress1}>In Progress</div>
        <div className={styles.completed4}>Completed</div>
        <div className={styles.resolved}>Resolved</div>
        <div className={styles.resolved1}>Resolved</div>
        <div className={styles.completed5}>Completed</div>
        <div className={styles.completed6}>Completed</div>
        <div className={styles.date}>Date</div>
        <div className={styles.fund}>Fund</div>
        <div className={styles.status}>Status</div>
        <div className={styles.type}>Type</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild10} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild11} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild12} alt="" src="/polygon-7.svg" />
        <div className={styles.div1}>03/31/23</div>
        <div className={styles.div2}>03/15/23</div>
        <div className={styles.div3}>03/21/23</div>
        <div className={styles.div4}>03/21/23</div>
        <div className={styles.div5}>03/21/23</div>
        <div className={styles.div6}>03/21/23</div>
        <div className={styles.div7}>03/21/23</div>
        <div className={styles.div8}>03/21/23</div>
        <div className={styles.div9}>03/21/23</div>
        <div className={styles.div10}>03/21/23</div>
        <div className={styles.div11}>03/21/23</div>
        <img
          className={styles.warningFill0Wght400Grad0OpIcon}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon1}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon2}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon3}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon4}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon5}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon6}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon7}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon8}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon9}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.warningFill0Wght400Grad0OpIcon10}
          alt=""
          src="/warning-fill0-wght400-grad0-opsz48.svg"
        />
        <b className={styles.complianceAlerts}>Compliance Alerts</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.componeseeMoreButtonnt254}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
        <div className={styles.groupChild6} />
        <div className={styles.groupChild7} />
        <div className={styles.groupChild8} />
        <div className={styles.groupChild9} />
        <b className={styles.formPf}>Form PF</b>
        <b className={styles.amlkycDocumentation}>AML/KYC Documentation</b>
        <b className={styles.fatcaReporting}>FATCA Reporting</b>
        <b className={styles.crsReporting}>CRS Reporting</b>
        <b className={styles.aifmdReporting}>AIFMD Reporting</b>
        <b className={styles.formD}>Form D</b>
        <b className={styles.erisaCompliance}>ERISA Compliance</b>
        <b className={styles.gdprCompliance}>GDPR Compliance</b>
        <b className={styles.esgWorkshop}>ESG Workshop</b>
        <b className={styles.tradeComplianceAlert}>Trade Compliance Alert</b>
        <b className={styles.formAdv}>Form ADV</b>
        <div className={styles.nexusHealthEqu}>Nexus Health Equ…</div>
        <div className={styles.completed}>Completed</div>
        <div className={styles.crestmontCapital}>Crestmont Capital…</div>
        <div className={styles.completed1}>Completed</div>
        <div className={styles.pinecrestFundI}>Pinecrest Fund I</div>
        <div className={styles.cascadeInfrastruct}>Cascade Infrastruct…</div>
        <div className={styles.summitRidgeCredi}>Summit Ridge Credi….</div>
        <div className={styles.redwoodNatural}>Redwood Natural….</div>
        <div className={styles.summitRidgeInfr}>Summit Ridge Infr…</div>
        <div className={styles.arrowheadEquity}>{`Arrowhead Equity `}</div>
        <div className={styles.atlasPeakCapital}>{`Atlas Peak Capital `}</div>
        <div className={styles.crestmontCapital1}>Crestmont Capital…</div>
        <div className={styles.pinecrestFundI1}>Pinecrest Fund I</div>
        <div className={styles.completed2}>Completed</div>
        <div className={styles.completed3}>Completed</div>
        <div className={styles.inProgress}>In Progress</div>
        <div className={styles.inProgress1}>In Progress</div>
        <div className={styles.completed4}>Completed</div>
        <div className={styles.resolved}>Resolved</div>
        <div className={styles.resolved1}>Resolved</div>
        <div className={styles.completed5}>Completed</div>
        <div className={styles.completed6}>Completed</div>
        <div className={styles.date}>Date</div>
        <div className={styles.fund}>Fund</div>
        <div className={styles.status}>Status</div>
        <div className={styles.type}>Type</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild10} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild11} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild12} alt="" src="/polygon-7.svg" />
        <div className={styles.div1}>03/31/23</div>
        <div className={styles.div2}>03/15/23</div>
        <div className={styles.div3}>03/21/23</div>
        <div className={styles.div4}>03/21/23</div>
        <div className={styles.div5}>03/21/23</div>
        <div className={styles.div6}>03/21/23</div>
        <div className={styles.div7}>03/21/23</div>
        <div className={styles.div8}>03/21/23</div>
        <div className={styles.div9}>03/21/23</div>
        <div className={styles.div10}>03/21/23</div>
        <div className={styles.div11}>03/21/23</div>
        <b className={styles.complianceAlerts}>
          KYC/AML Documentation Status for LPs​
        </b>
      </div>
      <div className={styles.compliance}>{`Compliance `}</div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild29} />
        <div className={styles.groupChild30} />
        <div className={styles.tabNavButton}>
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
          <div className={styles.groupDiv}>
            <div className={styles.groupChild31} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
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
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild3} />
          <div className={styles.compliance1}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.fundDetailComplianceInner}>
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
      <div className={styles.fundDetailComplianceChild} />
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
              <div className={styles.div24}>4</div>
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
                className={styles.domainFill0Wght400Grad0OpsIcon1}
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
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild29} />
        <div className={styles.groupChild30} />
        <div className={styles.tabNavButton}>
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
          <div className={styles.groupDiv}>
            <div className={styles.groupChild31} />
            <div className={styles.performance}>PERFROMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton10}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild3} />
          <div className={styles.compliance1}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild29} />
        <div className={styles.groupChild30} />
        <div className={styles.tabNavButton12} onClick={onTabNavButton12Click}>
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
          <div className={styles.groupDiv}>
            <div className={styles.groupChild31} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4} onClick={onTabNavButton16Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild3} />
          <div className={styles.compliance1}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <img
        className={styles.component2097}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default FundDetailCompliance;
