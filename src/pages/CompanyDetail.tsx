import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompanyDetail.module.css";
const CompanyDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onBackArrowButton2Click = useCallback(() => {
    navigate("/fund-detail-portfolio-companies-open");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.companyDetail}>
      <div className={styles.path444Parent}>
        <img className={styles.path444Icon} alt="" src="/path-444.svg" />
        <b className={styles.performanceMetrics}>Performance Metrics</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.currentValuation}>Current Valuation</div>
          <div className={styles.valuationMultiple}>Valuation multiple</div>
          <div className={styles.revenueGrowthRate}>Revenue growth rate</div>
          <div className={styles.ebitdaMargin}>EBITDA margin</div>
          <div className={styles.netIncomeMargin}>Net income margin</div>
          <div className={styles.returnOnEquity}>Return on equity (ROE)​</div>
          <div className={styles.returnOnAssets}>Return on assets (ROA)​</div>
          <b className={styles.b}>—</b>
          <b className={styles.b1}>—</b>
          <b className={styles.b2}>—</b>
          <b className={styles.b3}>—</b>
          <b className={styles.b4}>—</b>
          <b className={styles.b5}>—</b>
        </div>
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.path444Group}>
        <img className={styles.path444Icon1} alt="" src="/path-4441.svg" />
        <b className={styles.overview}>Overview</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineGroup}>
          <div className={styles.groupItem} />
          <div className={styles.groupChild} />
          <div className={styles.groupChild7} />
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.industrysector}>Industry/Sector</div>
          <div className={styles.investmentDate}>Investment Date</div>
          <div className={styles.initialInvestmentAmount}>
            Initial investment amount
          </div>
          <div className={styles.ownershipPercentage}>Ownership percentage</div>
          <div className={styles.investmentStage}>Investment stage</div>
          <div className={styles.returnOnAssets}>Exit status</div>
          <b className={styles.b6}>—</b>
          <b className={styles.b7}>—</b>
          <b className={styles.b8}>—</b>
          <b className={styles.b9}>—</b>
          <b className={styles.b10}>—</b>
          <b className={styles.b11}>—</b>
        </div>
      </div>
      <div className={styles.path444Container}>
        <img className={styles.path444Icon1} alt="" src="/path-4441.svg" />
        <b className={styles.overview}>Investment Performance</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineContainer}>
          <div className={styles.groupChild12} />
          <div className={styles.groupItem} />
          <div className={styles.groupChild7} />
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.industrysector}>Gross IRR</div>
          <div className={styles.investmentDate}>Net IRR​</div>
          <div className={styles.initialInvestmentAmount}>Gross MOIC​</div>
          <div className={styles.ownershipPercentage}>Net MOIC​</div>
          <div className={styles.investmentStage}>
            Total realized gains/losses​
          </div>
          <div className={styles.returnOnAssets}>
            Total unrealized gains/losses​
          </div>
          <b className={styles.b6}>—</b>
          <b className={styles.b7}>—</b>
          <b className={styles.b8}>—</b>
          <b className={styles.b9}>—</b>
          <b className={styles.b10}>—</b>
          <b className={styles.b11}>—</b>
        </div>
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.path444Icon3} alt="" src="/path-4442.svg" />
        <b className={styles.riskAssessment}>Risk Assessment</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineParent1}>
          <div className={styles.groupChild19} />
          <div className={styles.groupChild20} />
          <div className={styles.groupChild21} />
          <div className={styles.groupChild22} />
          <div className={styles.industrysector}>Key Risks and Challenges</div>
          <div className={styles.potentialImpactOn}>
            Potential Impact on Investment Performance
          </div>
          <div className={styles.fundManagersStrategies}>
            Fund Manager’s Strategies
          </div>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi erat, blandit sed tellus vitae, ultricies volutpat ante. Curabitur non risus sed metus tincidunt posuere in ac urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc sit amet tincidunt mauris, eu dictum neque. Nulla commodo ligula et velit convallis posuere. `}</div>
          <div className={styles.nullaFringillaArcu}>
            Nulla fringilla, arcu eu fringilla maximus, velit augue fermentum
            ipsum, et rhoncus elit metus in felis. In eget lectus vel enim
            pretium tempor ut quis metus. Nunc ipsum nulla, imperdiet in
            vestibulum sed, tincidunt eget neque. Cras ex augue, suscipit quis
            vehicula at, commodo pretium erat.
          </div>
          <div className={styles.crasEgetMagna}>
            Cras eget magna sit amet purus pulvinar ullamcorper. Aenean vel
            lorem vel leo laoreet pulvinar sed nec nunc. Nunc ornare rutrum
            mauris, a faucibus elit vulputate et. Vestibulum dictum a augue eu
            facilisis. Etiam auctor congue elit. Quisque eget interdum diam,
            eget tincidunt mi. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.path444Parent1}>
        <img className={styles.path444Icon4} alt="" src="/path-4443.svg" />
        <b className={styles.financialHighlights}>Financial Highlights</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineParent2}>
          <div className={styles.groupChild23} />
          <div className={styles.groupItem} />
          <div className={styles.groupChild25} />
          <div className={styles.groupChild26} />
          <div className={styles.groupChild27} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div
            className={styles.industrysector}
          >{`Latest financial statements `}</div>
          <div className={styles.balanceSheet}>2022 Balance Sheet</div>
          <div className={styles.incomeStatement}>2022 income Statement</div>
          <div className={styles.cashFlowStatement}>
            2022 Cash Flow Statement
          </div>
          <div className={styles.liquidity}>Liquidity</div>
          <div className={styles.solvency}>Solvency</div>
          <div className={styles.profitability}>Profitability</div>
          <div className={styles.efficiency}>Efficiency</div>
          <div className={styles.returnOnAssets}>
            Recent changes in financial position or performance​
          </div>
          <b className={styles.b18}>—</b>
          <b className={styles.b19}>—</b>
          <b className={styles.b20}>—</b>
          <b className={styles.b21}>—</b>
          <b className={styles.b11}>—</b>
          <img
            className={styles.descriptionFill0Wght400GradIcon}
            alt=""
            src="/description-fill0-wght400-grad0-opsz481.svg"
          />
          <img
            className={styles.descriptionFill0Wght400GradIcon1}
            alt=""
            src="/description-fill0-wght400-grad0-opsz481.svg"
          />
          <img
            className={styles.descriptionFill0Wght400GradIcon2}
            alt=""
            src="/description-fill0-wght400-grad0-opsz481.svg"
          />
        </div>
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.path444Parent2}>
        <img className={styles.path444Icon} alt="" src="/path-444.svg" />
        <b className={styles.performanceMetrics}>Operational Updates</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.lineParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.groupChild3} />
          <div className={styles.groupChild4} />
          <div className={styles.currentValuation}>
            Company milestones and achievements​
          </div>
          <div className={styles.valuationMultiple}>
            Recent product launches or expansions​
          </div>
          <div className={styles.revenueGrowthRate}>
            Market trends and competitive landscape​
          </div>
          <div className={styles.ebitdaMargin}>
            Changes in management or governance​
          </div>
          <div className={styles.netIncomeMargin}>ESG Reporting</div>
          <div className={styles.returnOnEquity}>Return on equity (ROE)​</div>
          <div className={styles.returnOnAssets}>Return on assets (ROA)​</div>
          <b className={styles.b}>—</b>
          <b className={styles.b1}>—</b>
          <b className={styles.b2}>—</b>
          <b className={styles.b3}>—</b>
          <b className={styles.b4}>—</b>
          <b className={styles.b5}>—</b>
        </div>
        <div className={styles.selectboxfilter}>
          <div className={styles.selectboxbg} />
          <div className={styles.div}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.companyDetails}>Company Details</div>
      <div className={styles.maskGroup35Parent}>
        <img
          className={styles.maskGroup35}
          alt=""
          src="/mask-group-35@2x.png"
        />
        <div className={styles.portfolioCompany01Parent}>
          <div className={styles.portfolioCompany01}>Portfolio Company 01</div>
          <img
            className={styles.backArrowButton}
            alt=""
            src="/back-arrow-button.svg"
            onClick={onBackArrowButtonClick}
          />
          <div className={styles.iconMetroImagesWrapper}>
            <img
              className={styles.iconMetroImages}
              alt=""
              src="/icon-metroimages.svg"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.maskGroup351}
        alt=""
        src="/mask-group-352@2x.png"
      />
      <div className={styles.heartImpactParent}>
        <div className={styles.heartImpact}>Heart Impact</div>
        <div className={styles.image5Wrapper}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        </div>
        <div className={styles.maskGroup38Wrapper}>
          <img
            className={styles.maskGroup38}
            alt=""
            src="/mask-group-382@2x.png"
          />
        </div>
        <div className={styles.privateHealthcareFund}>
          Private Healthcare Fund III
        </div>
      </div>
      <img
        className={styles.backArrowButton1}
        alt=""
        src="/back-arrow-button.svg"
      />
      <img
        className={styles.backArrowButton2}
        alt=""
        src="/back-arrow-button.svg"
        onClick={onBackArrowButton2Click}
      />
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
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
      <div className={styles.editSaveButton}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.edit}>Edit</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.groupWrapper} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.groupWrapper} />
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
              <div className={styles.div5}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.groupWrapper} />
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
              <div className={styles.groupWrapper} />
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
              <div className={styles.groupWrapper} />
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
        className={styles.component20922}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default CompanyDetail;
