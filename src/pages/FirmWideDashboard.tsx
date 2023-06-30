import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirmWideDashboard.module.css";
const FirmWideDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNexusHealthEquityClick = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onThomasSmithTextClick = useCallback(() => {
    navigate("/investor-profile-overview");
  }, [navigate]);

  const onLeftNavButtonClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  return (
    <div className={styles.firmWideDashboard}>
      <div className={styles.welcomeBackVenture}>
        Welcome Back, Venture Partners
      </div>
      <div className={styles.firmWideDashboard1}>Firm-wide Dashboard</div>
      <div className={styles.firmWideDashboardChild} />
      <div className={styles.firmWideDashboardInner}>
        <div className={styles.path446Parent}>
          <img className={styles.path446Icon} alt="" src="/path-446.svg" />
          <b className={styles.allFunds}>All Funds</b>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <img
            className={styles.moreVertFill0Wght400Grad0Icon}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.committed}>{`Committed `}</div>
          <div className={styles.fundeded}>Fundeded</div>
          <div className={styles.irr}>IRR</div>
          <div className={styles.status}>Status</div>
          <div className={styles.portfolioCompanies}>
            <p className={styles.portfolio}>Portfolio</p>
            <p className={styles.portfolio}>Companies</p>
          </div>
          <div className={styles.fundManager}>
            <p className={styles.portfolio}>Fund</p>
            <p className={styles.portfolio}>Manager</p>
          </div>
          <div className={styles.fundName}>Fund Name</div>
          <img className={styles.groupInner} alt="" src="/polygon-7.svg" />
          <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild1} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild2} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild3} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild4} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild5} alt="" src="/polygon-7.svg" />
          <div className={styles.scrollGroup11}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild6} />
              <div className={styles.groupChild7} />
              <div className={styles.groupChild8} />
              <div className={styles.groupChild9} />
              <div
                className={styles.nexusHealthEquity}
                onClick={onNexusHealthEquityClick}
              >
                Nexus Health Equity Fund
              </div>
              <div className={styles.open}>Open</div>
              <div className={styles.div}>$120,000,000</div>
              <div className={styles.div1}>$89,000,000</div>
              <div className={styles.div2}>16.6%</div>
              <div className={styles.maxPower}>Max Power</div>
              <div className={styles.div3}>12</div>
              <div className={styles.closed}>Closed</div>
              <div className={styles.div4}>$120,000,000</div>
              <div className={styles.div5}>$89,000,000</div>
              <div className={styles.div6}>16.6%</div>
              <div className={styles.hollyGoightly}>Holly Goightly</div>
              <div className={styles.div7}>8</div>
              <div className={styles.closed1}>Closed</div>
              <div className={styles.div8}>$120,000,000</div>
              <div className={styles.div9}>$89,000,000</div>
              <div className={styles.div10}>16.6%</div>
              <div className={styles.charlotteWong}>Charlotte Wong</div>
              <div className={styles.div11}>10</div>
              <div className={styles.open1}>Open</div>
              <div className={styles.div12}>$120,000,000</div>
              <div className={styles.div13}>$89,000,000</div>
              <div className={styles.div14}>16.6%</div>
              <div className={styles.benjaminChen}>Benjamin Chen</div>
              <div className={styles.div15}>14</div>
              <div className={styles.open2}>Open</div>
              <div className={styles.div16}>$120,000,000</div>
              <div className={styles.div17}>$89,000,000</div>
              <div className={styles.div18}>16.6%</div>
              <div className={styles.miaSingh}>Mia Singh</div>
              <div className={styles.div19}>10</div>
              <div className={styles.closed2}>Closed</div>
              <div className={styles.div20}>$120,000,000</div>
              <div className={styles.div21}>$89,000,000</div>
              <div className={styles.div22}>16.6%</div>
              <div className={styles.williamGupta}>William Gupta</div>
              <div className={styles.div23}>6</div>
              <div className={styles.closed3}>Closed</div>
              <div className={styles.div24}>$120,000,000</div>
              <div className={styles.div25}>$89,000,000</div>
              <div className={styles.div26}>16.6%</div>
              <div className={styles.zoeHernandez}>Zoe Hernandez</div>
              <div className={styles.div27}>8</div>
              <div className={styles.cosed}>Cosed</div>
              <div className={styles.div28}>$120,000,000</div>
              <div className={styles.div29}>$89,000,000</div>
              <div className={styles.div30}>16.6%</div>
              <div className={styles.liamNguyen}>Liam Nguyen</div>
              <div className={styles.div31}>12</div>
              <div className={styles.closed4}>Closed</div>
              <div className={styles.div32}>$120,000,000</div>
              <div className={styles.div33}>$89,000,000</div>
              <div className={styles.div34}>16.6%</div>
              <div className={styles.sophiaKim}>Sophia Kim</div>
              <div className={styles.div35}>14</div>
              <div className={styles.closed5}>Closed</div>
              <div className={styles.div36}>$120,000,000</div>
              <div className={styles.div37}>$89,000,000</div>
              <div className={styles.div38}>16.6%</div>
              <div className={styles.ethanLee}>Ethan Lee</div>
              <div className={styles.div39}>5</div>
              <div className={styles.groupChild10} />
              <div className={styles.crestmontCapitalFund}>
                Crestmont Capital Fund III
              </div>
              <div className={styles.cascadeInfrastructureFund}>
                Cascade Infrastructure Fund II
              </div>
              <div className={styles.pinecrestFundI}>Pinecrest Fund I</div>
              <div className={styles.redwoodNaturalResource}>
                Redwood Natural Resource…
              </div>
              <div className={styles.summitRidgeCredit}>
                Summit Ridge Credit Fund
              </div>
              <div
                className={styles.arrowheadEquity}
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
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.path446Parent}>
          <img className={styles.path446Icon} alt="" src="/path-446.svg" />
          <b className={styles.allFunds}>All Investors</b>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <img
            className={styles.moreVertFill0Wght400Grad0Icon}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.irr1}>IRR</div>
          <div className={styles.status}>AUM</div>
          <div className={styles.ofFunds}># of Funds</div>
          <div className={styles.fundName}>Investor Name</div>
          <img className={styles.groupChild12} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild13} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild14} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild15} alt="" src="/polygon-7.svg" />
          <div className={styles.scrollGroup11}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild6} />
              <div className={styles.groupChild7} />
              <div className={styles.groupChild8} />
              <div className={styles.groupChild9} />
              <div
                className={styles.nexusHealthEquity}
                onClick={onThomasSmithTextClick}
              >
                Thomas Smith
              </div>
              <div className={styles.open}>$12,000,000</div>
              <div className={styles.div41}>$6,000,000</div>
              <div className={styles.div1}>$2,500,000</div>
              <div className={styles.div43}>16.6%</div>
              <div className={styles.div44}>12</div>
              <div className={styles.maxPower1}>Max Power</div>
              <div className={styles.closed}>$800,000</div>
              <div className={styles.div46}>$6,000,000</div>
              <div className={styles.div5}>$2,500,000</div>
              <div className={styles.div48}>16.6%</div>
              <div className={styles.div49}>4</div>
              <div className={styles.hollyGoightly1}>Holly Goightly</div>
              <div className={styles.closed1}>$4,000,000</div>
              <div className={styles.div51}>$6,000,000</div>
              <div className={styles.div9}>$2,500,000</div>
              <div className={styles.div53}>16.6%</div>
              <div className={styles.div54}>8</div>
              <div className={styles.charlotteWong1}>Charlotte Wong</div>
              <div className={styles.open1}>$1,2000,000</div>
              <div className={styles.div56}>$6,000,000</div>
              <div className={styles.div13}>$2,500,000</div>
              <div className={styles.div58}>16.6%</div>
              <div className={styles.div59}>10</div>
              <div className={styles.benjaminChen1}>Benjamin Chen</div>
              <div className={styles.open2}>$500,000</div>
              <div className={styles.div61}>$6,000,000</div>
              <div className={styles.div17}>$2,500,000</div>
              <div className={styles.div63}>16.6%</div>
              <div className={styles.div64}>8</div>
              <div className={styles.miaSingh1}>Mia Singh</div>
              <div className={styles.closed2}>$250,000</div>
              <div className={styles.div66}>$6,000,000</div>
              <div className={styles.div21}>$2,500,000</div>
              <div className={styles.div68}>16.6%</div>
              <div className={styles.div69}>12</div>
              <div className={styles.williamGupta1}>William Gupta</div>
              <div className={styles.closed3}>$1,500,000</div>
              <div className={styles.div71}>$6,000,000</div>
              <div className={styles.div25}>$2,500,000</div>
              <div className={styles.div73}>16.6%</div>
              <div className={styles.div74}>4</div>
              <div className={styles.zoeHernandez1}>Zoe Hernandez</div>
              <div className={styles.cosed}>$14,000,000</div>
              <div className={styles.div76}>$6,000,000</div>
              <div className={styles.div29}>$2,500,000</div>
              <div className={styles.div78}>16.6%</div>
              <div className={styles.div79}>6</div>
              <div className={styles.liamNguyen1}>Liam Nguyen</div>
              <div className={styles.closed4}>$9,000,000</div>
              <div className={styles.div81}>$6,000,000</div>
              <div className={styles.div33}>$2,500,000</div>
              <div className={styles.div83}>16.6%</div>
              <div className={styles.div84}>10</div>
              <div className={styles.sophiaKim1}>Sophia Kim</div>
              <div className={styles.closed5}>$3,000,000</div>
              <div className={styles.div86}>$6,000,000</div>
              <div className={styles.div37}>$2,500,000</div>
              <div className={styles.div88}>16.6%</div>
              <div className={styles.div89}>12</div>
              <div className={styles.ethanLee1}>Ethan Lee</div>
              <div className={styles.crestmontCapitalFund}>Jacob Patel</div>
              <div className={styles.cascadeInfrastructureFund}>Emily Chen</div>
              <div className={styles.pinecrestFundI}>William Kim</div>
              <div className={styles.redwoodNaturalResource}>Olivia Singh</div>
              <div className={styles.summitRidgeCredit}>Ethan Wong</div>
              <div className={styles.arrowheadEquity}>Zoe Rodriguez</div>
              <div className={styles.atlasPeakCapital}>Michael Gupta</div>
              <div className={styles.groupChild10} />
              <div className={styles.summitRidgeInfrastructure}>
                Benjamin Nguyen
              </div>
              <div className={styles.havencrestRealEstate}>Ava Hernandez</div>
            </div>
          </div>
          <div className={styles.committed}>{`Committed `}</div>
          <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
          <div className={styles.fundeded}>Fundeded</div>
          <img className={styles.groupChild1} alt="" src="/polygon-7.svg" />
        </div>
        <div className={styles.fundManager1}>
          <p className={styles.portfolio}>Fund</p>
          <p className={styles.portfolio}>Manager</p>
        </div>
        <img className={styles.groupChild24} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.path446Parent}>
          <img className={styles.path446Icon} alt="" src="/path-446.svg" />
          <b className={styles.allFundManagers}>All Fund Managers</b>
          <div className={styles.groupChild25} />
          <div className={styles.groupChild26} />
          <img
            className={styles.moreVertFill0Wght400Grad0Icon2}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.managerName}>Manager Name</div>
          <img className={styles.groupChild27} alt="" src="/polygon-7.svg" />
          <div className={styles.scrollGroup112}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.groupChild6} />
              <div className={styles.groupChild7} />
              <div className={styles.groupChild8} />
              <div className={styles.groupChild9} />
              <div className={styles.alexanderChang}>Alexander Chang</div>
              <div className={styles.crestmontCapitalFund}>Olivia Patel</div>
              <div className={styles.cascadeInfrastructureFund}>Ethan Lee</div>
              <div className={styles.pinecrestFundI}>Sophia Kim</div>
              <div className={styles.redwoodNaturalResource}>Liam Nguyen</div>
              <div className={styles.summitRidgeCredit}>Zoe Hernandez</div>
              <div className={styles.arrowheadEquity}>William Gupta</div>
              <div className={styles.atlasPeakCapital}>Mia Singh</div>
              <div className={styles.groupChild10} />
              <div className={styles.summitRidgeInfrastructure}>
                Charlotte Wong
              </div>
              <div className={styles.havencrestRealEstate}>Benjamin Chen</div>
              <div className={styles.parent}>
                <div className={styles.div90}>12</div>
                <div className={styles.div91}>4</div>
                <div className={styles.div92}>8</div>
                <div className={styles.div93}>10</div>
                <div className={styles.div94}>8</div>
                <div className={styles.div95}>12</div>
                <div className={styles.div96}>4</div>
                <div className={styles.div97}>6</div>
                <div className={styles.div98}>10</div>
                <div className={styles.div99}>12</div>
              </div>
              <div className={styles.open}>$12,000,000</div>
              <div className={styles.closed}>$800,000</div>
              <div className={styles.closed1}>$4,000,000</div>
              <div className={styles.open1}>$1,2000,000</div>
              <div className={styles.open2}>$500,000</div>
              <div className={styles.closed2}>$250,000</div>
              <div className={styles.closed3}>$1,500,000</div>
              <div className={styles.cosed}>$14,000,000</div>
              <div className={styles.closed4}>$9,000,000</div>
              <div className={styles.closed5}>$3,000,000</div>
            </div>
            <div className={styles.group}>
              <div className={styles.div110}>16.6%</div>
              <div className={styles.div111}>16.6%</div>
              <div className={styles.div112}>16.6%</div>
              <div className={styles.div113}>16.6%</div>
              <div className={styles.div114}>16.6%</div>
              <div className={styles.div115}>16.6%</div>
              <div className={styles.div116}>16.6%</div>
              <div className={styles.div117}>16.6%</div>
              <div className={styles.div118}>16.6%</div>
              <div className={styles.div119}>16.6%</div>
            </div>
            <div className={styles.div120}>$6,000,000</div>
            <div className={styles.div121}>$6,000,000</div>
            <div className={styles.div122}>$6,000,000</div>
            <div className={styles.div123}>$6,000,000</div>
            <div className={styles.div124}>$6,000,000</div>
            <div className={styles.div125}>$6,000,000</div>
            <div className={styles.div126}>$6,000,000</div>
            <div className={styles.div127}>$6,000,000</div>
            <div className={styles.div128}>$6,000,000</div>
            <div className={styles.div129}>$6,000,000</div>
            <div className={styles.div130}>$2,500,000</div>
            <div className={styles.div131}>$2,500,000</div>
            <div className={styles.div132}>$2,500,000</div>
            <div className={styles.div133}>$2,500,000</div>
            <div className={styles.div134}>$2,500,000</div>
            <div className={styles.div135}>$2,500,000</div>
            <div className={styles.div136}>$2,500,000</div>
            <div className={styles.div137}>$2,500,000</div>
            <div className={styles.div138}>$2,500,000</div>
            <div className={styles.div139}>$2,500,000</div>
          </div>
          <div className={styles.ofFunds1}># of Funds</div>
          <div className={styles.aum1}>AUM</div>
          <img className={styles.groupChild34} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild35} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild36} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild37} alt="" src="/polygon-7.svg" />
          <img className={styles.groupChild38} alt="" src="/polygon-7.svg" />
          <div className={styles.fundeded2}>Fundeded</div>
          <div className={styles.committed2}>{`Committed `}</div>
          <div className={styles.irr2}>IRR</div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupIcon} alt="" src="/group-17543.svg" />
        <div className={styles.firmPerformanceParent}>
          <b className={styles.firmPerformance}>Firm Performance</b>
          <img
            className={styles.moreVertFill0Wght400Grad0Icon3}
            alt=""
            src="/more-vert-fill0-wght400-grad0-opsz48.svg"
          />
          <div className={styles.container}>
            <b className={styles.b}>$125,175,000</b>
            <div className={styles.privateEquity}>Private Equity ​</div>
            <b className={styles.b1}>$133,250,000</b>
            <div className={styles.hedgeFunds}>Hedge Funds ​</div>
            <b className={styles.b2}>$65,000</b>
            <div className={styles.realEstate}>Real Estate</div>
            <b className={styles.b3}>$250,000</b>
            <div className={styles.infrastructure}>Infrastructure</div>
            <b className={styles.b4}>$760,000</b>
            <b className={styles.b5}>$0</b>
            <div className={styles.privateDebt}>Private Debt ​</div>
            <div className={styles.naturalResourcesCommoditiesContainer}>
              <p className={styles.portfolio}>{`Natural Resources `}</p>
              <p className={styles.portfolio}>Commodities ​</p>
            </div>
            <img className={styles.colorIcon} alt="" src="/color3.svg" />
          </div>
          <b className={styles.b6}>$6,454,000,000</b>
          <div className={styles.totalAssetsUnder}>
            Total Assets Under Management
          </div>
          <img
            className={styles.ringChart1Icon}
            alt=""
            src="/ring-chart1.svg"
          />
          <div className={styles.selectboxfilter}>
            <div className={styles.selectboxbg} />
            <div className={styles.selectGraph}>2023</div>
            <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
          </div>
          <div className={styles.selectboxfilter1}>
            <div className={styles.selectboxbg} />
            <div className={styles.selectGraph}>Select Graph</div>
            <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
          </div>
        </div>
      </div>
      <div className={styles.firmWideDashboardItem} />
      <div className={styles.firmWideDashboardChild1} />
      <div className={styles.firmWideDashboardChild2} />
      <div className={styles.totalNumberOf}>Total Number of Funds</div>
      <div className={styles.totalCommitted}>Total Committed</div>
      <div className={styles.totalFunded}>Total Funded</div>
      <div className={styles.grossIrr}>Gross IRR</div>
      <b className={styles.b7}>234</b>
      <b className={styles.b8}>$1,945,720,540.00</b>
      <b className={styles.b9}>$2,450,679,045.00</b>
      <b className={styles.b10}>24.5%</b>
      <div className={styles.navbarbgParent}>
        <img className={styles.groupIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent1}>
          <img className={styles.groupChild39} alt="" src="/group-330.svg" />
          <div className={styles.path446Parent}>
            <div className={styles.path446Parent}>
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
        <div className={styles.path446Parent}>
          <div className={styles.path446Parent}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div
              className={styles.leftNavButton}
              onClick={onLeftNavButtonClick}
            >
              <div className={styles.path446Parent} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.path446Parent} />
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
              <div className={styles.div141}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.path446Parent}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.path446Parent}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.path446Parent}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.path446Parent} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.path446Parent} />
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
              <div className={styles.path446Parent} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavButton8}>
              <div className={styles.leftNavButtonChild4} />
              <div className={styles.path446Parent} />
              <div className={styles.leftNavButtonChild6} />
              <img
                className={styles.domainFill0Wght400Grad0OpsIcon}
                alt=""
                src="/domain-fill0-wght400-grad0-opsz48-11.svg"
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
      <div className={styles.v1}>V</div>
      <img
        className={styles.component20913}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default FirmWideDashboard;
