import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CapitalCallDetailSaved.module.css";
const CapitalCallDetailSaved: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonNormalContainer1Click = useCallback(() => {
    navigate("/capital-call-detail-1-2");
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
    <div className={styles.capitalCallDetailSaved}>
      <img className={styles.path450Icon} alt="" src="/path-4501.svg" />
      <div className={styles.capitalCallDetailSavedChild} />
      <div className={styles.capitalCallDetailSavedItem} />
      <div className={styles.capitalCallDetailSavedInner} />
      <div className={styles.lineDiv} />
      <div className={styles.capitalCallDetailSavedChild1} />
      <div className={styles.capitalCallDetailSavedChild2} />
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
      <div className={styles.signed}>Signed</div>
      <div className={styles.signed1}>Signed</div>
      <div className={styles.signed2}>Signed</div>
      <div className={styles.pending}>Pending</div>
      <div className={styles.div}>2.75%</div>
      <div className={styles.div1}>2.75%</div>
      <div className={styles.div2}>2.75%</div>
      <div className={styles.div3}>2.75%</div>
      <div className={styles.div4}>2.75%</div>
      <div className={styles.div5}>$215,000</div>
      <div className={styles.div6}>$50,000</div>
      <div className={styles.div7}>$15,000</div>
      <div className={styles.div8}>$15,000</div>
      <div className={styles.div9}>$15,000</div>
      <div className={styles.div10}>$15,000</div>
      <div className={styles.div11}>$150,000</div>
      <div className={styles.o0}>$215,000.o0</div>
      <div className={styles.o01}>$215,000.o0</div>
      <div className={styles.o02}>$215,000.o0</div>
      <div className={styles.div12}>$22,575</div>
      <div className={styles.div13}>$22,575</div>
      <div className={styles.div14}>$22,575</div>
      <div className={styles.div15}>$22,575</div>
      <div className={styles.div16}>$22,575</div>
      <div className={styles.investorsParent}>
        <div className={styles.investors}>Investors</div>
        <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.statusParent}>
        <div className={styles.status}>Status</div>
        <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.typeParent}>
        <div className={styles.type}>Type</div>
        <img className={styles.groupInner} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.subscribedParent}>
        <div className={styles.type}>Subscribed</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.callAmountParent}>
        <div className={styles.investors}>Call Amount</div>
        <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.parent}>
        <div className={styles.div17}>$50,000</div>
        <div className={styles.div18}>50,000</div>
        <div className={styles.o03}>$192,474.o0</div>
        <div className={styles.o04}>$192,474.o0</div>
        <div className={styles.o05}>$192,474.o0</div>
        <div className={styles.contributedParent}>
          <div className={styles.contributed}>Contributed</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.div17}>$135,000</div>
        <div className={styles.div18}>$0.00</div>
        <div className={styles.o03}>$0.00</div>
        <div className={styles.o04}>$0.00</div>
        <div className={styles.o05}>$0.00</div>
        <div className={styles.contributedParent}>
          <div className={styles.unfunded}>Unfunded</div>
          <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
        </div>
      </div>
      <div className={styles.ownershipParent}>
        <div className={styles.type}>Ownership</div>
        <img className={styles.groupChild4} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.receivedParent}>
        <div className={styles.received}>Received</div>
        <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.dateReceivedParent}>
        <div className={styles.unfunded}>Date Received</div>
        <img className={styles.groupChild} alt="" src="/polygon-7.svg" />
      </div>
      <img
        className={styles.capitalCallDetailSavedChild3}
        alt=""
        src="/polygon-7.svg"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.capitalCallDetailSavedChild4} />
      <div className={styles.capitalCallDetailSavedChild5} />
      <div className={styles.capitalCallDetailSavedChild6} />
      <div className={styles.capitalCallDetailSavedChild7} />
      <div className={styles.capitalCallDetailSavedChild8} />
      <div className={styles.capitalCallDetailSavedChild9} />
      <div className={styles.targetRaise}>Target Raise</div>
      <div className={styles.totalCommittedCapital}>
        Total Committed capital​
      </div>
      <div className={styles.totalCapitalCalled}>Total Capital Called</div>
      <div className={styles.totalCapitalRemaining}>
        Total Capital Remaining
      </div>
      <div className={styles.investors1}>Investors</div>
      <div className={styles.signed3}>Signed</div>
      <div className={styles.wired}>Wired</div>
      <b className={styles.b}>$10,000,000</b>
      <b className={styles.b1}>$7,850,000</b>
      <b className={styles.b2}>$820,575</b>
      <b className={styles.b3}>$7,029425</b>
      <b className={styles.b4}>5</b>
      <b className={styles.b5}>-</b>
      <b className={styles.b6}>-</b>
      <div className={styles.capitalCallActivity}>Capital Call Activity</div>
      <div className={styles.editSaveButton}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.edit}>Edit</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.label}>
        <b className={styles.labelcontent}>Active</b>
      </div>
      <div className={styles.currency}>Currency​</div>
      <div className={styles.purpose}>Purpose</div>
      <div className={styles.firstInvestmentDate}>First investment date;​</div>
      <div className={styles.capitalCallNumberid}>Capital call number/ID​</div>
      <div className={styles.firstClosingDate}>First closing date;​</div>
      <b className={styles.usd}>USD</b>
      <b className={styles.investmentManagementFees}>
        Investment, Management fees
      </b>
      <b className={styles.jan2023}>Jan. 2023</b>
      <b className={styles.cc000867Db009}>CC-000867-DB009</b>
      <b className={styles.jun2023}>Jun. 2023</b>
      <div className={styles.capitalCallDetailSavedChild10} />
      <div className={styles.capitalCallDetailSavedChild11} />
      <div className={styles.capitalCallDetailSavedChild12} />
      <div className={styles.capitalCallDetailSavedChild13} />
      <div className={styles.capitalCallDetailSavedChild14} />
      <div className={styles.capitalCallDetailSavedChild15} />
      <div className={styles.capitalCallDetailSavedChild16} />
      <div className={styles.capitalCallDetailSavedChild17} />
      <div className={styles.capitalCallDetailSavedChild18} />
      <div className={styles.capitalCallDetailSavedChild19} />
      <div className={styles.capitalCallDetailSavedChild20} />
      <div className={styles.capitalCallDetailSavedChild21} />
      <div className={styles.deleteParent}>
        <div className={styles.delete}>Delete</div>
        <img
          className={styles.deleteFill0Wght400Grad0OpsIcon}
          alt=""
          src="/delete-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild7} />
        <div className={styles.jun2022}>Jun. 2022</div>
        <b className={styles.b7}>$200,000,000.00</b>
        <b className={styles.closed}>Closed</b>
        <b className={styles.b8}>$40,000,000.00</b>
        <b className={styles.b9}>$40,000,000.00</b>
        <b className={styles.b10}>$40,000,000.00</b>
        <b className={styles.b11}>20</b>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild7} />
        <div className={styles.jun20221}>Jun. 2022</div>
        <b className={styles.b12}>$200,000,000.00</b>
        <b className={styles.closed1}>Closed</b>
        <b className={styles.b13}>$40,000,000.00</b>
        <b className={styles.b14}>$40,000,000.00</b>
        <b className={styles.b15}>$40,000,000.00</b>
        <b className={styles.b16}>20</b>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild7} />
        <div className={styles.jun20222}>Jun. 2022</div>
        <b className={styles.b17}>$200,000,000.00</b>
        <b className={styles.closed2}>Closed</b>
        <b className={styles.b18}>$40,000,000.00</b>
        <b className={styles.b19}>$40,000,000.00</b>
        <b className={styles.b20}>$40,000,000.00</b>
        <b className={styles.b21}>20</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild7} />
        <div className={styles.jun20223}>Jun. 2022</div>
        <b className={styles.b22}>$200,000,000.00</b>
        <b className={styles.closed3}>Closed</b>
        <b className={styles.b23}>$40,000,000.00</b>
        <b className={styles.b24}>$40,000,000.00</b>
        <b className={styles.b25}>$40,000,000.00</b>
        <b className={styles.b26}>20</b>
      </div>
      <div className={styles.previousCapitalCalls}>Previous Capital Calls</div>
      <div className={styles.subscribedcommittedParent}>
        <div className={styles.subscribedcommitted}>Subscribed/Committed</div>
        <div className={styles.totalContributed}>Total Contributed</div>
        <div className={styles.totalReceived}>Total Received</div>
        <div className={styles.ofInvestors}># of investors</div>
        <div className={styles.targetRaise1}>Target Raise</div>
        <div className={styles.status1}>Status</div>
        <div className={styles.date}>DATE</div>
        <img className={styles.groupChild11} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild12} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild13} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild14} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild15} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild16} alt="" src="/polygon-7.svg" />
        <img className={styles.groupChild17} alt="" src="/polygon-7.svg" />
      </div>
      <div className={styles.component21237}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.executeCall}>Execute Call</div>
          <img
            className={styles.iconMaterialSend}
            alt=""
            src="/icon-materialsend.svg"
          />
        </div>
      </div>
      <div
        className={styles.buttonNormal1}
        onClick={onButtonNormalContainer1Click}
      >
        <div className={styles.buttonNormalItem} />
        <div className={styles.addCall}>Add Call</div>
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
        />
      </div>
      <div className={styles.capitalCallDetailSavedInner1}>
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
      <div className={styles.capitalCallDetailSavedChild22} />
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
              <div className={styles.div24}>4</div>
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
      <img
        className={styles.component20930}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default CapitalCallDetailSaved;
