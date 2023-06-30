import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DistributionsDetail16.module.css";
const DistributionsDetail16: FunctionComponent = () => {
  const navigate = useNavigate();

  const onComponent21239Click = useCallback(() => {
    navigate("/distributions-detail-1-1");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/distributions-detail-1-5");
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
    <div className={styles.distributionsDetail16}>
      <div className={styles.component21239} onClick={onComponent21239Click}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.executeDistribution}>Execute Distribution</div>
          <img
            className={styles.iconMaterialSend}
            alt=""
            src="/icon-materialsend.svg"
          />
        </div>
      </div>
      <div className={styles.buttonNormal1}>
        <div className={styles.buttonNormalItem} />
        <div className={styles.addDistribution}>{`Add Distribution `}</div>
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div className={styles.distributionsDetail16Child} />
      <div className={styles.distributionsDetail16Item} />
      <div className={styles.distributionsDetail16Inner} />
      <div className={styles.lineDiv} />
      <div className={styles.distributionsDetail16Child1} />
      <div className={styles.rectangleDiv} />
      <div className={styles.jun2023}>Jun. 2023</div>
      <b className={styles.b}>$1,500,000</b>
      <b className={styles.pending}>Pending</b>
      <b className={styles.returnOfCapital}>Return of Capital</b>
      <b className={styles.b1}>20</b>
      <div className={styles.distributionsDetail16Child2} />
      <div className={styles.mar2023}>Mar, 2023</div>
      <b className={styles.b2}>$2,000,000</b>
      <b className={styles.closed}>Closed</b>
      <b className={styles.realizedGains}>Realized Gains</b>
      <b className={styles.b3}>20</b>
      <div className={styles.distributionsDetail16Child3} />
      <div className={styles.jun2022}>Jun. 2022</div>
      <b className={styles.b4}>$6,000,000</b>
      <b className={styles.closed1}>Closed</b>
      <b className={styles.dividend}>Dividend</b>
      <b className={styles.b5}>20</b>
      <div className={styles.distributionsDetail16Child4} />
      <div className={styles.mar2022}>Mar, 2022</div>
      <b className={styles.b6}>$2,000,000</b>
      <b className={styles.closed2}>Closed</b>
      <b className={styles.dividend1}>Dividend</b>
      <b className={styles.b7}>20</b>
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
      <img className={styles.path450Icon} alt="" src="/path-4502.svg" />
      <div className={styles.typeGroup}>
        <div className={styles.subscribed}>Type</div>
        <img className={styles.groupChild2} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.label}>
        <div className={styles.distributionDate}>Distribution Date</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>July 12, 2023</div>
      </div>
      <div className={styles.label1}>
        <div className={styles.distributionDate}>Payment Date</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>August 1, 2023</div>
      </div>
      <div className={styles.label2}>
        <div className={styles.distributionDate}>Payment Method</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>Wire Transfer</div>
        <img className={styles.labelChild} alt="" src="/polygon-59.svg" />
      </div>
      <div className={styles.label3}>
        <div className={styles.distributionDate}>Distribution Number/ID​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>100000495-002</div>
      </div>
      <div className={styles.label4}>
        <div className={styles.distributionDate}>{`Distribution Source `}</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>Portfolio Income</div>
        <img className={styles.labelItem} alt="" src="/polygon-59.svg" />
      </div>
      <div className={styles.label5}>
        <div className={styles.distributionDate}>Distribution Type</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>Realized Gaines</div>
        <img className={styles.labelItem} alt="" src="/polygon-59.svg" />
      </div>
      <div className={styles.label6}>
        <div className={styles.distributionDate}>Currency​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>USD</div>
        <img className={styles.labelChild1} alt="" src="/polygon-59.svg" />
      </div>
      <div className={styles.label7}>
        <div
          className={styles.distributionDate}
        >{`Status of the Distribution `}</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.wireTransfer}>Draft</div>
        <img className={styles.labelItem} alt="" src="/polygon-59.svg" />
      </div>
      <div className={styles.editSaveButton}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.save}>Save</div>
        <img
          className={styles.saveFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/save-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.deleteParent} onClick={onGroupContainer7Click}>
        <div className={styles.delete}>Delete</div>
        <img
          className={styles.deleteFill0Wght400Grad0OpsIcon}
          alt=""
          src="/delete-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.distributionsDetail16Child5} />
      <div className={styles.distributionsDetail16Child6} />
      <div className={styles.totalDistributionAmount}>
        Total Distribution Amount
      </div>
      <div className={styles.navBeforeDistribution}>
        NAV Before Distribution
      </div>
      <b className={styles.b8}>$1,500,000</b>
      <b className={styles.b9}>$7,850,000</b>
      <div className={styles.distributionsDetail16Child7} />
      <div className={styles.distributionsDetail16Child8} />
      <div className={styles.distributionsDetail16Child9} />
      <div className={styles.distributionsDetail16Child10} />
      <div className={styles.distributionsDetail16Child11} />
      <div className={styles.distributionsDetail16Child12} />
      <img className={styles.colorIcon} alt="" src="/color1.svg" />
      <img className={styles.colorIcon1} alt="" src="/color2.svg" />
      <img className={styles.colorIcon2} alt="" src="/color1.svg" />
      <img className={styles.colorIcon3} alt="" src="/color1.svg" />
      <img className={styles.colorIcon4} alt="" src="/color1.svg" />
      <img className={styles.colorIcon5} alt="" src="/color1.svg" />
      <b className={styles.thomasSmith}>Thomas Smith</b>
      <div className={styles.textButton02}>
        <b className={styles.samanthaChen}>Samantha Chen</b>
      </div>
      <b className={styles.marcusJohnsonTrust}>
        <p className={styles.marcusJohnson}>Marcus Johnson</p>
        <p className={styles.marcusJohnson}>Trust</p>
      </b>
      <b className={styles.davidRodriguez}>David Rodriguez</b>
      <b className={styles.sarahPatel}>Sarah Patel</b>
      <div className={styles.individual}>Individual</div>
      <div className={styles.individual1}>Individual</div>
      <div className={styles.trust1}>Trust</div>
      <div className={styles.individual2}>Individual</div>
      <div className={styles.individual3}>Individual</div>
      <div className={styles.div1}>—</div>
      <div className={styles.div2}>—</div>
      <div className={styles.div3}>—</div>
      <div className={styles.div4}>—</div>
      <div className={styles.div5}>—</div>
      <div className={styles.div6}>2.75%</div>
      <div className={styles.div7}>2.75%</div>
      <div className={styles.div8}>2.75%</div>
      <div className={styles.div9}>2.75%</div>
      <div className={styles.div10}>2.75%</div>
      <div className={styles.div11}>$215,000</div>
      <div className={styles.div12}>$50,000</div>
      <div className={styles.div13}>$15,000</div>
      <div className={styles.div14}>$15,000</div>
      <div className={styles.div15}>$15,000</div>
      <div className={styles.div16}>$15,000</div>
      <div className={styles.div17}>$150,000</div>
      <div className={styles.o0}>$215,000.o0</div>
      <div className={styles.o01}>$215,000.o0</div>
      <div className={styles.o02}>$215,000.o0</div>
      <div className={styles.div18}>$22,575</div>
      <div className={styles.div19}>$22,575</div>
      <div className={styles.div20}>$22,575</div>
      <div className={styles.div21}>$22,575</div>
      <div className={styles.div22}>$22,575</div>
      <div className={styles.investorsParent}>
        <div className={styles.investors}>Investors</div>
        <img className={styles.groupChild3} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.subscribedParent}>
        <div className={styles.subscribed}>Subscribed</div>
        <img className={styles.groupChild4} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.ytdDistributionAmountParent}>
        <div className={styles.ytdDistributionAmountContainer}>
          <p className={styles.marcusJohnson}>YTD</p>
          <p className={styles.marcusJohnson}>Distribution Amount</p>
        </div>
        <img className={styles.groupChild5} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.parent}>
        <div className={styles.div23}>$50,000</div>
        <div className={styles.div24}>50,000</div>
        <div className={styles.o03}>$192,474.o0</div>
        <div className={styles.o04}>$192,474.o0</div>
        <div className={styles.o05}>$192,474.o0</div>
        <div className={styles.contributedParent}>
          <div className={styles.contributed}>Contributed</div>
          <img className={styles.groupChild3} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.ownershipParent}>
        <div className={styles.subscribed}>Ownership</div>
        <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.currentDistributionAmountParent}>
        <div className={styles.currentDistributionAmountContainer}>
          <p className={styles.marcusJohnson}>{`Current `}</p>
          <p className={styles.marcusJohnson}>Distribution Amount</p>
        </div>
        <img className={styles.groupChild8} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.statusGroup}>
        <div className={styles.status1}>Status</div>
        <img className={styles.groupChild3} alt="" src="/polygon-7.svg" />
      </div>
      <img
        className={styles.distributionsDetail16Child13}
        alt=""
        src="/polygon-7.svg"
      />
      <div className={styles.distributionsActivity}>Distributions Activity</div>
      <div className={styles.label8}>
        <b className={styles.labelcontent}>Draft</b>
      </div>
      <img
        className={styles.component20950}
        alt=""
        src="/component-209--47.svg"
      />
      <div className={styles.groupDiv}>
        <div className={styles.buttonNormal}>
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
      <div className={styles.distributionsDetail16Child14} />
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
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormal}>
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
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormal}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.buttonNormal} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.buttonNormal} />
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
              <div className={styles.div25}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.buttonNormal} />
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
              <div className={styles.buttonNormal} />
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
              <div className={styles.buttonNormal} />
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
    </div>
  );
};

export default DistributionsDetail16;
