import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportingQuarterlyReport.module.css";
const ReportingQuarterlyReport: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabNavButton4Click = useCallback(() => {
    navigate("/fund-detail-services-1");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onTabNavButton10Click = useCallback(() => {
    navigate("/fund-detail-services-1");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/fund-detail-services-2");
  }, [navigate]);

  return (
    <div className={styles.reportingQuarterlyReport}>
      <div className={styles.reportingQuarterlyReportChild} />
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
      <div className={styles.capitalAccountStatementParent}>
        <b className={styles.capitalAccountStatement}>
          Capital Account Statement
        </b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineParent}>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <img className={styles.path481Icon} alt="" src="/path-4811.svg" />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
          <div className={styles.groupChild7} />
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
          <div className={styles.groupChild10} />
          <div className={styles.groupChild11} />
          <div className={styles.groupChild12} />
          <div className={styles.groupChild13} />
          <div className={styles.groupChild14} />
          <div className={styles.groupChild15} />
          <div className={styles.groupChild16} />
          <div className={styles.groupChild17} />
          <div className={styles.groupChild18} />
          <div className={styles.groupChild19} />
          <div className={styles.groupChild20} />
          <div className={styles.groupChild21} />
          <div className={styles.groupChild22} />
          <div className={styles.groupChild23} />
          <div className={styles.groupChild24} />
          <div className={styles.groupChild25} />
          <div className={styles.groupChild26} />
          <div className={styles.groupChild27} />
          <div className={styles.groupChild28} />
          <div className={styles.groupChild29} />
          <div className={styles.groupChild30} />
          <div className={styles.groupChild31} />
          <div className={styles.groupChild32} />
          <div className={styles.beginningNav}>
            Beginning NAV - Net of Incentive Allocation
          </div>
          <div
            className={styles.navReconciliationAnd}
          >{`NAV Reconciliation and Summary of Fees, Expenses & Incentive Allocation `}</div>
          <div className={styles.parent}>
            <div className={styles.div}>$45,067,000</div>
            <div className={styles.div1}>0</div>
            <div className={styles.div2}>$1,250,000</div>
            <div className={styles.div3}>(1,250,000)</div>
            <div className={styles.div4}>(187,500)</div>
            <div className={styles.div5}>0</div>
            <div className={styles.div6}>(48,000)</div>
            <div className={styles.div7}>$82,600</div>
            <div className={styles.div8}>(152,900)</div>
            <div className={styles.div9}>0</div>
            <div className={styles.div10}>$500</div>
            <div className={styles.div11}>$10,000</div>
            <div className={styles.div12}>(2,000)</div>
            <div className={styles.div13}>$ 1000</div>
            <div className={styles.div14}>(143,400)</div>
            <div className={styles.div15}>0</div>
            <div className={styles.div16}>$1,000,000</div>
            <div className={styles.div17}>$1,000,000</div>
            <div className={styles.div18}>$50,000,000</div>
            <div className={styles.div19}>$45,673,600</div>
            <div className={styles.div20}>$18,500,000</div>
            <div className={styles.div21}>$45,673,600</div>
            <div className={styles.div22}>0</div>
            <div className={styles.div23}>$45,673,600</div>
            <div className={styles.div24}>0</div>
            <div className={styles.div25}>$45,673,600</div>
            <div className={styles.div26}>0</div>
            <div className={styles.div27}>$45,673,600</div>
            <div className={styles.div28}>0</div>
            <div className={styles.div29}>$45,673,600</div>
            <div className={styles.div30}>$18,500,000</div>
            <div className={styles.div31}>$45,673,600</div>
          </div>
          <div className={styles.group}>
            <div className={styles.div}>$38,196,000</div>
            <div className={styles.div33}>$5,000,000</div>
            <div className={styles.div2}>$5,000,000</div>
            <div className={styles.div3}>0</div>
            <div className={styles.div4}>(750,000)</div>
            <div className={styles.div5}>0</div>
            <div className={styles.div6}>(4154,780)</div>
            <div className={styles.div39}>$356,500</div>
            <div className={styles.div40}>(558,280)</div>
            <div className={styles.div41}>$7500</div>
            <div className={styles.div42}>$1000</div>
            <div className={styles.div43}>$32,380</div>
            <div className={styles.div44}>(8,000)</div>
            <div className={styles.div45}>(8,000)</div>
            <div className={styles.div46}>$23,500,000</div>
            <div className={styles.div47}>$3,000</div>
            <div className={styles.div48}>$3,000</div>
            <div className={styles.div49}>(5,000,000)</div>
            <div className={styles.div50}>(522,400)</div>
            <div className={styles.div51}>(522,400)</div>
            <div className={styles.div52}>0</div>
            <div className={styles.div53}>0</div>
            <div className={styles.div54}>0</div>
            <div className={styles.div55}>0</div>
            <div className={styles.div56}>$3,000,000</div>
            <div className={styles.div57}>$3,000,000</div>
            <div className={styles.div58}>0</div>
            <div className={styles.div59}>$5,000,000</div>
            <div className={styles.div60}>$5,000,000</div>
            <div className={styles.div30}>$18,500,000</div>
            <div className={styles.div62}>$45,673,600</div>
            <div className={styles.div63}>$50,000,000</div>
          </div>
          <div className={styles.container}>
            <div className={styles.div}>$0</div>
            <div className={styles.div1}>$35,000,000</div>
            <div className={styles.div2}>$19,000,000</div>
            <div className={styles.div3}>$16,000,000</div>
            <div className={styles.div4}>(6,625,000)</div>
            <div className={styles.div5}>0</div>
            <div className={styles.div6}>(584,429)</div>
            <div className={styles.div71}>$1,538,521</div>
            <div className={styles.div72}>(5,634,908)</div>
            <div className={styles.div73}>$25,000</div>
            <div className={styles.div74}>$10,000</div>
            <div className={styles.div75}>$233,508</div>
            <div className={styles.div76}>(40,000)</div>
            <div className={styles.div77}>$ 20,000</div>
            <div className={styles.div78}>$ 20,000</div>
            <div className={styles.div79}>$50,000,000</div>
            <div className={styles.div80}>(5,386,400)</div>
            <div className={styles.div81}>(5,386,400)</div>
            <div className={styles.div46}>$50,000,000</div>
            <div className={styles.div83}>(40,000)</div>
            <div className={styles.div84}>(40,000)</div>
            <div className={styles.div85}>(35,000,000)</div>
            <div className={styles.div86}>$15,100,000</div>
            <div className={styles.div87}>$15,100,000</div>
            <div className={styles.div52}>$4,000,000</div>
            <div className={styles.div89}>$20,000,000</div>
            <div className={styles.div90}>$20,000,000</div>
            <div className={styles.div91}>0</div>
            <div className={styles.div92}>$45,673,600</div>
            <div className={styles.div93}>$45,673,600</div>
            <div className={styles.div94}>(500,000)</div>
            <div className={styles.div30}>$18,500,000</div>
          </div>
          <div
            className={styles.contributionsCash}
          >{`Contributions - Cash & Non-Cash`}</div>
          <div
            className={styles.distributionsCash}
          >{`Distributions - Cash & Non-Cash (input positive values)`}</div>
          <div className={styles.totalCash}>
            Total Cash / Non-Cash Flows (contributions, less distributions)
          </div>
          <div className={styles.netOperatingIncome}>
            Net Operating Income (Expense):
          </div>
          <div className={styles.totalNetOperating}>
            Total Net Operating Income / (Expense)
          </div>
          <div className={styles.placementFees}>(Placement Fees)</div>
          <div className={styles.realizedGain}>Realized Gain / (Loss)</div>
          <div className={styles.changeInUnrealized}>
            Change in Unrealized Gain / (Loss)
          </div>
          <div className={styles.endingNav}>
            Ending NAV - Net of Incentive Allocation
          </div>
          <div className={styles.accusedIncentiveAllocation}>
            Accused Incentive Allocation - Starting Period balance
          </div>
          <div className={styles.totalCommitment}>Total Commitment</div>
          <div className={styles.incentiveAllocation}>
            Incentive Allocation - Paid During the Period
          </div>
          <div className={styles.begininningUnfundedCommitmen}>
            Begininning Unfunded Commitment
          </div>
          <div className={styles.accusedIncentiveAllocation1}>
            Accused Incentive Allocation - Periodic Change
          </div>
          <div className={styles.lessContributions}>(Less Contributions)</div>
          <div className={styles.accusedIncentiveAllocation2}>
            Accused Incentive Allocation - Ending Period Balance
          </div>
          <div className={styles.plusRecallableDistributions}>
            Plus Recallable Distributions
          </div>
          <div className={styles.lessExpiredreleaseCommitme}>
            (Less) Expired/Release Commitments)
          </div>
          <div className={styles.otherFundedAdjustments}>
            +/- Other Funded Adjustments
          </div>
          <div className={styles.endingNav1}>
            Ending NAV - Gross of Accused Incentive Allocation
          </div>
          <div className={styles.endingUnfundedCommitment}>
            Ending Unfunded Commitment
          </div>
          <div
            className={styles.managementFees}
          >{`Management Fees - Gross of Offsets, Waivers & Rebates`}</div>
          <div className={styles.managementFeeRebate}>
            Management Fee Rebate
          </div>
          <div className={styles.partnershipExpenses}>
            (Partnership Expenses - Total):
          </div>
          <div
            className={styles.totalOffsetsTo}
          >{`Total Offsets to Fees & Expenses (applied during period):`}</div>
          <div
            className={styles.totalManagementFees}
          >{`(Total Management Fees & Partnership Expenses, Net of Offsets & Rebates, Gross of Fee Waiver)`}</div>
          <div className={styles.interestIncome}>Interest Income</div>
          <div className={styles.dividendIncome}>Dividend Income</div>
          <div className={styles.interestExpense}>(Interest Expense)</div>
          <div className={styles.otherIncomeexpense}>
            Other Income/(Expense)+
          </div>
          <div className={styles.qtdOct15}>QTD (Oct-15 - Dec-15)</div>
          <div className={styles.ytdJan15}>YTD (JAN -15 - Dec-15)</div>
          <div className={styles.sinceInceptionOct15}>
            Since Inception( Oct-15 - Dec-15)
          </div>
          <div className={styles.endingNav2}>
            Ending NAV - Net of Incentive Allocation
          </div>
          <div className={styles.endingNav3}>
            Ending NAV - Net of Incentive Allocation
          </div>
          <div className={styles.lp5sAllocation}>
            LP #5’s Allocation of Total Fund
          </div>
        </div>
      </div>
      <div className={styles.q12023Overview}>Q1: 2023 Overview Report</div>
      <div className={styles.reportingQuarterlyReportInner}>
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
      <div className={styles.reportingQuarterlyReportItem} />
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
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
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
                className={styles.leftNavButtonInner}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div96}>4</div>
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
            <div className={styles.leftNavButton7}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavButton8}>
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
        className={styles.component20944}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default ReportingQuarterlyReport;
