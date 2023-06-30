import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundManagerDashboard.module.css";
const FundManagerDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onThomasSmithTextClick = useCallback(() => {
    navigate("/investor-profile-overview");
  }, [navigate]);

  const onNexusHealthEquity5Click = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onLeftNavButtonClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.fundManagerDashboard}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.scrollGroup13}>
          <img className={styles.path455Icon} alt="" src="/path-4554.svg" />
          <div className={styles.reneeWilliams}>Renee Williams</div>
          <div className={styles.div}>—</div>
          <img className={styles.path455Icon1} alt="" src="/path-4554.svg" />
          <div className={styles.reneeWilliams1}>Renee Williams</div>
          <div className={styles.div1}>—</div>
          <img className={styles.path455Icon2} alt="" src="/path-4554.svg" />
          <div className={styles.steeleAndersen}>Steele Andersen</div>
          <div className={styles.div2}>$500,000</div>
          <img className={styles.path455Icon3} alt="" src="/path-4554.svg" />
          <div className={styles.steeleAndersen1}>Steele Andersen</div>
          <div className={styles.div3}>$500,000</div>
          <img className={styles.path455Icon4} alt="" src="/path-4554.svg" />
          <div className={styles.reneeWilliams2}>Renee Williams</div>
          <div className={styles.div4}>$500,000</div>
          <img className={styles.path455Icon5} alt="" src="/path-4554.svg" />
          <div className={styles.reneeWilliams3}>Renee Williams</div>
          <div className={styles.div5}>$500,000</div>
          <img className={styles.path455Icon6} alt="" src="/path-4555.svg" />
          <div className={styles.thomasSmith} onClick={onThomasSmithTextClick}>
            Thomas Smith
          </div>
          <div className={styles.div6}>—</div>
          <img className={styles.path455Icon7} alt="" src="/path-4555.svg" />
          <div className={styles.hecklerLlp}>Heckler LLP</div>
          <div className={styles.div7}>$14,000,000</div>
          <img className={styles.path455Icon8} alt="" src="/path-4555.svg" />
          <div className={styles.hecklerLlp1}>Heckler LLP</div>
          <div className={styles.div8}>$14,000,000</div>
          <img className={styles.path455Icon9} alt="" src="/path-4555.svg" />
          <div className={styles.alfredTigTrust}>Alfred Tig Trust</div>
          <div className={styles.div9}>$14,000,000</div>
          <img className={styles.path455Icon10} alt="" src="/path-4555.svg" />
          <div className={styles.alfredTigTrust1}>Alfred Tig Trust</div>
          <div className={styles.div10}>$14,000,000</div>
          <img className={styles.path455Icon11} alt="" src="/path-4555.svg" />
          <div className={styles.montgomeryWill}>Montgomery Will…</div>
          <div className={styles.div11}>$150,000</div>
          <img className={styles.path455Icon12} alt="" src="/path-4555.svg" />
          <div className={styles.redwoodNaturalResourceParent}>
            <div className={styles.redwoodNaturalResource}>
              Redwood Natural Resource…
            </div>
            <div className={styles.redwoodNaturalResource1}>
              Redwood Natural Resource…
            </div>
            <div className={styles.nexusHealthEquity}>
              Nexus Health Equity Fund
            </div>
            <div className={styles.nexusHealthEquity1}>
              Nexus Health Equity Fund
            </div>
            <div className={styles.summitRidgeCredit}>
              Summit Ridge Credit Fund
            </div>
            <div className={styles.summitRidgeCredit1}>
              Summit Ridge Credit Fund
            </div>
            <div className={styles.nexusHealthEquity2}>
              Nexus Health Equity Fund
            </div>
            <div className={styles.pensionFund}>Nexus Health Equity Fund</div>
            <div className={styles.nexusHealthEquity4}>
              Nexus Health Equity Fund
            </div>
            <div className={styles.trust}>Summit Ridge Credit Fund</div>
            <div className={styles.summitRidgeCredit3}>
              Summit Ridge Credit Fund
            </div>
            <div className={styles.arrowheadEquity}>{`Arrowhead Equity `}</div>
            <div className={styles.arrowheadEquity1}>{`Arrowhead Equity `}</div>
          </div>
          <div className={styles.montgomeryWill1}>Montgomery Will…</div>
          <div className={styles.div12}>$150,000</div>
          <div className={styles.individualParent}>
            <div className={styles.individual}>Individual</div>
            <div className={styles.profileProcess}>Individual</div>
            <div className={styles.legalReview}>Individual</div>
            <div className={styles.individual3}>Individual</div>
            <div className={styles.complete}>Individual</div>
            <div className={styles.individual5}>Individual</div>
            <div className={styles.individual6}>Individual</div>
            <div className={styles.pensionFund}>Pension Fund</div>
            <div className={styles.nexusHealthEquity4}>Pension Fund</div>
            <div className={styles.trust}>Trust</div>
            <div className={styles.summitRidgeCredit3}>Trust</div>
            <div className={styles.arrowheadEquity}>Individual</div>
            <div className={styles.arrowheadEquity1}>Individual</div>
          </div>
          <div className={styles.waitingOnFundsParent}>
            <div className={styles.individual}>Waiting on Funds</div>
            <div className={styles.profileProcess}>Profile Process</div>
            <div className={styles.legalReview}>Legal Review</div>
            <div className={styles.individual3}>—</div>
            <div className={styles.complete}>Complete</div>
            <div className={styles.individual5}>—</div>
            <div className={styles.individual6}>Profile Process</div>
            <div className={styles.pensionFund}>Docs to Sign</div>
            <div className={styles.nexusHealthEquity4}>Docs to Sign</div>
            <div className={styles.trust}>FM Approval</div>
            <div className={styles.summitRidgeCredit3}>—</div>
            <div className={styles.arrowheadEquity}>Funds Committed</div>
            <div className={styles.arrowheadEquity1}>—</div>
          </div>
          <img
            className={styles.scrollGroup13Child}
            alt=""
            src="/ellipse-92.svg"
          />
          <img
            className={styles.scrollGroup13Item}
            alt=""
            src="/ellipse-92.svg"
          />
          <img
            className={styles.scrollGroup13Inner}
            alt=""
            src="/ellipse-92.svg"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-92.svg" />
          <img
            className={styles.scrollGroup13Child1}
            alt=""
            src="/ellipse-97.svg"
          />
          <img
            className={styles.scrollGroup13Child2}
            alt=""
            src="/ellipse-97.svg"
          />
          <img
            className={styles.scrollGroup13Child3}
            alt=""
            src="/ellipse-93.svg"
          />
          <img
            className={styles.scrollGroup13Child4}
            alt=""
            src="/ellipse-93.svg"
          />
          <img
            className={styles.scrollGroup13Child5}
            alt=""
            src="/ellipse-93.svg"
          />
        </div>
        <b className={styles.newSubscribers}>New Subscribers</b>
        <div className={styles.groupItem} />
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.filterButton}>
          <div className={styles.totalCommitted}>Total Committed</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.filterButton1}>
          <div className={styles.totalCommitted}>Fund Name</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.filterButton2}>
          <div className={styles.totalCommitted}>Name</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <div className={styles.filterButton3}>
          <div className={styles.totalCommitted}>TYPE</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
        <img className={styles.path463Icon} alt="" src="/path-463.svg" />
        <div className={styles.filterButton4}>
          <div className={styles.totalCommitted}>Status</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-10.svg"
          />
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.path459Parent}>
          <img className={styles.path459Icon} alt="" src="/path-459.svg" />
          <div className={styles.scrollGroup14Parent}>
            <div className={styles.scrollGroup14}>
              <div className={styles.meetThe10MostActiveInvesParent}>
                <b className={styles.meetThe10Container}>
                  <p
                    className={styles.investorsInVc}
                  >{`Meet the 10 most active `}</p>
                  <p
                    className={styles.investorsInVc}
                  >{`investors in VC video game `}</p>
                  <p className={styles.investorsInVc}>deals</p>
                </b>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/rectangle-21452@2x.png"
                />
                <div className={styles.gaming}>GAMING</div>
                <div className={styles.byJacobRobbins}>By Jacob Robbins</div>
                <div className={styles.may52023}>May 5, 2023</div>
              </div>
              <div className={styles.marketMapEcommerceInvestoParent}>
                <b className={styles.meetThe10Container}>
                  <p
                    className={styles.investorsInVc}
                  >{`Market Map: Ecommerce `}</p>
                  <p
                    className={styles.investorsInVc}
                  >{`investors’ shopping spree `}</p>
                  <p className={styles.investorsInVc}>slackens</p>
                </b>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/rectangle-21453@2x.png"
                />
                <div className={styles.ecommerce}>ECOMMERCE</div>
                <div className={styles.byJordanRubio}>{`By Jordan Rubio `}</div>
                <div className={styles.may32023}>May 3, 2023</div>
              </div>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="/rectangle-21442@2x.png"
                />
                <div className={styles.vcValuations}>VC VALUATIONS</div>
                <div className={styles.byLeahHodgson}>By Leah Hodgson</div>
                <div className={styles.may102023}>May 10, 2023</div>
                <b className={styles.troubleAheadForContainer}>
                  <p
                    className={styles.investorsInVc}
                  >{`Trouble ahead for European `}</p>
                  <p className={styles.investorsInVc}>fintech valuations</p>
                </b>
              </div>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="/rectangle-21443@2x.png"
                />
                <div className={styles.regulation}>REGULATION</div>
                <div className={styles.byMarinaTemkin}>By Marina Temkin</div>
                <div className={styles.may42023}>May 4, 2023</div>
                <b className={styles.troubleAheadForContainer}>
                  <p
                    className={styles.investorsInVc}
                  >{`Dealmakers prepare to fight `}</p>
                  <p className={styles.investorsInVc}>antitrust regulators</p>
                </b>
              </div>
            </div>
            <img className={styles.path460Icon} alt="" src="/path-4601.svg" />
            <img className={styles.path461Icon} alt="" src="/path-4601.svg" />
          </div>
          <div className={styles.selectboxfilter}>
            <div className={styles.selectboxbg} />
            <div className={styles.allFunds}>All Funds</div>
            <img
              className={styles.smallDownIcon}
              alt=""
              src="/smalldown1.svg"
            />
          </div>
          <b className={styles.fundNews}>Fund News</b>
        </div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon1}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.groupContainer}>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <img className={styles.path454Icon} alt="" src="/path-454.svg" />
            <div className={styles.scrollGroup11}>
              <div className={styles.rectangleParent1}>
                <div className={styles.groupChild3} />
                <div className={styles.groupChild4} />
                <div className={styles.groupChild5} />
                <div className={styles.groupChild6} />
                <div className={styles.groupChild7} />
                <div
                  className={styles.nexusHealthEquity5}
                  onClick={onNexusHealthEquity5Click}
                >
                  Nexus Health Equity Fund
                </div>
                <div className={styles.open}>Open</div>
                <div className={styles.div17}>$9,500,000</div>
                <div className={styles.div18}>$14,000,000</div>
                <div className={styles.div19}>23</div>
                <div className={styles.div20}>3</div>
                <div className={styles.div21}>16</div>
                <div className={styles.open1}>Open</div>
                <div className={styles.div22}>$5,7500,000</div>
                <div className={styles.div23}>$28,000,000</div>
                <div className={styles.div24}>8</div>
                <div className={styles.div25}>1</div>
                <div className={styles.div26}>2</div>
                <div className={styles.open2}>Open</div>
                <div className={styles.div27}>$14,000,000</div>
                <div className={styles.div28}>$14,000,000</div>
                <div className={styles.div29}>12</div>
                <div className={styles.div30}>8</div>
                <div className={styles.div31}>10</div>
                <div className={styles.open3}>Open</div>
                <div className={styles.div32}>$14,000,000</div>
                <div className={styles.div33}>$14,000,000</div>
                <div className={styles.div34}>40</div>
                <div className={styles.div35}>0</div>
                <div className={styles.div36}>0</div>
                <div className={styles.closed}>Closed</div>
                <div className={styles.div37}>$28,000,000</div>
                <div className={styles.div38}>$36,000,000</div>
                <div className={styles.div39}>62</div>
                <div className={styles.div40}>0</div>
                <div className={styles.div41}>0</div>
                <div className={styles.closed1}>Closed</div>
                <div className={styles.div42}>$14,000,000</div>
                <div className={styles.div43}>$14,000,000</div>
                <div className={styles.div44}>100</div>
                <div className={styles.div45}>0</div>
                <div className={styles.div46}>0</div>
                <div className={styles.closed2}>Closed</div>
                <div className={styles.div47}>$14,000,000</div>
                <div className={styles.div48}>$14,000,000</div>
                <div className={styles.div49}>16</div>
                <div className={styles.div50}>0</div>
                <div className={styles.div51}>0</div>
                <div className={styles.cosed}>Cosed</div>
                <div className={styles.div52}>$14,000,000</div>
                <div className={styles.div53}>$14,000,000</div>
                <div className={styles.div54}>100</div>
                <div className={styles.div55}>0</div>
                <div className={styles.div56}>0</div>
                <div className={styles.closed3}>Closed</div>
                <div className={styles.div57}>$14,000,000</div>
                <div className={styles.div58}>$14,000,000</div>
                <div className={styles.div59}>40</div>
                <div className={styles.div60}>0</div>
                <div className={styles.div61}>0</div>
                <div className={styles.closed4}>Closed</div>
                <div className={styles.div62}>$14,000,000</div>
                <div className={styles.div63}>$14,000,000</div>
                <div className={styles.div64}>35</div>
                <div className={styles.div65}>0</div>
                <div className={styles.div66}>0</div>
                <div className={styles.crestmontCapitalFund}>
                  Crestmont Capital Fund III
                </div>
                <div className={styles.cascadeInfrastructureFund}>
                  Cascade Infrastructure Fund II
                </div>
                <div className={styles.pinecrestFundI}>Pinecrest Fund I</div>
                <div className={styles.redwoodNaturalResource2}>
                  Redwood Natural Resource Fund II
                </div>
                <div className={styles.summitRidgeCredit4}>
                  Summit Ridge Credit Fund
                </div>
                <div
                  className={styles.arrowheadEquity2}
                >{`Arrowhead Equity `}</div>
                <div
                  className={styles.atlasPeakCapital}
                >{`Atlas Peak Capital `}</div>
                <div
                  className={styles.summitRidgeInfrastructure}
                >{`Summit Ridge Infrastructure `}</div>
                <div className={styles.havencrestRealEstate}>
                  Havencrest Real Estate
                </div>
                <img
                  className={styles.groupChild8}
                  alt=""
                  src="/ellipse-92.svg"
                />
                <img
                  className={styles.groupChild9}
                  alt=""
                  src="/ellipse-92.svg"
                />
                <img
                  className={styles.groupChild10}
                  alt=""
                  src="/ellipse-92.svg"
                />
                <img
                  className={styles.groupChild11}
                  alt=""
                  src="/ellipse-93.svg"
                />
                <img
                  className={styles.groupChild12}
                  alt=""
                  src="/ellipse-93.svg"
                />
                <img
                  className={styles.groupChild13}
                  alt=""
                  src="/ellipse-93.svg"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.moreVertFill0Wght400Grad0Icon2}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <b className={styles.myFunds}>My Funds</b>
          <div className={styles.filterButton5}>
            <div className={styles.totalCommitted}>Notifications</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton6}>
            <div className={styles.totalCommitted}>Fund Name</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton7}>
            <div className={styles.totalCommitted}>Alerts</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton8}>
            <div className={styles.totalCommitted}># of Investors</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton9}>
            <div className={styles.totalCommitted}>AUM</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton10}>
            <div className={styles.totalCommitted}>Status</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
          <div className={styles.filterButton11}>
            <div className={styles.totalCommitted}>Capital Committed</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-10.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.fundManagerDashboard1}>Fund Manager Dashboard</div>
      <div className={styles.path457Parent}>
        <img className={styles.path457Icon} alt="" src="/path-457.svg" />
        <div className={styles.keyPerformanceMetricsParent}>
          <b className={styles.keyPerformanceMetrics}>
            Key Performance Metrics
          </b>
          <div className={styles.numberOfFundsParent}>
            <div className={styles.numberOfFunds}>Number of Funds</div>
            <div className={styles.grossIrr}>Gross IRR</div>
            <b className={styles.b}>24.5%</b>
            <b className={styles.b1}>12</b>
            <div className={styles.groupChild14} />
            <div className={styles.groupChild15} />
            <div className={styles.groupChild16} />
          </div>
          <img
            className={styles.moreVertFill0Wght400Grad0Icon2}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.parent}>
            <b className={styles.naturalResourcesCommodities}>$125,175,000</b>
            <div className={styles.privateEquity}>Private Equity ​</div>
            <b className={styles.b3}>$133,250,000</b>
            <div className={styles.hedgeFunds}>Hedge Funds ​</div>
            <b className={styles.b4}>$65,000</b>
            <div className={styles.realEstate}>Real Estate</div>
            <b className={styles.b5}>$250,000</b>
            <div className={styles.infrastructure}>Infrastructure</div>
            <b className={styles.b6}>$760,000</b>
            <b className={styles.b7}>$0</b>
            <div className={styles.privateDebt}>Private Debt ​</div>
            <div className={styles.naturalResourcesCommoditiesContainer}>
              <p className={styles.investorsInVc}>{`Natural Resources `}</p>
              <p className={styles.investorsInVc}>Commodities ​</p>
            </div>
            <img className={styles.colorIcon} alt="" src="/color4.svg" />
          </div>
          <b className={styles.b8}>$554,000,000</b>
          <div className={styles.totalAssetsUnder}>
            Total Assets Under Management
          </div>
          <img
            className={styles.ringChart1Icon}
            alt=""
            src="/ring-chart11.svg"
          />
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild17} />
            <div className={styles.assetsUnderManagement}>
              Assets Under Management
            </div>
            <b className={styles.b9}>$554,000,000</b>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild17} />
            <div className={styles.assetsUnderManagement}>
              Total Capital Committed
            </div>
            <b className={styles.b9}>$275,000,000</b>
          </div>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild17} />
            <div className={styles.assetsUnderManagement}>Total Funded</div>
            <b className={styles.b9}>$138,000,000</b>
          </div>
          <div className={styles.selectboxfilter1}>
            <div className={styles.selectboxbg} />
            <div className={styles.allFunds}>2023</div>
            <img
              className={styles.smallDownIcon}
              alt=""
              src="/smalldown1.svg"
            />
          </div>
          <div className={styles.selectboxfilter2}>
            <div className={styles.selectboxbg} />
            <div className={styles.allFunds}>All Funds</div>
            <img
              className={styles.smallDownIcon}
              alt=""
              src="/smalldown1.svg"
            />
          </div>
          <div className={styles.selectboxfilter3}>
            <div className={styles.selectboxbg} />
            <div className={styles.allFunds}>Select Chart</div>
            <img
              className={styles.smallDownIcon}
              alt=""
              src="/smalldown1.svg"
            />
          </div>
        </div>
        <div className={styles.lineGroup}>
          <div className={styles.groupChild20} />
          <div className={styles.groupChild16} />
          <div className={styles.totalSales}>
            <div className={styles.chart}>
              <div className={styles.value}>
                <div className={styles.div68}>
                  <div className={styles.div69}>0</div>
                </div>
                <div className={styles.div70}>
                  <div className={styles.div69}>200</div>
                </div>
                <div className={styles.div72}>
                  <div className={styles.div69}>400</div>
                </div>
                <div className={styles.div74}>
                  <div className={styles.div69}>600</div>
                </div>
                <div className={styles.div76}>
                  <div className={styles.div69}>800</div>
                </div>
                <div className={styles.k}>
                  <div className={styles.div69}>1000</div>
                </div>
              </div>
              <div className={styles.month}>
                <div className={styles.widgetsElementsChart}>
                  <div className={styles.jan}>Dec</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart1}>
                  <div className={styles.jan1}>Nov</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart2}>
                  <div className={styles.jan2}>Oct</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart3}>
                  <b className={styles.jan}>Sep</b>
                  <img className={styles.shapeIcon} alt="" src="/shape2.svg" />
                </div>
                <div className={styles.widgetsElementsChart4}>
                  <div className={styles.jan4}>Aug</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart5}>
                  <div className={styles.jan5}>Jul</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart6}>
                  <div className={styles.jan2}>Jun</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart7}>
                  <div className={styles.jan7}>May</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart8}>
                  <div className={styles.jan1}>Apr</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart9}>
                  <div className={styles.jan}>Mar</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart10}>
                  <div className={styles.jan2}>Feb</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart11}>
                  <div className={styles.jan11}>Jan</div>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
              </div>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <img className={styles.lineIcon1} alt="" src="/line1.svg" />
              <img className={styles.lineIcon2} alt="" src="/line2.svg" />
              <img className={styles.lineIcon3} alt="" src="/line3.svg" />
              <div className={styles.tooltipPointerDown}>
                <b className={styles.titlee}>September, 2022</b>
                <div className={styles.dataKey}>
                  <div className={styles.data}>
                    <div className={styles.sales} />
                    <div className={styles.div78}>Private Debt</div>
                    <div className={styles.onlineSales}>$1,400,000</div>
                  </div>
                </div>
                <img
                  className={styles.tooltipbgIcon}
                  alt=""
                  src="/tooltipbg10.svg"
                />
              </div>
            </div>
            <div className={styles.title}>Capital Deployment 2023</div>
            <div className={styles.privateEquityParent}>
              <div className={styles.privateEquity1}>Private Equity ​</div>
              <div className={styles.hedgeFunds1}>Hedge Funds ​</div>
              <div className={styles.realEstate1}>Real Estate</div>
              <div className={styles.infrastructure1}>Infrastructure</div>
              <div className={styles.privateDebt1}>Private Debt ​</div>
              <div className={styles.naturalResourcesCommodities}>
                Natural Resources Commodities ​
              </div>
              <img
                className={styles.purpleellipseIcon}
                alt=""
                src="/purpleellipse.svg"
              />
              <img
                className={styles.purpleellipseIcon1}
                alt=""
                src="/purpleellipse1.svg"
              />
              <img
                className={styles.purpleellipseIcon2}
                alt=""
                src="/purpleellipse2.svg"
              />
              <img
                className={styles.yellowellipseIcon}
                alt=""
                src="/yellowellipse.svg"
              />
              <img
                className={styles.redellipseIcon}
                alt=""
                src="/redellipse.svg"
              />
              <img
                className={styles.blueellipseIcon}
                alt=""
                src="/blueellipse.svg"
              />
            </div>
          </div>
          <div className={styles.selectboxfilter4}>
            <div className={styles.selectboxbg4} />
            <div className={styles.allFunds}>2023</div>
            <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
          </div>
          <div className={styles.selectboxfilter5}>
            <div className={styles.selectboxbg} />
            <div className={styles.allFunds}>All Funds</div>
            <img
              className={styles.smallDownIcon}
              alt=""
              src="/smalldown1.svg"
            />
          </div>
        </div>
        <div className={styles.title1}>AUM of All Fund Types</div>
      </div>
      <div className={styles.welcomeBackJonathan}>Welcome Back, Jonathan</div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent1}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.path459Parent}>
            <div className={styles.path459Parent}>
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
        <div className={styles.path459Parent}>
          <div className={styles.path459Parent}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div
              className={styles.leftNavButton}
              onClick={onLeftNavButtonClick}
            >
              <div className={styles.path459Parent} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.path459Parent} />
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
              <div className={styles.div80}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.path459Parent}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.path459Parent}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.path459Parent}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.path459Parent} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.path459Parent} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.leftNavButtonChild3} />
              <div className={styles.path459Parent}>
                <img
                  className={styles.homeFill1Wght400Grad0Opsz4Icon}
                  alt=""
                  src="/home-fill1-wght400-grad0-opsz48.svg"
                />
              </div>
              <div className={styles.leftNavButtonChild4} />
            </div>
            <div
              className={styles.leftNavButton8}
              onClick={onLeftNavButton8Click}
            >
              <div className={styles.path459Parent} />
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
        className={styles.component20927}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default FundManagerDashboard;
