import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FundDetailLookFeel01.module.css";
const FundDetailLookFeel01: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/fund-detail-1");
  }, [navigate]);

  const onEditSaveButtonClick = useCallback(() => {
    navigate("/fund-detail-look-feel-1");
  }, [navigate]);

  return (
    <div className={styles.fundDetailLookFeel01}>
      <div className={styles.documentation}>Documentation</div>
      <img
        className={styles.fundDetailLookFeel01Child}
        alt=""
        src="/rectangle-1501@2x.png"
      />
      <div className={styles.fundDetailLookFeel01Item} />
      <div className={styles.iconAwesomePlayWrapper}>
        <img
          className={styles.iconAwesomePlay}
          alt=""
          src="/icon-awesomeplay.svg"
        />
      </div>
      <div className={styles.fileOpenFill0Wght400Grad0Parent}>
        <img
          className={styles.fileOpenFill0Wght400Grad0Icon}
          alt=""
          src="/file-open-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.groupInternationalAnnual}>
          Group International Annual Report 2022
        </div>
      </div>
      <div className={styles.fileOpenFill0Wght400Grad0Group}>
        <img
          className={styles.fileOpenFill0Wght400Grad0Icon}
          alt=""
          src="/file-open-fill0-wght400-grad0-opsz48.svg"
        />
        <div
          className={styles.groupInternationalAnnual}
        >{`Private Placement Memorandum `}</div>
      </div>
      <div className={styles.fileOpenFill0Wght400Grad0Container}>
        <img
          className={styles.fileOpenFill0Wght400Grad0Icon}
          alt=""
          src="/file-open-fill0-wght400-grad0-opsz48.svg"
        />
        <div className={styles.groupInternationalAnnual}>
          Operating Agreement
        </div>
      </div>
      <div className={styles.importantNotesParent}>
        <div className={styles.importantNotes}>Important Notes</div>
        <div className={styles.atVeroEosContainer}>
          <p
            className={styles.atVeroEos}
          >{`At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</p>
          <p className={styles.atVeroEos}>&nbsp;</p>
          <p
            className={styles.atVeroEos}
          >{`At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</p>
          <p className={styles.atVeroEos}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.overview}>Overview</div>
      <div className={styles.premise}>Premise</div>
      <div className={styles.investmentDetails}>Investment Details</div>
      <div className={styles.investmentStrategy}>Investment Strategy</div>
      <div className={styles.marketBackdrop}>Market Backdrop</div>
      <div className={styles.loremIpsumDolorContainer}>
        <p className={styles.atVeroEos}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          Vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          <b className={styles.sadipscingElitr}>• Sadipscing elitr,</b>
          <span>{` sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</span>
        </p>
        <p className={styles.atVeroEos}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.atVeroEos}>
          <b>{`• Lorem ipsum dolor `}</b>
          <span>{`sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `}</span>
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          <b className={styles.sadipscingElitr}>• At vero eos et accusam</b>
          <span>{` et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `}</span>
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <div className={styles.whatAmIContainer}>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>What am I investing in?</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit
        </p>
      </div>
      <div className={styles.atVeroEosContainer1}>
        <p className={styles.atVeroEos}>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        </p>
      </div>
      <div className={styles.sadipscingElitrSedContainer}>
        <p
          className={styles.atVeroEos}
        >{`• Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`• Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`• At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`• Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`• Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p
          className={styles.atVeroEos}
        >{`• At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. `}</p>
        <p className={styles.atVeroEos}>&nbsp;</p>
        <p className={styles.atVeroEos}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <img className={styles.maskGroup35} alt="" src="/mask-group-353@2x.png" />
      <div className={styles.nexusHealthEquityFundParent}>
        <div className={styles.nexusHealthEquity}>Nexus Health Equity Fund</div>
        <div
          className={styles.marketplacePrivate}
        >{`Marketplace > Private Equity Funds`}</div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>New</b>
        </div>
        <div className={styles.maskGroup38Wrapper}>
          <img
            className={styles.maskGroup38}
            alt=""
            src="/mask-group-381@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.backArrowButton}
        alt=""
        src="/back-arrow-button.svg"
        onClick={onBackArrowButtonClick}
      />
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <img className={styles.groupChild} alt="" src="/group-355.svg" />
          <div className={styles.open}>OPEN</div>
          <div className={styles.status}>Status</div>
          <div className={styles.portfolioByAssetContainer}>
            Port
            <span className={styles.f}>f</span>
            {`olio By `}
            <span className={styles.a}>A</span>
            {`sset `}
            <span className={styles.t}>T</span>ype
          </div>
          <div className={styles.div}>95%</div>
          <div className={styles.equity}>Equity</div>
          <div className={styles.fundMetrics}>Fund Metrics</div>
          <div className={styles.vintage}>
            Vinta
            <span className={styles.g}>g</span>e
          </div>
          <div className={styles.div1}>2023</div>
          <div className={styles.fundSize}>
            <span className={styles.f1}>F</span>und Si
            <span className={styles.z}>z</span>e
          </div>
          <div className={styles.m}>$345M</div>
          <div className={styles.capitalCalled}>
            <span className={styles.c}>C</span>
            {`apital `}
            <span className={styles.c}>C</span>alled
          </div>
          <div className={styles.andFullyDeployedContainer}>
            100% and fully depl
            <span className={styles.o}>o</span>
            <span className={styles.y}>y</span>ed
          </div>
          <div className={styles.numberOfInvestmentsContainer}>
            Number of I<span className={styles.z}>n</span>
            <span className={styles.y}>v</span>estments
          </div>
          <div className={styles.div2}>30</div>
          <div className={styles.div3}>
            <span className={styles.y}>7</span>0%
          </div>
          <div className={styles.credit}>
            C<span className={styles.z}>r</span>edit
          </div>
          <div className={styles.div4}>30%</div>
          <div className={styles.remaining}>Remaining</div>
          <div className={styles.acceptingInvestments20kContainer}>
            A<span className={styles.c2}>c</span>
            <span className={styles.g}>c</span>epting I
            <span className={styles.n1}>n</span>
            <span className={styles.c2}>v</span>
            {`estments: `}
            <span className={styles.span1}>$</span>20K - $100K
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer} />
          </div>
          <img className={styles.groupChild} alt="" src="/group-359.svg" />
        </div>
        <div className={styles.component21274}>
          <div className={styles.groupContainer}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.subscribe}>Subscribe</div>
          </div>
        </div>
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupDiv}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.groupContainer}>
            <div className={styles.groupContainer}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al
                <span className={styles.f}>t</span>ernati
                <span className={styles.v2}>v</span>e
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
        <div className={styles.groupContainer}>
          <div className={styles.groupContainer}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.groupContainer} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz481.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.groupContainer} />
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
              <div className={styles.groupContainer}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.groupContainer}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.groupContainer}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.groupContainer} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.groupContainer} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.groupContainer} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
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
      <div className={styles.fundDetailLookFeel01Inner} />
      <img
        className={styles.component20957}
        alt=""
        src="/component-209--64.svg"
      />
      <div className={styles.editSaveButton} onClick={onEditSaveButtonClick}>
        <div className={styles.editSaveButtonChild} />
        <div className={styles.edit}>Edit</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
    </div>
  );
};

export default FundDetailLookFeel01;
