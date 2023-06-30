import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailInvestorRelatio.module.css";
const FundDetailInvestorRelatio: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextButton02Click = useCallback(() => {
    navigate("/investor-profile-overview");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onTabNavButton4Click = useCallback(() => {
    navigate("/fund-detail-services");
  }, [navigate]);

  const onTabNavButton5Click = useCallback(() => {
    navigate("/fund-detail-compliance");
  }, [navigate]);

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onTabNavButton6Click = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onTabNavButton7Click = useCallback(() => {
    navigate("/fund-detail-performance");
  }, [navigate]);

  const onTabNavButton8Click = useCallback(() => {
    navigate("/fund-detail-portfolio-companies");
  }, [navigate]);

  const onTabNavButton10Click = useCallback(() => {
    navigate("/fund-detail-services");
  }, [navigate]);

  const onTabNavButton11Click = useCallback(() => {
    navigate("/fund-detail-compliance");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.fundDetailInvestorRelatio}>
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
        <b className={styles.portfolioUpdateWebinar}>
          Portfolio Update Webinar
        </b>
        <b className={styles.esgWorkshop}>ESG Workshop</b>
        <b className={styles.marketOutlookPresentation}>
          Market Outlook Presentation
        </b>
        <b className={styles.investorNetworkingEvent}>
          Investor Networking Event
        </b>
        <b className={styles.fundLaunchEvent}>Fund Launch Event</b>
        <b className={styles.riskMnagementWorkshopContainer}>
          <p className={styles.riskMnagementWorkshop}>
            Risk Mnagement Workshop
          </p>
        </b>
        <b className={styles.yearEndReview}>Year-End Review</b>
        <b className={styles.annualInvestorMeeting}>Annual Investor Meeting</b>
        <b className={styles.esgWorkshop1}>ESG Workshop</b>
        <b className={styles.portfolioUpdateWebinar1}>
          Portfolio Update Webinar
        </b>
        <b className={styles.annualInvestorMeeting1}>Annual Investor Meeting</b>
        <div className={styles.nexusHealthEqu}>Nexus Health Equ…</div>
        <div className={styles.newYorkNy}>New York, NY</div>
        <div className={styles.crestmontCapital}>Crestmont Capital…</div>
        <div className={styles.onlineWebinar}>Online Webinar</div>
        <div className={styles.pinecrestFundI}>Pinecrest Fund I</div>
        <div className={styles.cascadeInfrastruct}>Cascade Infrastruct…</div>
        <div className={styles.summitRidgeCredi}>Summit Ridge Credi….</div>
        <div className={styles.redwoodNatural}>Redwood Natural….</div>
        <div className={styles.summitRidgeInfr}>Summit Ridge Infr…</div>
        <div className={styles.arrowheadEquity}>{`Arrowhead Equity `}</div>
        <div className={styles.atlasPeakCapital}>{`Atlas Peak Capital `}</div>
        <div className={styles.crestmontCapital1}>Crestmont Capital…</div>
        <div className={styles.pinecrestFundI1}>Pinecrest Fund I</div>
        <div className={styles.sanFranciscoCa}>San Francisco, CA</div>
        <div className={styles.londonUk}>London, UK</div>
        <div className={styles.onlineWebinar1}>Online Webinar</div>
        <div className={styles.bostonMa}>Boston, MA</div>
        <div className={styles.chicagoIl}>Chicago, IL</div>
        <div className={styles.onlineWebinar2}>Online Webinar</div>
        <div className={styles.onlineWebinar3}>Online Webinar</div>
        <div className={styles.newYorkNy1}>New York, NY</div>
        <div className={styles.newYorkNy2}>New York, NY</div>
        <div className={styles.date}>Date</div>
        <div className={styles.fund}>Fund</div>
        <div className={styles.location}>Location</div>
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
          className={styles.eventFill0Wght400Grad0OpszIcon}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon1}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon2}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon3}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon4}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon5}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon6}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon7}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon8}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon9}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.eventFill0Wght400Grad0OpszIcon10}
          alt=""
          src="/event-fill0-wght400-grad0-opsz48.svg"
        />
        <b className={styles.upcomingInvestorMeetings}>
          Upcoming Investor Meetings and Events​
        </b>
      </div>
      <div className={styles.path449Parent}>
        <img className={styles.path449Icon} alt="" src="/path-449.svg" />
        <b className={styles.lpCommunicationAnd}>
          LP Communication and Reporting
        </b>
        <div className={styles.groupChild13} />
        <div className={styles.groupChild14} />
        <div className={styles.groupChild15} />
        <div className={styles.groupChild16} />
        <div className={styles.componeseeMoreButtonnt2541}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <b className={styles.distributionNotice}>Distribution Notice</b>
        <b className={styles.esgReport}>ESG Report</b>
        <b className={styles.taxReporting}>Tax Reporting</b>
        <div className={styles.scheduled}>Scheduled</div>
        <div className={styles.delivered}>Delivered</div>
        <div className={styles.scheduled1}>Scheduled</div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.date1}>Date</div>
        <div className={styles.status}>Status</div>
        <div className={styles.type1}>Type</div>
        <img className={styles.groupChild17} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild18} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild19} alt="" src="/polygon-7.svg" />
        <div className={styles.div12}>03/31/23</div>
        <div className={styles.div13}>03/15/23</div>
        <div className={styles.div14}>03/21/23</div>
        <div className={styles.selectboxfilter1}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.investorRelations}>Investor Relations</div>
      <img className={styles.path450Icon} alt="" src="/path-450.svg" />
      <div className={styles.fundDetailInvestorRelatioChild} />
      <div className={styles.fundDetailInvestorRelatioItem} />
      <div className={styles.fundDetailInvestorRelatioInner} />
      <div className={styles.fundDetailInvestorRelatioChild1} />
      <div className={styles.fundDetailInvestorRelatioChild2} />
      <div className={styles.fundDetailInvestorRelatioChild3} />
      <div className={styles.fundDetailInvestorRelatioChild4} />
      <div className={styles.fundDetailInvestorRelatioChild5} />
      <div className={styles.fundDetailInvestorRelatioChild6} />
      <div className={styles.fundDetailInvestorRelatioChild7} />
      <div className={styles.fundDetailInvestorRelatioChild8} />
      <div className={styles.fundDetailInvestorRelatioChild9} />
      <div className={styles.fundDetailInvestorRelatioChild10} />
      <div className={styles.status1}>Status</div>
      <div className={styles.type2}>Type</div>
      <div className={styles.subscribed}>Subscribed</div>
      <div className={styles.contributed}>Contributed</div>
      <div className={styles.unfunded}>Unfunded</div>
      <div className={styles.nav}>NAV</div>
      <div className={styles.ownership}>Ownership</div>
      <div className={styles.distributions}>Distributions</div>
      <div className={styles.received}>Received</div>
      <div className={styles.investors}>Investors</div>
      <div className={styles.fee}>FEE</div>
      <div className={styles.carry}>Carry</div>
      <div className={styles.update}>Update</div>
      <div className={styles.actions}>Actions</div>
      <img className={styles.colorIcon} alt="" src="/color.svg" />
      <img className={styles.colorIcon1} alt="" src="/color.svg" />
      <img className={styles.colorIcon2} alt="" src="/color.svg" />
      <img className={styles.colorIcon3} alt="" src="/color.svg" />
      <img className={styles.colorIcon4} alt="" src="/color.svg" />
      <img className={styles.colorIcon5} alt="" src="/color.svg" />
      <img className={styles.colorIcon6} alt="" src="/color.svg" />
      <img className={styles.colorIcon7} alt="" src="/color.svg" />
      <img className={styles.colorIcon8} alt="" src="/color.svg" />
      <img className={styles.colorIcon9} alt="" src="/color.svg" />
      <img className={styles.colorIcon10} alt="" src="/color.svg" />
      <img className={styles.colorIcon11} alt="" src="/color.svg" />
      <b className={styles.brandonKim}>Brandon Kim</b>
      <b className={styles.samanthaHernandez}>Samantha Hernandez</b>
      <b className={styles.williamASt}>William A. St. John</b>
      <b className={styles.tylerWong}>Tyler Wong</b>
      <b className={styles.oliviaBrown}>Olivia Brown</b>
      <b className={styles.tylerWong1}>Tyler Wong</b>
      <b className={styles.justinPatel}>Justin Patel</b>
      <b className={styles.chloeDavis}>Chloe Davis</b>
      <b className={styles.andrewNguyen}>Andrew Nguyen</b>
      <b className={styles.madisonThomas}>Madison Thomas</b>
      <b className={styles.calebJohnson}>Caleb Johnson</b>
      <div className={styles.familyOffice}>Family Office</div>
      <div className={styles.familyOffice1}>Family Office</div>
      <div className={styles.familyOffice2}>Family Office</div>
      <div className={styles.familyOffice3}>Family Office</div>
      <div className={styles.familyOffice4}>Family Office</div>
      <div className={styles.familyOffice5}>Family Office</div>
      <div className={styles.familyOffice6}>Family Office</div>
      <div className={styles.familyOffice7}>Family Office</div>
      <div className={styles.familyOffice8}>Family Office</div>
      <div className={styles.familyOffice9}>Family Office</div>
      <div className={styles.familyOffice10}>Family Office</div>
      <div className={styles.familyOffice11}>Family Office</div>
      <div className={styles.mar12023}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120231}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120232}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120233}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120234}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120235}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120236}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120237}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120238}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar120239}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar1202310}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.mar1202311}>
        <p className={styles.riskMnagementWorkshop}>MAR 1,</p>
        <p className={styles.riskMnagementWorkshop}>2023</p>
      </div>
      <div className={styles.signed}>Signed</div>
      <div className={styles.signed1}>Signed</div>
      <div className={styles.signed2}>Signed</div>
      <div className={styles.signed3}>Signed</div>
      <div className={styles.signed4}>Signed</div>
      <div className={styles.signed5}>Signed</div>
      <div className={styles.signed6}>Signed</div>
      <div className={styles.signed7}>Signed</div>
      <div className={styles.signed8}>Signed</div>
      <div className={styles.signed9}>Signed</div>
      <div className={styles.signed10}>Signed</div>
      <div className={styles.signed11}>Signed</div>
      <div className={styles.div16}>20%</div>
      <div className={styles.div17}>20%</div>
      <div className={styles.div18}>20%</div>
      <div className={styles.div19}>20%</div>
      <div className={styles.div20}>20%</div>
      <div className={styles.div21}>20%</div>
      <div className={styles.div22}>20%</div>
      <div className={styles.div23}>20%</div>
      <div className={styles.div24}>20%</div>
      <div className={styles.div25}>20%</div>
      <div className={styles.div26}>20%</div>
      <div className={styles.div27}>20%</div>
      <div className={styles.div28}>2%</div>
      <div className={styles.div29}>2%</div>
      <div className={styles.div30}>2%</div>
      <div className={styles.div31}>2%</div>
      <div className={styles.div32}>2%</div>
      <div className={styles.div33}>2%</div>
      <div className={styles.div34}>2%</div>
      <div className={styles.div35}>2%</div>
      <div className={styles.div36}>2%</div>
      <div className={styles.div37}>2%</div>
      <div className={styles.div38}>2%</div>
      <div className={styles.div39}>2%</div>
      <div className={styles.div40}>2.75%</div>
      <div className={styles.div41}>2.75%</div>
      <div className={styles.div42}>2.75%</div>
      <div className={styles.div43}>2.75%</div>
      <div className={styles.div44}>2.75%</div>
      <div className={styles.div45}>2.75%</div>
      <div className={styles.div46}>2.75%</div>
      <div className={styles.div47}>2.75%</div>
      <div className={styles.div48}>2.75%</div>
      <div className={styles.div49}>2.75%</div>
      <div className={styles.div50}>2.75%</div>
      <div className={styles.div51}>2.75%</div>
      <div className={styles.o0}>$0.o0</div>
      <div className={styles.o01}>$0.o0</div>
      <div className={styles.o02}>$0.o0</div>
      <div className={styles.o03}>$0.o0</div>
      <div className={styles.o04}>$0.o0</div>
      <div className={styles.o05}>$0.o0</div>
      <div className={styles.o06}>$0.o0</div>
      <div className={styles.o07}>$0.o0</div>
      <div className={styles.o08}>$0.o0</div>
      <div className={styles.o09}>$0.o0</div>
      <div className={styles.o010}>$0.o0</div>
      <div className={styles.o011}>$0.o0</div>
      <div className={styles.div52}>$0.00</div>
      <div className={styles.div53}>$0.00</div>
      <div className={styles.div54}>$0.00</div>
      <div className={styles.div55}>$0.00</div>
      <div className={styles.div56}>$0.00</div>
      <div className={styles.div57}>$0.00</div>
      <div className={styles.div58}>$0.00</div>
      <div className={styles.div59}>$0.00</div>
      <div className={styles.div60}>$0.00</div>
      <div className={styles.div61}>$0.00</div>
      <div className={styles.div62}>$0.00</div>
      <div className={styles.div63}>$0.00</div>
      <div className={styles.div64}>$0.00</div>
      <div className={styles.div65}>$0.00</div>
      <div className={styles.div66}>$0.00</div>
      <div className={styles.div67}>$0.00</div>
      <div className={styles.div68}>$0.00</div>
      <div className={styles.div69}>$0.00</div>
      <div className={styles.div70}>$0.00</div>
      <div className={styles.div71}>$0.00</div>
      <div className={styles.div72}>$0.00</div>
      <div className={styles.div73}>$0.00</div>
      <div className={styles.div74}>$0.00</div>
      <div className={styles.div75}>$0.00</div>
      <div className={styles.o012}>$192,474.o0</div>
      <div className={styles.o013}>$192,474.o0</div>
      <div className={styles.o014}>$192,474.o0</div>
      <div className={styles.o015}>$192,474.o0</div>
      <div className={styles.o016}>$192,474.o0</div>
      <div className={styles.o017}>$192,474.o0</div>
      <div className={styles.o018}>$192,474.o0</div>
      <div className={styles.o019}>$192,474.o0</div>
      <div className={styles.o020}>$192,474.o0</div>
      <div className={styles.o021}>$192,474.o0</div>
      <div className={styles.o022}>$192,474.o0</div>
      <div className={styles.o023}>$192,474.o0</div>
      <div className={styles.o024}>$215,000.o0</div>
      <div className={styles.o025}>$215,000.o0</div>
      <div className={styles.o026}>$215,000.o0</div>
      <div className={styles.o027}>$215,000.o0</div>
      <div className={styles.o028}>$215,000.o0</div>
      <div className={styles.o029}>$215,000.o0</div>
      <div className={styles.o030}>$215,000.o0</div>
      <div className={styles.o031}>$215,000.o0</div>
      <div className={styles.o032}>$215,000.o0</div>
      <div className={styles.o033}>$215,000.o0</div>
      <div className={styles.o034}>$215,000.o0</div>
      <div className={styles.o035}>$215,000.o0</div>
      <div className={styles.div76}>$22,575</div>
      <div className={styles.div77}>$22,575</div>
      <div className={styles.div78}>$22,575</div>
      <div className={styles.div79}>$22,575</div>
      <div className={styles.div80}>$22,575</div>
      <div className={styles.div81}>$22,575</div>
      <div className={styles.div82}>$22,575</div>
      <div className={styles.div83}>$22,575</div>
      <div className={styles.div84}>$22,575</div>
      <div className={styles.div85}>$22,575</div>
      <div className={styles.div86}>$22,575</div>
      <div className={styles.div87}>$22,575</div>
      <b className={styles.investors1}>Investors</b>
      <div className={styles.textButton02} onClick={onTextButton02Click}>
        <b className={styles.thomasSmith}>Thomas Smith</b>
      </div>
      <div className={styles.path449Group}>
        <img className={styles.path449Icon} alt="" src="/path-449.svg" />
        <b className={styles.lpCommunicationAnd}>Fundraising Status</b>
        <div className={styles.groupChild13} />
        <div className={styles.groupChild14} />
        <div className={styles.groupChild15} />
        <div className={styles.groupChild16} />
        <div className={styles.componeseeMoreButtonnt2541}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
        <b className={styles.distributionNotice}>Final Close</b>
        <b className={styles.esgReport}>Fund Extension</b>
        <b className={styles.taxReporting}>
          <p className={styles.riskMnagementWorkshop}>Subsequent Closes</p>
        </b>
        <div className={styles.scheduled}>Scheduled</div>
        <div className={styles.delivered}>Delivered</div>
        <div className={styles.scheduled1}>Scheduled</div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.date1}>Date</div>
        <div className={styles.status}>Status</div>
        <div className={styles.type1}>Type</div>
        <img className={styles.groupChild17} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild18} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild19} alt="" src="/polygon-7.svg" />
        <div className={styles.div12}>03/31/23</div>
        <div className={styles.div13}>03/15/23</div>
        <div className={styles.div14}>03/21/23</div>
        <div className={styles.selectboxfilter1}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <img
        className={styles.moreVertFill0Wght400Grad0Icon3}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon4}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon5}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon6}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon7}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon8}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon9}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon10}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon11}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon12}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon13}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <img
        className={styles.moreVertFill0Wght400Grad0Icon14}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
      <div className={styles.groupDiv}>
        <div className={styles.maskGroup35Parent}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.privateHealthcareFundIiiParent}>
            <div className={styles.privateHealthcareFundContainer}>
              <p
                className={styles.riskMnagementWorkshop}
              >{`Private Healthcare `}</p>
              <p className={styles.riskMnagementWorkshop}>Fund III</p>
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
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild27} />
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
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild28} />
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
          <div className={styles.tabNavButtonChild1} />
          <div className={styles.investors2}>Investors</div>
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
      <div className={styles.fundDetailInvestorRelatioChild11} />
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
      <div className={styles.rectangleParent1}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupChild27} />
        <div className={styles.tabNavButton6} onClick={onTabNavButton6Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabNavButton7} onClick={onTabNavButton7Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild28} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton8} onClick={onTabNavButton8Click}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonChild1} />
          <div className={styles.investors2}>Investors</div>
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
      <img
        className={styles.component2096}
        alt=""
        src="/component-209--47.svg"
      />
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
      <img
        className={styles.moreVertFill0Wght400Grad0Icon15}
        alt=""
        src="/more-vert-fill0-wght400-grad0-opsz48.svg"
      />
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
              <div className={styles.div92}>4</div>
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
    </div>
  );
};

export default FundDetailInvestorRelatio;
