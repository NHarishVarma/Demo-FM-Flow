import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportingExecutiveSummary.module.css";
const ReportingExecutiveSummary: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabNavButton4Click = useCallback(() => {
    navigate("/fund-detail-services-1");
  }, [navigate]);

  const onTabNavButton10Click = useCallback(() => {
    navigate("/fund-detail-services-1");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/fund-detail-services-2");
  }, [navigate]);

  return (
    <div className={styles.reportingExecutiveSummary}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
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
          <div className={styles.tabNavButtonChild1} />
          <div className={styles.servicing}>ServicING</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.reportingExecutiveSummaryChild} />
      <div className={styles.editSaveButton}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.print}>Print</div>
        <img
          className={styles.iconMaterialPrint}
          alt=""
          src="/icon-materialprint.svg"
        />
      </div>
      <div className={styles.editSaveButton1}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.download}>Download</div>
        <img
          className={styles.iconMaterialFileDownload}
          alt=""
          src="/icon-materialfiledownload.svg"
        />
      </div>
      <b className={styles.executiveSummaryContainer}>
        <p className={styles.executiveSummary}>
          Executive Summary - Firm and Fund Level Data
        </p>
        <p className={styles.executiveSummary}>($ Unaudited)</p>
      </b>
      <b className={styles.version11Revised}>Version 1.1 Revised Sept. 2022</b>
      <div className={styles.reportingExecutiveSummaryItem} />
      <div className={styles.reportingExecutiveSummaryInner} />
      <div className={styles.lineDiv} />
      <div className={styles.reportingExecutiveSummaryChild1} />
      <img className={styles.path481Icon} alt="" src="/path-481.svg" />
      <div className={styles.reportingExecutiveSummaryChild2} />
      <div className={styles.reportingExecutiveSummaryChild3} />
      <div className={styles.reportingExecutiveSummaryChild4} />
      <div className={styles.reportingExecutiveSummaryChild5} />
      <div className={styles.reportingExecutiveSummaryChild6} />
      <div className={styles.reportingExecutiveSummaryChild7} />
      <div className={styles.reportingExecutiveSummaryChild8} />
      <div className={styles.reportingExecutiveSummaryChild9} />
      <div className={styles.reportingExecutiveSummaryChild10} />
      <div className={styles.reportingExecutiveSummaryChild11} />
      <div className={styles.reportingExecutiveSummaryChild12} />
      <div className={styles.reportingExecutiveSummaryChild13} />
      <div className={styles.assetsUnderManagement}>
        Assets Under Management
      </div>
      <div className={styles.totalCommitmentsCommenced}>
        Total Commitments (Commenced on Jan. 5 2007)
      </div>
      <div className={styles.generalPartner}>General Partner</div>
      <div className={styles.nextHealthEquity}>Next Health Equity Fund</div>
      <div className={styles.parent}>
        <div className={styles.div}>$12,000,000,000</div>
        <div className={styles.div1}>8</div>
        <div className={styles.div2}>212</div>
        <div className={styles.div3}>$858,300,000</div>
        <div className={styles.div4}>$684,700,000</div>
        <div className={styles.div5}>{` `}</div>
        <div className={styles.div6}>$173,600,000</div>
        <div className={styles.div7}>17</div>
        <div className={styles.div8}>17</div>
        <div className={styles.div8}>{` `}</div>
        <div className={styles.div10}>$218,500,000</div>
        <div className={styles.div11}>32%</div>
        <div className={styles.div12}>25%</div>
        <div className={styles.x}>0.3x</div>
        <div className={styles.x1}>0.9x</div>
        <div className={styles.x2}>1.2x</div>
      </div>
      <div className={styles.activeFunds}>Active Funds</div>
      <div className={styles.totalDrawdownsSince}>
        Total Drawdowns Since Inception
      </div>
      <div className={styles.activePortfolioCompanies}>
        Active Portfolio Companies
      </div>
      <div className={styles.remainingCommitments}>Remaining Commitments</div>
      <div
        className={styles.totalNumberOf}
      >{`Total Number of Investments Since Inception `}</div>
      <div className={styles.totalDistributions}>Total Distributions</div>
      <div className={styles.keyFundValuation}>Key Fund Valuation Metrics</div>
      <div className={styles.byIndustry}>By Industry</div>
      <div className={styles.byRegion}>By Region</div>
      <div className={styles.numberOfPortfolio}>
        Number of Portfolio Companies at Dec. 31, 2022
      </div>
      <div className={styles.ofTotalDrawdowns}>% of Total Drawdowns</div>
      <div className={styles.dpiDistributionTo}>
        DPI (Distribution to Paid-in-Capital)
      </div>
      <div className={styles.tvpiTotalValue}>
        TVPI (Total Value to Paid-in-Capital)
      </div>
      <div className={styles.ofCommittedCapital}>% of Committed Capital</div>
      <div className={styles.rvpiResidualValue}>
        RVPI (Residual Value to Paid-in-Capital)
      </div>
      <div className={styles.ytdDecember31}>YTD: DECEMBER 31, 2022</div>
      <div className={styles.portfolioExecutiveSummary}>
        Portfolio Executive Summary
      </div>
      <div className={styles.totalSalesWrapper}>
        <div className={styles.totalSales}>
          <div className={styles.chart}>
            <div className={styles.value}>
              <div className={styles.div13}>
                <div className={styles.div14}>0</div>
              </div>
              <div className={styles.div15}>
                <div className={styles.div14}>0.2</div>
              </div>
              <div className={styles.div17}>
                <div className={styles.div14}>0.4</div>
              </div>
              <div className={styles.div19}>
                <div className={styles.div14}>0.6</div>
              </div>
              <div className={styles.div21}>
                <div className={styles.div14}>0.8</div>
              </div>
              <div className={styles.div23}>
                <div className={styles.div14}>1</div>
              </div>
              <div className={styles.div25}>
                <div className={styles.div14}>1.2</div>
              </div>
              <div className={styles.div27}>
                <div className={styles.div14}>1.4</div>
              </div>
            </div>
            <div className={styles.month}>
              <div className={styles.widgetsElementsChart}>
                <div className={styles.jan}>Dec</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart1}>
                <div className={styles.jan1}>Nov</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart2}>
                <div className={styles.jan2}>Oct</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart3}>
                <div className={styles.jan1}>Sep</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart4}>
                <div className={styles.jan4}>Aug</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart5}>
                <div className={styles.jan5}>Jul</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart6}>
                <div className={styles.jan2}>Jun</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart7}>
                <div className={styles.jan7}>May</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart8}>
                <div className={styles.jan1}>Apr</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart9}>
                <div className={styles.jan}>Mar</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart10}>
                <div className={styles.jan2}>Feb</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.widgetsElementsChart11}>
                <div className={styles.jan11}>Jan</div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
              </div>
              <div className={styles.monthChild} />
              <div className={styles.monthItem} />
              <div className={styles.monthInner} />
              <div className={styles.monthChild1} />
              <div className={styles.monthChild2} />
              <div className={styles.monthChild3} />
              <div className={styles.monthChild4} />
              <div className={styles.monthChild5} />
              <div className={styles.monthChild6} />
              <div className={styles.monthChild7} />
              <div className={styles.monthChild8} />
              <div className={styles.monthChild9} />
            </div>
            <div className={styles.tooltipPointerDown}>
              <b className={styles.titlee}>September, 2022</b>
              <div className={styles.dataKey}>
                <div className={styles.data}>
                  <div className={styles.sales} />
                  <div className={styles.div29}>TVPI</div>
                  <div className={styles.onlineSales}>1.2</div>
                </div>
              </div>
              <img
                className={styles.tooltipbgIcon}
                alt=""
                src="/tooltipbg.svg"
              />
            </div>
          </div>
          <div className={styles.title}>Historical Fund Performance TVPI</div>
          <div className={styles.title1}>
            Portfolio Breakdown (By Invested Capital)
          </div>
          <div className={styles.totalSalesChild} />
          <div className={styles.totalSalesItem} />
          <div className={styles.totalSalesInner} />
          <div className={styles.totalSalesChild1} />
          <div className={styles.totalSalesChild2} />
        </div>
      </div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-101.svg" />
      <img
        className={styles.reportingExecutiveSummaryChild14}
        alt=""
        src="/ellipse-101.svg"
      />
      <img className={styles.path483Icon} alt="" src="/path-483.svg" />
      <img className={styles.path485Icon} alt="" src="/path-483.svg" />
      <img className={styles.path482Icon} alt="" src="/path-482.svg" />
      <img className={styles.path484Icon} alt="" src="/path-482.svg" />
      <img className={styles.path489Icon} alt="" src="/path-489.svg" />
      <img className={styles.path486Icon} alt="" src="/path-486.svg" />
      <img className={styles.path487Icon} alt="" src="/path-487.svg" />
      <img className={styles.path488Icon} alt="" src="/path-488.svg" />
      <div className={styles.tooltipPointerDown1}>
        <b className={styles.titlee}>North America</b>
        <div className={styles.dataKey1}>
          <div className={styles.data1}>
            <div className={styles.sales} />
            <div className={styles.div29}>72%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon1} alt="" src="/tooltipbg1.svg" />
      </div>
      <div className={styles.tooltipPointerDown2}>
        <b className={styles.titlee}>Consumer Goods</b>
        <div className={styles.dataKey1}>
          <div className={styles.data2}>
            <div className={styles.sales} />
            <div className={styles.div29}>50%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon2} alt="" src="/tooltipbg2.svg" />
      </div>
      <div className={styles.tooltipPointerDown3}>
        <b className={styles.titlee}>Other</b>
        <div className={styles.dataKey1}>
          <div className={styles.data3}>
            <div className={styles.sales} />
            <div className={styles.onlineSales3}>3%%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon3} alt="" src="/tooltipbg3.svg" />
      </div>
      <div className={styles.tooltipPointerDown4}>
        <b className={styles.titlee}>Finacials</b>
        <div className={styles.dataKey1}>
          <div className={styles.data4}>
            <div className={styles.sales4} />
            <div className={styles.div29}>8%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon4} alt="" src="/tooltipbg4.svg" />
      </div>
      <div className={styles.tooltipPointerDown5}>
        <b className={styles.titlee}>Healthcare</b>
        <div className={styles.dataKey1}>
          <div className={styles.data5}>
            <div className={styles.sales5} />
            <div className={styles.div29}>7%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon5} alt="" src="/tooltipbg5.svg" />
      </div>
      <div className={styles.tooltipPointerDown6}>
        <b className={styles.titlee}>IT</b>
        <div className={styles.dataKey1}>
          <div className={styles.data2}>
            <div className={styles.sales6} />
            <div className={styles.div29}>20%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon6} alt="" src="/tooltipbg6.svg" />
      </div>
      <div className={styles.tooltipPointerDown7}>
        <b className={styles.titlee}>Asia</b>
        <div className={styles.dataKey1}>
          <div className={styles.data5}>
            <div className={styles.sales7} />
            <div className={styles.div29}>7%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon7} alt="" src="/tooltipbg7.svg" />
      </div>
      <div className={styles.tooltipPointerDown8}>
        <b className={styles.titlee}>Europe</b>
        <div className={styles.dataKey1}>
          <div className={styles.data8}>
            <div className={styles.sales8} />
            <div className={styles.div29}>21%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon8} alt="" src="/tooltipbg8.svg" />
      </div>
      <div className={styles.tooltipPointerDown9}>
        <b className={styles.titlee}>Services</b>
        <div className={styles.dataKey1}>
          <div className={styles.data4}>
            <div className={styles.sales8} />
            <div className={styles.div29}>6%</div>
          </div>
        </div>
        <img className={styles.tooltipbgIcon9} alt="" src="/tooltipbg9.svg" />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
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
        <div className={styles.tabNavButton4} onClick={onTabNavButton10Click}>
          <div className={styles.tabNavButtonChild1} />
          <div className={styles.servicing}>ServicING</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.reportingExecutiveSummaryInner1}>
        <div className={styles.totalSales}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.privateHealthcareFundIiiParent}>
            <div className={styles.privateHealthcareFundContainer}>
              <p className={styles.executiveSummary}>{`Private Healthcare `}</p>
              <p className={styles.executiveSummary}>Fund III</p>
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
      <img
        className={styles.moreVertFill0Wght400Grad0Icon}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <div className={styles.editSaveButton2}>
        <div className={styles.editSaveButtonInner} />
        <div className={styles.print}>Edit</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.totalSales}>
            <div className={styles.totalSales}>
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
        <div className={styles.totalSales}>
          <div className={styles.totalSales}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.totalSales} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.totalSales} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonInner}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div30}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.totalSales}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.totalSales}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.totalSales}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.totalSales} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.totalSales} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.totalSales} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavButton8}>
              <div className={styles.totalSales} />
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
        className={styles.component20947}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default ReportingExecutiveSummary;
