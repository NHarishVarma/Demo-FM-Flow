import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestorProfileInvestProf.module.css";
const InvestorProfileInvestProf: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabButtonContainer1Click = useCallback(() => {
    navigate("/investor-profile-personal-info");
  }, [navigate]);

  const onTabNavButtonClick = useCallback(() => {
    navigate("/investor-profile-overview");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-detail-investor-relations");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  return (
    <div className={styles.investorProfileInvestProf}>
      <div className={styles.investorProfileInvestProfChild} />
      <div className={styles.investorProfileInvestProfItem} />
      <div className={styles.onboardingConfirmButton}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>
          Invested in alternatives before
        </div>
        <div className={styles.no}>No</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton1}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Your income</div>
        <div className={styles.no}>$0 - $200,000</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton2}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Your net worth</div>
        <div className={styles.no}>$1,000,001 - $5,000,000</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton3}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Qualified client</div>
        <div className={styles.no}>No</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton4}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Employment status</div>
        <div className={styles.no}>Employed</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton5}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Risk tolerance</div>
        <div className={styles.no}>Moderate</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton6}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Time Horizon</div>
        <div className={styles.no}>0 - 3 years</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton7}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Investment style</div>
        <div className={styles.no}>Growth</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton8}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>
          Potential investment amount
        </div>
        <div className={styles.no}>$50,000 - $100,000</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.investorProfileInvestProfInner} />
      <div className={styles.investorProfileInvestProfChild1} />
      <div className={styles.tabButton}>
        <div className={styles.tabButtonChild} />
        <div className={styles.investmentProfile}>{`Investment Profile `}</div>
        <img
          className={styles.financeChipFill1Wght400GraIcon}
          alt=""
          src="/finance-chip-fill1-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.tabButton1} onClick={onTabButtonContainer1Click}>
        <div className={styles.tabButtonItem} />
        <div className={styles.bankingInformation}>Banking Information</div>
        <img
          className={styles.accountBalanceFill0Wght400Icon}
          alt=""
          src="/account-balance-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.tabNavButton} onClick={onTabNavButtonClick}>
        <div className={styles.tabNavButtonChild} />
        <div className={styles.overview}>Overview</div>
        <img
          className={styles.iconMaterialInfoOutline}
          alt=""
          src="/icon-materialinfooutline.svg"
        />
      </div>
      <div className={styles.tabButton2}>
        <div className={styles.tabButtonItem} />
        <div className={styles.personalInformation}>Personal Information</div>
        <img
          className={styles.personFill0Wght400Grad0OpsIcon}
          alt=""
          src="/person-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <img className={styles.path466Icon} alt="" src="/path-466.svg" />
            <img
              className={styles.backArrowButton}
              alt=""
              src="/back-arrow-button.svg"
              onClick={onBackArrowButtonClick}
            />
            <div className={styles.thomasSmith}>Thomas Smith</div>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabButton3}>
          <div className={styles.tabButtonChild1} />
          <div
            className={styles.investmentProfile}
          >{`Investment Profile `}</div>
          <img
            className={styles.financeChipFill1Wght400GraIcon}
            alt=""
            src="/finance-chip-fill1-wght400-grad0-opsz48-1.svg"
          />
        </div>
        <div className={styles.tabButton4}>
          <div className={styles.tabButtonItem} />
          <div className={styles.bankingInformation}>Banking Information</div>
          <img
            className={styles.accountBalanceFill0Wght400Icon}
            alt=""
            src="/account-balance-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline.svg"
          />
        </div>
        <div className={styles.tabButton5}>
          <div className={styles.tabButtonItem} />
          <div className={styles.personalInformation}>Personal Information</div>
          <img
            className={styles.personFill0Wght400Grad0OpsIcon}
            alt=""
            src="/person-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.investorProfileInvestProfChild2} />
      <div className={styles.investorProfileInvestProfChild3} />
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <img className={styles.path466Icon} alt="" src="/path-465.svg" />
          <img
            className={styles.backArrowButton1}
            alt=""
            src="/back-arrow-button.svg"
          />
          <div className={styles.thomasSmith1}>Thomas Smith</div>
        </div>
        <div className={styles.editSaveButton}>
          <div className={styles.editSaveButtonChild} />
          <div className={styles.edit}>Edit</div>
          <img
            className={styles.editFill0Wght400Grad0Opsz4Icon9}
            alt=""
            src="/edit-fill0-wght400-grad0-opsz48-1.svg"
          />
        </div>
        <img className={styles.avatarIcon1} alt="" src="/avatar1@2x.png" />
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
              <div className={styles.div3}>4</div>
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
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupContainer}>
          <img className={styles.groupInner} alt="" src="/group-330.svg" />
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
      <img
        className={styles.component20943}
        alt=""
        src="/component-209--47.svg"
      />
    </div>
  );
};

export default InvestorProfileInvestProf;
