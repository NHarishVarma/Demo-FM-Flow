import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAFund1.module.css";
const CreateAFund1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/fund-manager-dashboard");
  }, [navigate]);

  const onLeftNavButton8Click = useCallback(() => {
    navigate("/firmwide-dashboard");
  }, [navigate]);

  const onIconMaterialCloseClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onButtonNormalContainer16Click = useCallback(() => {
    navigate("/create-a-fund-2");
  }, [navigate]);

  const onGroupContainer40Click = useCallback(() => {
    navigate("/create-a-fund-2");
  }, [navigate]);

  const onGroupContainer41Click = useCallback(() => {
    navigate("/create-a-fund");
  }, [navigate]);

  return (
    <div className={styles.createAFund1}>
      <div className={styles.bgParent}>
        <img className={styles.bgIcon} alt="" src="/bg4.svg" />
        <img
          className={styles.maskGroup36}
          alt=""
          src="/mask-group-36@2x.png"
        />
        <img className={styles.path465Icon} alt="" src="/path-4651.svg" />
        <div className={styles.component21291}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe}>Subscribe</div>
          </div>
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <div className={styles.privateEquityParent}>
          <div className={styles.privateEquity}>Private Equity</div>
          <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturnParent}>
            <div className={styles.targetReturn}>TARGET RETURN</div>
            <b className={styles.b}>15% - 20%</b>
            <div className={styles.minimum}>MINIMUM</div>
            <b className={styles.b1}>$100,000</b>
            <div className={styles.liquidity}>LIQUIDITY</div>
            <b className={styles.quarterly}>Quarterly</b>
          </div>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>NOW OPEN</b>
        </div>
        <img
          className={styles.maskGroup37}
          alt=""
          src="/mask-group-37@2x.png"
        />
      </div>
      <div className={styles.bgGroup}>
        <img className={styles.bgIcon} alt="" src="/bg4.svg" />
        <div className={styles.component21291}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe}>Subscribe</div>
          </div>
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <div className={styles.privateEquityParent}>
          <div className={styles.privateEquity}>Private Equity</div>
          <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturnParent}>
            <div className={styles.targetReturn}>TARGET RETURN</div>
            <b className={styles.b}>15% - 20%</b>
            <div className={styles.minimum}>MINIMUM</div>
            <b className={styles.b1}>$100,000</b>
            <div className={styles.liquidity}>LIQUIDITY</div>
            <b className={styles.quarterly}>Quarterly</b>
          </div>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <img
          className={styles.maskGroup36}
          alt=""
          src="/mask-group-36@2x.png"
        />
        <div className={styles.image} />
        <div className={styles.label}>
          <b className={styles.labelcontent}>NOW OPEN</b>
        </div>
        <img
          className={styles.maskGroup37}
          alt=""
          src="/mask-group-37@2x.png"
        />
      </div>
      <div className={styles.bgContainer}>
        <div className={styles.bg} />
        <div className={styles.component21295}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe2}>Subscribe</div>
          </div>
        </div>
        <div className={styles.privateEquityContainer}>
          <div className={styles.privateEquity2}>Private Equity</div>
          <b className={styles.consumerGoodsRetailEnhancem}>
            Consumer Goods Retail Enhancement Fund
          </b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturn2}>TARGET RETURN</div>
          <b className={styles.b}>15% - 20%</b>
          <div className={styles.minimum2}>MINIMUM</div>
          <b className={styles.b5}>$100,000</b>
          <div className={styles.liquidity2}>LIQUIDITY</div>
          <b className={styles.quarterly2}>Quarterly</b>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <img
          className={styles.maskGroup36}
          alt=""
          src="/mask-group-23@2x.png"
        />
        <div className={styles.image1} />
        <div className={styles.label2}>
          <b className={styles.labelcontent2}>New</b>
        </div>
        <img
          className={styles.maskGroup38}
          alt=""
          src="/mask-group-384@2x.png"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.bg} />
        <div className={styles.component21295}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe2}>Subscribe</div>
          </div>
        </div>
        <div className={styles.privateEquityContainer}>
          <div className={styles.privateEquity2}>Private Equity</div>
          <b className={styles.consumerGoodsRetailEnhancem}>
            Consumer Goods Retail Enhancement Fund
          </b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturn2}>TARGET RETURN</div>
          <b className={styles.b}>15% - 20%</b>
          <div className={styles.minimum2}>MINIMUM</div>
          <b className={styles.b5}>$100,000</b>
          <div className={styles.liquidity2}>LIQUIDITY</div>
          <b className={styles.quarterly2}>Quarterly</b>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <img
          className={styles.maskGroup36}
          alt=""
          src="/mask-group-23@2x.png"
        />
        <div className={styles.image1} />
        <div className={styles.label2}>
          <b className={styles.labelcontent2}>New</b>
        </div>
        <img
          className={styles.maskGroup38}
          alt=""
          src="/mask-group-384@2x.png"
        />
      </div>
      <div className={styles.bgParent1}>
        <div className={styles.bg} />
        <div className={styles.component21295}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe2}>Subscribe</div>
          </div>
        </div>
        <div className={styles.privateEquityContainer}>
          <div className={styles.privateEquity2}>Private Equity</div>
          <b className={styles.consumerGoodsRetailEnhancem}>
            Consumer Goods Retail Enhancement Fund
          </b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturn2}>TARGET RETURN</div>
          <b className={styles.b}>15% - 20%</b>
          <div className={styles.minimum2}>MINIMUM</div>
          <b className={styles.b5}>$100,000</b>
          <div className={styles.liquidity2}>LIQUIDITY</div>
          <b className={styles.quarterly4}>Quarterly</b>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <img
          className={styles.maskGroup36}
          alt=""
          src="/mask-group-24@2x.png"
        />
        <div className={styles.image3} />
        <div className={styles.label2}>
          <b className={styles.labelcontent2}>New</b>
        </div>
        <img
          className={styles.maskGroup38}
          alt=""
          src="/mask-group-384@2x.png"
        />
      </div>
      <div className={styles.bgParent2}>
        <div className={styles.bg} />
        <div className={styles.component21295}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe2}>Subscribe</div>
          </div>
        </div>
        <div className={styles.privateEquityContainer}>
          <div className={styles.privateEquity2}>Private Equity</div>
          <b className={styles.consumerGoodsRetailEnhancem}>
            Consumer Goods Retail Enhancement Fund
          </b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturn2}>TARGET RETURN</div>
          <b className={styles.b}>15% - 20%</b>
          <div className={styles.minimum2}>MINIMUM</div>
          <b className={styles.b5}>$100,000</b>
          <div className={styles.liquidity2}>LIQUIDITY</div>
          <b className={styles.quarterly4}>Quarterly</b>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <img
          className={styles.maskGroup36}
          alt=""
          src="/mask-group-24@2x.png"
        />
        <div className={styles.image3} />
        <div className={styles.label2}>
          <b className={styles.labelcontent2}>New</b>
        </div>
        <img
          className={styles.maskGroup38}
          alt=""
          src="/mask-group-384@2x.png"
        />
      </div>
      <div className={styles.bgParent3}>
        <div className={styles.bg} />
        <div className={styles.component21295}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe2}>Subscribe</div>
          </div>
        </div>
        <div className={styles.privateEquityContainer}>
          <div className={styles.privateEquity2}>Private Equity</div>
          <b className={styles.consumerGoodsRetailEnhancem}>
            Consumer Goods Retail Enhancement Fund
          </b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturn2}>TARGET RETURN</div>
          <b className={styles.b}>15% - 20%</b>
          <div className={styles.minimum2}>MINIMUM</div>
          <b className={styles.b5}>$100,000</b>
          <div className={styles.liquidity2}>LIQUIDITY</div>
          <b className={styles.quarterly4}>Quarterly</b>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <img
          className={styles.maskGroup25}
          alt=""
          src="/mask-group-25@2x.png"
        />
        <div className={styles.image5} />
        <div className={styles.label6}>
          <b className={styles.labelcontent6}>Updated Feb 14</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <img
          className={styles.maskGroup40}
          alt=""
          src="/mask-group-402@2x.png"
        />
      </div>
      <div className={styles.bgParent4}>
        <div className={styles.bg} />
        <div className={styles.component21295}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe2}>Subscribe</div>
          </div>
        </div>
        <div className={styles.privateEquityContainer}>
          <div className={styles.privateEquity2}>Private Equity</div>
          <b className={styles.consumerGoodsRetailEnhancem}>
            Consumer Goods Retail Enhancement Fund
          </b>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore.
          </div>
          <div className={styles.targetReturn2}>TARGET RETURN</div>
          <b className={styles.b}>15% - 20%</b>
          <div className={styles.minimum2}>MINIMUM</div>
          <b className={styles.b5}>$100,000</b>
          <div className={styles.liquidity2}>LIQUIDITY</div>
          <b className={styles.quarterly4}>Quarterly</b>
          <img
            className={styles.favoriteButtonIcon}
            alt=""
            src="/favorite-button.svg"
          />
          <img
            className={styles.addToCompare}
            alt=""
            src="/add-to-compare.svg"
          />
        </div>
        <div className={styles.component21292}>
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.viewDetail}>View Detail</div>
          </div>
        </div>
        <img
          className={styles.maskGroup25}
          alt=""
          src="/mask-group-25@2x.png"
        />
        <div className={styles.image5} />
        <div className={styles.label6}>
          <b className={styles.labelcontent6}>Updated Feb 14</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <img
          className={styles.maskGroup40}
          alt=""
          src="/mask-group-402@2x.png"
        />
      </div>
      <div className={styles.label8}>Filters Applied:</div>
      <div className={styles.filterNavBar}>
        <div className={styles.filterMenuButton}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Industry</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton1}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Strategy</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton2}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Minimum</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton3}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Term</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton4}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Manager</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton5}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.sort}>Sort</div>
          <img className={styles.groupIcon} alt="" src="/group-319.svg" />
        </div>
        <div className={styles.filterMenuButton6}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Type</div>
          <img
            className={styles.iconMaterialArrowDropDown5}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton7}>
          <div className={styles.filterMenuButtonChild} />
          <img
            className={styles.listFill0Wght400Grad0Opsz4Icon}
            alt=""
            src="/list-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.compareParent}>
          <div className={styles.sort}>Compare</div>
          <img
            className={styles.iconMaterialCompareArrows}
            alt=""
            src="/icon-materialcomparearrows.svg"
          />
        </div>
      </div>
      <div className={styles.createAFund1Child} />
      <div className={styles.investmentMarketplaceParent}>
        <div className={styles.investmentMarketplace}>
          Investment Marketplace
        </div>
        <div className={styles.connectingInvestorsWith}>
          Connecting investors with a wide range of non-traditional investment
          opportunities, while providing a transparent and accessible
          environment for investors to discover, evaluate, and participate in
          alternative investment options beyond the traditional stock and bond
          markets.
        </div>
      </div>
      <div className={styles.filterNavBar1}>
        <div className={styles.filterNavBarChild} />
        <div className={styles.filterMenuButton8}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Industry</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton9}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Strategy</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton10}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Minimum</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton11}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Term</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton12}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Manager</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton13}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.sort}>Sort</div>
          <img className={styles.groupIcon} alt="" src="/group-319.svg" />
        </div>
        <div className={styles.filterMenuButton14}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Type</div>
          <img
            className={styles.iconMaterialArrowDropDown5}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton15}>
          <div className={styles.filterMenuButtonChild} />
          <img
            className={styles.listFill0Wght400Grad0Opsz4Icon}
            alt=""
            src="/list-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.compareButton}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.sort}>Compare</div>
          <img
            className={styles.iconMaterialCompareArrows}
            alt=""
            src="/icon-materialcomparearrows.svg"
          />
        </div>
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
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
      <img
        className={styles.component20959}
        alt=""
        src="/component-209--47.svg"
      />
      <div className={styles.createAFund1Inner}>
        <div className={styles.addAFundParent}>
          <div className={styles.addAFund}>Add a Fund</div>
          <img
            className={styles.iconMaterialAddCircleOutli}
            alt=""
            src="/icon-materialaddcircleoutline.svg"
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
              <div className={styles.div}>4</div>
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
      <div className={styles.createAFund1Item} />
      <div className={styles.groupContainer}>
        <div className={styles.buttonNormal}>
          <div className={styles.bg} />
          <img
            className={styles.iconMaterialClose}
            alt=""
            src="/icon-materialclose.svg"
            onClick={onIconMaterialCloseClick}
          />
        </div>
        <b className={styles.managementTeam}>Management Team</b>
        <b className={styles.logo}>Create a Fund</b>
        <div className={styles.labelParent}>
          <div className={styles.buttonNormal}>
            <div className={styles.title}>Title</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.srVicePresident}>Sr. Vice President</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color1.svg" />
          </div>
        </div>
        <div className={styles.logoParent}>
          <div className={styles.logo1}>02 of 06</div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.label10}>
          <div className={styles.title}>Last Name</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>Smith</div>
        </div>
        <img className={styles.path491Icon} alt="" src="/path-491.svg" />
        <div
          className={styles.briefDescriptionTheir}
        >{`Brief Description their role, responsibility and fund history. `}</div>
        <div className={styles.label11}>
          <div className={styles.title}>First Name</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>Thomas</div>
        </div>
        <div className={styles.label12}>
          <div className={styles.title}>Address Line 1</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>{`1234 First Ave. `}</div>
        </div>
        <div className={styles.label13}>
          <div className={styles.title}>Zip Code</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>98765</div>
        </div>
        <div className={styles.label14}>
          <div className={styles.title}>Address Line 2</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        </div>
        <div className={styles.label15}>
          <div className={styles.title}>Email Address</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>T.smith@gvest.com</div>
        </div>
        <div className={styles.label16}>
          <div className={styles.title}>{`City `}</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>New York</div>
        </div>
        <div className={styles.label17}>
          <div className={styles.title}>Phone Number</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.srVicePresident}>(444) 818-2244</div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.buttonNormal}>
            <div className={styles.title}>Country</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.srVicePresident}>United States</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow1}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color.svg" />
          </div>
        </div>
        <div className={styles.labelContainer}>
          <div className={styles.buttonNormal}>
            <div className={styles.title}>State</div>
            <img className={styles.path297Icon} alt="" src="/path-297.svg" />
            <div className={styles.srVicePresident}>NY</div>
          </div>
          <div className={styles.iconNavigationArrowDropDow1}>
            <div className={styles.buttonNormal} />
            <img className={styles.colorIcon} alt="" src="/-color.svg" />
          </div>
        </div>
        <div className={styles.groupFrame}>
          <div className={styles.addTeamMemberParent}>
            <div className={styles.addTeamMember}>Add Team Member</div>
            <img
              className={styles.iconMaterialAddCircleOutli1}
              alt=""
              src="/icon-materialaddcircleoutline1.svg"
            />
          </div>
        </div>
        <div
          className={styles.buttonNormal16}
          onClick={onButtonNormalContainer16Click}
        >
          <div className={styles.buttonNormalChild13} />
          <div className={styles.save}>Save</div>
        </div>
      </div>
      <div className={styles.groupParent1} onClick={onGroupContainer40Click}>
        <img className={styles.groupInner} alt="" src="/group-17547.svg" />
        <div className={styles.next}>Next</div>
      </div>
      <div className={styles.groupParent2} onClick={onGroupContainer41Click}>
        <img className={styles.groupChild1} alt="" src="/group-175471.svg" />
        <div className={styles.previous}>Previous</div>
      </div>
    </div>
  );
};

export default CreateAFund1;
