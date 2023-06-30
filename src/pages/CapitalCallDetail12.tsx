import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CapitalCallDetail12.module.css";
const CapitalCallDetail12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEditSaveButtonClick = useCallback(() => {
    navigate("/capital-call-detail-saved");
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
    <div className={styles.capitalCallDetail12}>
      <div className={styles.capitalCallActivity}>Capital Call Activity</div>
      <div className={styles.capitalCallDetail12Child} />
      <div className={styles.capitalCallDetail12Item} />
      <div className={styles.capitalCallDetail12Inner} />
      <div className={styles.lineDiv} />
      <div className={styles.capitalCallDetail12Child1} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.jun2022}>Jun. 2022</div>
        <b className={styles.b}>$200,000,000.00</b>
        <b className={styles.closed}>Closed</b>
        <b className={styles.b1}>$40,000,000.00</b>
        <b className={styles.b2}>$40,000,000.00</b>
        <b className={styles.b3}>$40,000,000.00</b>
        <b className={styles.b4}>20</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.jun20221}>Jun. 2022</div>
        <b className={styles.b5}>$200,000,000.00</b>
        <b className={styles.closed1}>Closed</b>
        <b className={styles.b6}>$40,000,000.00</b>
        <b className={styles.b7}>$40,000,000.00</b>
        <b className={styles.b8}>$40,000,000.00</b>
        <b className={styles.b9}>20</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.jun20222}>Jun. 2022</div>
        <b className={styles.b10}>$200,000,000.00</b>
        <b className={styles.closed2}>Closed</b>
        <b className={styles.b11}>$40,000,000.00</b>
        <b className={styles.b12}>$40,000,000.00</b>
        <b className={styles.b13}>$40,000,000.00</b>
        <b className={styles.b14}>20</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.jun20223}>Jun. 2022</div>
        <b className={styles.b15}>$200,000,000.00</b>
        <b className={styles.closed3}>Closed</b>
        <b className={styles.b16}>$40,000,000.00</b>
        <b className={styles.b17}>$40,000,000.00</b>
        <b className={styles.b18}>$40,000,000.00</b>
        <b className={styles.b19}>20</b>
      </div>
      <div className={styles.previousCapitalCalls}>Previous Capital Calls</div>
      <div className={styles.subscribedcommittedParent}>
        <div className={styles.subscribedcommitted}>Subscribed/Committed</div>
        <div className={styles.totalContributed}>Total Contributed</div>
        <div className={styles.totalReceived}>Total Received</div>
        <div className={styles.ofInvestors}># of investors</div>
        <div className={styles.targetRaise}>Target Raise</div>
        <div className={styles.status}>Status</div>
        <div className={styles.date}>DATE</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild1} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild2} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild3} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild4} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild5} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild6} alt="" src="/polygon-7.svg" />
      </div>
      <img className={styles.path450Icon} alt="" src="/path-4501.svg" />
      <img
        className={styles.component20931}
        alt=""
        src="/component-209--47.svg"
      />
      <div className={styles.label}>
        <div className={styles.capitalCallDate}>Capital call date​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.div}>June 10, 2023</div>
      </div>
      <div className={styles.label1}>
        <div className={styles.capitalCallDate}>Purpose of Call</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.div}>—</div>
      </div>
      <div className={styles.label2}>
        <div className={styles.capitalCallDate}>Capital call number/ID​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.div}>100000495-002</div>
      </div>
      <div className={styles.label3}>
        <div className={styles.capitalCallDate}>Payment Due Date</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.div}>—</div>
      </div>
      <div className={styles.label4}>
        <div className={styles.capitalCallDate}>Currency​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.div}>USD</div>
      </div>
      <div className={styles.label5}>
        <div
          className={styles.capitalCallDate}
        >{`Status of the capital call `}</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.div}>—</div>
      </div>
      <div className={styles.editSaveButton} onClick={onEditSaveButtonClick}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.save}>Save</div>
        <img
          className={styles.saveFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/save-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.deleteParent}>
        <div className={styles.delete}>Delete</div>
        <img
          className={styles.deleteFill0Wght400Grad0OpsIcon}
          alt=""
          src="/delete-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.capitalCallDetail12Child2} />
      <div className={styles.capitalCallDetail12Child3} />
      <div className={styles.capitalCallDetail12Child4} />
      <div className={styles.capitalCallDetail12Child5} />
      <div className={styles.capitalCallDetail12Child6} />
      <div className={styles.capitalCallDetail12Child7} />
      <div className={styles.capitalCallDetail12Child8} />
      <div className={styles.targetRaise1}>Target Raise</div>
      <div className={styles.totalCommittedCapital}>
        Total Committed capital​
      </div>
      <div className={styles.totalCapitalCalled}>Total Capital Called</div>
      <div className={styles.totalCapitalRemaining}>
        Total Capital Remaining
      </div>
      <div className={styles.investors}>Investors</div>
      <div className={styles.signed}>Signed</div>
      <div className={styles.wired}>Wired</div>
      <b className={styles.b20}>$10,000,000</b>
      <b className={styles.b21}>$7,850,000</b>
      <b className={styles.b22}>$820,575</b>
      <b className={styles.b23}>$7,029425</b>
      <b className={styles.b24}>5</b>
      <b className={styles.b25}>-</b>
      <b className={styles.b26}>-</b>
      <div className={styles.capitalCallDetail12Child9} />
      <div className={styles.capitalCallDetail12Child10} />
      <div className={styles.capitalCallDetail12Child11} />
      <div className={styles.capitalCallDetail12Child12} />
      <div className={styles.capitalCallDetail12Child13} />
      <div className={styles.capitalCallDetail12Child14} />
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
      <div className={styles.mar12023}>Mar. 1, 2023</div>
      <div className={styles.mar120231}>Mar. 1, 2023</div>
      <div className={styles.mar120232}>Mar. 1, 2023</div>
      <div className={styles.mar120233}>Mar. 1, 2023</div>
      <div className={styles.mar120234}>Mar. 1, 2023</div>
      <div className={styles.ndReminder}>2nd Reminder</div>
      <div className={styles.signed1}>Signed</div>
      <div className={styles.signed2}>Signed</div>
      <div className={styles.signed3}>Signed</div>
      <div className={styles.pending}>Pending</div>
      <div className={styles.div4}>2.75%</div>
      <div className={styles.div5}>2.75%</div>
      <div className={styles.div6}>2.75%</div>
      <div className={styles.div7}>2.75%</div>
      <div className={styles.div8}>2.75%</div>
      <div className={styles.div9}>$215,000</div>
      <div className={styles.div10}>$50,000</div>
      <div className={styles.div11}>$15,000</div>
      <div className={styles.div12}>$15,000</div>
      <div className={styles.div13}>$15,000</div>
      <div className={styles.div14}>$15,000</div>
      <div className={styles.div15}>$150,000</div>
      <div className={styles.o0}>$215,000.o0</div>
      <div className={styles.o01}>$215,000.o0</div>
      <div className={styles.o02}>$215,000.o0</div>
      <div className={styles.div16}>$22,575</div>
      <div className={styles.div17}>$22,575</div>
      <div className={styles.div18}>$22,575</div>
      <div className={styles.div19}>$22,575</div>
      <div className={styles.div20}>$22,575</div>
      <div className={styles.investorsParent}>
        <div className={styles.callAmount}>Investors</div>
        <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.statusParent}>
        <div className={styles.status1}>Status</div>
        <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.typeParent}>
        <div className={styles.type}>Type</div>
        <img className={styles.groupChild9} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.subscribedParent}>
        <div className={styles.type}>Subscribed</div>
        <img className={styles.groupChild10} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.callAmountParent}>
        <div className={styles.callAmount}>Call Amount</div>
        <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.parent}>
        <div className={styles.div21}>$50,000</div>
        <div className={styles.div22}>50,000</div>
        <div className={styles.o03}>$192,474.o0</div>
        <div className={styles.o04}>$192,474.o0</div>
        <div className={styles.o05}>$192,474.o0</div>
        <div className={styles.contributedParent}>
          <div className={styles.contributed}>Contributed</div>
          <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.div21}>$135,000</div>
        <div className={styles.div22}>$0.00</div>
        <div className={styles.o03}>$0.00</div>
        <div className={styles.o04}>$0.00</div>
        <div className={styles.o05}>$0.00</div>
        <div className={styles.contributedParent}>
          <div className={styles.unfunded}>Unfunded</div>
          <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.ownershipParent}>
        <div className={styles.type}>Ownership</div>
        <img className={styles.groupChild14} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.receivedParent}>
        <div className={styles.received}>Received</div>
        <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.dateReceivedParent}>
        <div className={styles.unfunded}>Date Received</div>
        <img className={styles.groupChild7} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.buttonNormal}>
        <div className={styles.buttonNormalChild} />
        <div className={styles.addCall}>Add Call</div>
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div className={styles.label6}>
        <b className={styles.labelcontent}>Draft</b>
      </div>
      <img
        className={styles.capitalCallDetail12Child15}
        alt=""
        src="/polygon-7.svg"
      />
      <div className={styles.capitalCallDetail12Inner1}>
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
      <div className={styles.capitalCallDetail12Child16} />
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
              <div className={styles.div28}>4</div>
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
    </div>
  );
};

export default CapitalCallDetail12;
