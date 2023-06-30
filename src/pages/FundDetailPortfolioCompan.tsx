import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailPortfolioCompan.module.css";
const FundDetailPortfolioCompan: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCompanyProfileContainerClick = useCallback(() => {
    navigate("/fund-detail-portfolio-companies");
  }, [navigate]);

  const onComponeSeeMoreButtonnt254Click = useCallback(() => {
    navigate("/company-detail");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
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

  return (
    <div className={styles.fundDetailPortfolioCompan}>
      <div
        className={styles.companyProfile}
        onClick={onCompanyProfileContainerClick}
      >
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.us}>US</b>
        <b className={styles.cRound}>C Round</b>
        <b className={styles.b}>$28,000,000</b>
        <b className={styles.performing}>Performing</b>
        <b className={styles.b1}>38%</b>
        <img
          className={styles.iconMetroExpandLess}
          alt=""
          src="/icon-metroexpandless.svg"
        />
        <div className={styles.impactHealth}>Impact Health</div>
        <div className={styles.founded2020}>Founded: 2020</div>
        <img
          className={styles.maskGroup40}
          alt=""
          src="/mask-group-40@2x.png"
        />
        <div className={styles.companyProfileChild} />
        <div className={styles.companyProfileItem} />
        <div className={styles.companyProfileInner} />
        <div className={styles.lineDiv} />
        <div className={styles.companyProfileChild1} />
        <div className={styles.companyProfileChild2} />
        <div className={styles.multipleOfInvested}>
          Multiple of Invested Capital (MOIC)​
        </div>
        <div className={styles.paidInCapitalPic}>Paid-In Capital (PIC)​</div>
        <div className={styles.distributedToPaidIn}>
          Distributed to Paid-in Capital
        </div>
        <div className={styles.residualValueTo}>
          Residual Value to Paid-in Capital (RVPI)​
        </div>
        <div className={styles.totalValueTo}>
          Total Value to Paid-in Capital (TVPI)​
        </div>
        <b className={styles.b2}>—</b>
        <b className={styles.b3}>—</b>
        <b className={styles.b4}>—</b>
        <b className={styles.b5}>—</b>
        <b className={styles.b6}>—</b>
        <div className={styles.value}>
          <div className={styles.chartLeftValue}>
            <div className={styles.shape} />
            <div className={styles.k}>1200</div>
          </div>
          <div className={styles.chartLeftValue1}>
            <div className={styles.shape} />
            <div className={styles.k}>1000</div>
          </div>
          <div className={styles.chartLeftValue2}>
            <div className={styles.shape2} />
            <div className={styles.k2}>800</div>
          </div>
          <div className={styles.chartLeftValue3}>
            <div className={styles.shape2} />
            <div className={styles.k2}>600</div>
          </div>
          <div className={styles.chartLeftValue4}>
            <div className={styles.shape2} />
            <div className={styles.k2}>400</div>
          </div>
          <div className={styles.chartLeftValue5}>
            <div className={styles.shape2} />
            <div className={styles.k2}>200</div>
          </div>
          <div className={styles.chartLeftValue6}>
            <div className={styles.shape6} />
            <div className={styles.k6}>0</div>
          </div>
        </div>
        <div className={styles.scrollGroup8}>
          <div className={styles.graph}>
            <div className={styles.graphStackedBar}>
              <div className={styles.jan}>Dec</div>
              <div className={styles.data}>
                <div className={styles.dataChild} />
                <div className={styles.dataItem} />
                <div className={styles.dataInner} />
              </div>
            </div>
            <div className={styles.graphStackedBar1}>
              <div className={styles.jan1}>Nov</div>
              <div className={styles.data1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild1} />
                <div className={styles.dataChild2} />
              </div>
            </div>
            <div className={styles.graphStackedBar2}>
              <div className={styles.jan2}>Oct</div>
              <div className={styles.data2}>
                <div className={styles.dataChild3} />
                <div className={styles.dataChild4} />
                <div className={styles.dataChild5} />
              </div>
            </div>
            <div className={styles.graphStackedBar3}>
              <div className={styles.jan3}>Sep</div>
              <div className={styles.data3}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild7} />
                <div className={styles.dataChild8} />
              </div>
            </div>
            <div className={styles.graphStackedBar4}>
              <div className={styles.jan4}>Aug</div>
              <div className={styles.data4}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild10} />
                <div className={styles.dataInner} />
              </div>
            </div>
            <div className={styles.graphStackedBar5}>
              <div className={styles.jan5}>Jul</div>
              <div className={styles.data5}>
                <div className={styles.dataChild12} />
                <div className={styles.dataChild13} />
                <div className={styles.dataChild14} />
              </div>
            </div>
            <div className={styles.graphStackedBar6}>
              <div className={styles.jan6}>Jun</div>
              <div className={styles.data6}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild16} />
                <div className={styles.dataChild17} />
              </div>
            </div>
            <div className={styles.graphStackedBar7}>
              <div className={styles.jan7}>May</div>
              <div className={styles.data7}>
                <div className={styles.dataChild18} />
                <div className={styles.dataChild19} />
                <div className={styles.dataChild20} />
              </div>
            </div>
            <div className={styles.graphStackedBar8}>
              <div className={styles.jan8}>Apr</div>
              <div className={styles.data8}>
                <div className={styles.dataChild21} />
                <div className={styles.dataChild22} />
                <div className={styles.dataChild23} />
              </div>
            </div>
            <div className={styles.graphStackedBar9}>
              <div className={styles.jan9}>Mar</div>
              <div className={styles.data9}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild25} />
                <div className={styles.dataChild26} />
              </div>
            </div>
            <div className={styles.graphStackedBar10}>
              <div className={styles.jan10}>Feb</div>
              <div className={styles.data2}>
                <div className={styles.dataChild27} />
                <div className={styles.dataChild28} />
                <div className={styles.dataChild29} />
              </div>
            </div>
            <div className={styles.graphStackedBar11}>
              <div className={styles.jan11}>Jan</div>
              <div className={styles.data11}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild31} />
                <div className={styles.dataChild32} />
              </div>
            </div>
            <div className={styles.graphStackedBar12}>
              <div className={styles.jan}>Dec</div>
              <div className={styles.data}>
                <div className={styles.dataChild} />
                <div className={styles.dataItem} />
                <div className={styles.dataInner} />
              </div>
            </div>
            <div className={styles.graphStackedBar13}>
              <div className={styles.jan1}>Nov</div>
              <div className={styles.data1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild1} />
                <div className={styles.dataChild2} />
              </div>
            </div>
            <div className={styles.graphStackedBar14}>
              <div className={styles.jan2}>Oct</div>
              <div className={styles.data2}>
                <div className={styles.dataChild3} />
                <div className={styles.dataChild4} />
                <div className={styles.dataChild5} />
              </div>
            </div>
            <div className={styles.graphStackedBar15}>
              <div className={styles.jan3}>Sep</div>
              <div className={styles.data3}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild7} />
                <div className={styles.dataChild8} />
              </div>
            </div>
            <div className={styles.graphStackedBar16}>
              <div className={styles.jan4}>Aug</div>
              <div className={styles.data4}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild10} />
                <div className={styles.dataInner} />
              </div>
            </div>
            <div className={styles.graphStackedBar17}>
              <div className={styles.jan5}>Jul</div>
              <div className={styles.data5}>
                <div className={styles.dataChild12} />
                <div className={styles.dataChild13} />
                <div className={styles.dataChild14} />
              </div>
            </div>
            <div className={styles.graphStackedBar18}>
              <div className={styles.jan18}>Jun</div>
              <div className={styles.data6}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild16} />
                <div className={styles.dataChild17} />
              </div>
            </div>
            <div className={styles.graphStackedBar19}>
              <div className={styles.jan7}>May</div>
              <div className={styles.data7}>
                <div className={styles.dataChild18} />
                <div className={styles.dataChild19} />
                <div className={styles.dataChild20} />
              </div>
            </div>
            <div className={styles.graphStackedBar20}>
              <div className={styles.jan8}>Apr</div>
              <div className={styles.data8}>
                <div className={styles.dataChild21} />
                <div className={styles.dataChild22} />
                <div className={styles.dataChild23} />
              </div>
            </div>
            <div className={styles.graphStackedBar21}>
              <div className={styles.jan9}>Mar</div>
              <div className={styles.data9}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild25} />
                <div className={styles.dataChild26} />
              </div>
            </div>
            <div className={styles.graphStackedBar22}>
              <div className={styles.jan10}>Feb</div>
              <div className={styles.data2}>
                <div className={styles.dataChild27} />
                <div className={styles.dataChild28} />
                <div className={styles.dataChild29} />
              </div>
            </div>
            <div className={styles.graphStackedBar23}>
              <div className={styles.jan11}>Jan</div>
              <div className={styles.data11}>
                <div className={styles.rectangleDiv} />
                <div className={styles.dataChild31} />
                <div className={styles.dataChild32} />
              </div>
            </div>
          </div>
          <div className={styles.pointerLeft}>
            <b className={styles.titlee}>June, 2022</b>
            <div className={styles.data24}>
              <div className={styles.sales} />
              <div className={styles.div}>145</div>
              <div className={styles.onlineSales}>Cap 3</div>
            </div>
            <div className={styles.data25}>
              <div className={styles.sales1} />
              <div className={styles.div}>224</div>
              <div className={styles.onlineSales}>Cap 2</div>
            </div>
            <div className={styles.data26}>
              <div className={styles.sales2} />
              <div className={styles.div}>256</div>
              <div className={styles.onlineSales}>Cap 1</div>
            </div>
            <img className={styles.tooltipIcon} alt="" src="/tooltip.svg" />
          </div>
        </div>
        <div className={styles.legend}>
          <div className={styles.income}>
            <div className={styles.shape7} />
            <div className={styles.marketingSales}>Capital Call 3</div>
          </div>
          <div className={styles.income1}>
            <div className={styles.shape8} />
            <div className={styles.marketingSales}>Capital Call 2</div>
          </div>
          <div className={styles.online}>
            <div className={styles.shape9} />
            <div className={styles.marketingSales2}>Capital Call 1</div>
          </div>
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
        <div className={styles.image} />
      </div>
      <div className={styles.companyProfile1}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <b className={styles.healthCare1}>Health Care</b>
        <b className={styles.us1}>US</b>
        <b className={styles.cRound1}>C Round</b>
        <b className={styles.b7}>$28,000,000</b>
        <b className={styles.watchlist}>Watchlist</b>
        <b className={styles.b8}>16%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.portfolioCompany02}>Portfolio Company 02</div>
        <div className={styles.founded20201}>Founded: 2020</div>
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProfile2}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <b className={styles.healthCare1}>Health Care</b>
        <b className={styles.us1}>US</b>
        <b className={styles.cRound1}>C Round</b>
        <b className={styles.b7}>$28,000,000</b>
        <b className={styles.impaired}>Impaired</b>
        <b className={styles.b10}>20%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.portfolioCompany02}>Portfolio Company 03</div>
        <div className={styles.founded20201}>Founded: 2020</div>
        <div className={styles.maskGroup11Container}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProfile3}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <b className={styles.healthCare1}>Health Care</b>
        <b className={styles.us1}>US</b>
        <b className={styles.cRound1}>C Round</b>
        <b className={styles.b7}>$28,000,000</b>
        <b className={styles.impaired}>Performing</b>
        <b className={styles.b12}>10%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.portfolioCompany02}>Portfolio Company 04</div>
        <div className={styles.founded20201}>Founded: 2020</div>
        <div className={styles.maskGroup11Frame}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
      <div className={styles.companyProfile4}>
        <img className={styles.bgIcon1} alt="" src="/bg1.svg" />
        <b className={styles.healthCare1}>Health Care</b>
        <b className={styles.us1}>US</b>
        <b className={styles.cRound1}>C Round</b>
        <b className={styles.b7}>$28,000,000</b>
        <b className={styles.impaired}>Performing</b>
        <b className={styles.b14}>49%</b>
        <img
          className={styles.iconMetroExpandMore}
          alt=""
          src="/icon-metroexpandmore.svg"
        />
        <div className={styles.portfolioCompany02}>Portfolio Company 05</div>
        <div className={styles.founded20201}>Founded: 2020</div>
        <div className={styles.groupDiv}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-111@2x.png"
          />
        </div>
      </div>
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
      <div className={styles.navDrawerLeft}>
        <div className={styles.leftNavClosedWrapper}>
          <div className={styles.leftNavClosedWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.leftNavClosedWrapper} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.leftNavClosedWrapper} />
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
              <div className={styles.div3}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.leftNavClosedWrapper} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.leftNavClosedWrapper} />
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
              <div className={styles.leftNavClosedWrapper} />
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
              <div className={styles.leftNavClosedWrapper} />
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
            className={styles.domainFill0Wght400Grad0OpsIcon1}
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
        <div className={styles.leftNavClosedWrapper}>
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
            className={styles.domainFill0Wght400Grad0OpsIcon1}
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
          <div className={styles.leftNavClosedWrapper}>
            <div className={styles.leftNavClosedWrapper}>
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
      <img
        className={styles.component2099}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default FundDetailPortfolioCompan;
