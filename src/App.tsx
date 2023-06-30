import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ReportingExecutiveSummary from "./pages/ReportingExecutiveSummary";
import InvestorProfileInvestProf from "./pages/InvestorProfileInvestProf";
import InvestorProfileBanking from "./pages/InvestorProfileBanking";
import FundDetailCompliance from "./pages/FundDetailCompliance";
import InvestorProfilePersonalIn from "./pages/InvestorProfilePersonalIn";
import InvestorProfileOverview from "./pages/InvestorProfileOverview";
import ReportingQuarterlyReport from "./pages/ReportingQuarterlyReport";
import CompanyDetail from "./pages/CompanyDetail";
import FundDetailInvestorRelatio from "./pages/FundDetailInvestorRelatio";
import FundDetailPortfolioCompan from "./pages/FundDetailPortfolioCompan";
import FundDetailServices3 from "./pages/FundDetailServices3";
import FundDetailServices2 from "./pages/FundDetailServices2";
import FundDetailServices from "./pages/FundDetailServices";
import FundDetailPerformance from "./pages/FundDetailPerformance";
import FundDetailPortfolioCompan1 from "./pages/FundDetailPortfolioCompan1";
import FundDetailServices1 from "./pages/FundDetailServices1";
import FundDetailLookFeel1 from "./pages/FundDetailLookFeel1";
import FundDetailLookFeel01 from "./pages/FundDetailLookFeel01";
import Marketplace from "./pages/Marketplace";
import CapitalCallDetailSaved from "./pages/CapitalCallDetailSaved";
import CapitalCallDetail14 from "./pages/CapitalCallDetail14";
import DistributionsDetailAdd1 from "./pages/DistributionsDetailAdd1";
import DistributionsDetail17 from "./pages/DistributionsDetail17";
import DistributionsDetail16 from "./pages/DistributionsDetail16";
import CapitalCallDetail12 from "./pages/CapitalCallDetail12";
import DistributionsDetail15 from "./pages/DistributionsDetail15";
import CapitalCallDetail13 from "./pages/CapitalCallDetail13";
import DistributionsDetail11 from "./pages/DistributionsDetail11";
import CapitalCallDetail1 from "./pages/CapitalCallDetail1";
import FundDetail1 from "./pages/FundDetail1";
import FirmWideDashboard from "./pages/FirmWideDashboard";
import FundManagerDashboard from "./pages/FundManagerDashboard";
import CreateAFund5 from "./pages/CreateAFund5";
import CreateAFund4 from "./pages/CreateAFund4";
import CreateAFund3 from "./pages/CreateAFund3";
import CreateAFund2 from "./pages/CreateAFund2";
import CreateAFund1 from "./pages/CreateAFund1";
import CreateAFund from "./pages/CreateAFund";
import Website from "./pages/Website";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-invest-profile":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-banking":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-compliance":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-personal-info":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile-overview":
        title = "";
        metaDescription = "";
        break;
      case "/reporting-quarterly-report":
        title = "";
        metaDescription = "";
        break;
      case "/company-detail":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-investor-relations":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-portfolio-companies-open":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-services-3":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-services-2":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-services":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-performance":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-portfolio-companies":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-services-1":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-look-feel-1":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-look-feel-01":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-saved":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1-4":
        title = "";
        metaDescription = "";
        break;
      case "/distributions-detail-add-1":
        title = "";
        metaDescription = "";
        break;
      case "/distributions-detail-1-7":
        title = "";
        metaDescription = "";
        break;
      case "/distributions-detail-1-6":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1-2":
        title = "";
        metaDescription = "";
        break;
      case "/distributions-detail-1-5":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1-3":
        title = "";
        metaDescription = "";
        break;
      case "/distributions-detail-1-1":
        title = "";
        metaDescription = "";
        break;
      case "/capital-call-detail-1":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail-1":
        title = "";
        metaDescription = "";
        break;
      case "/firmwide-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/fund-manager-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-fund-5":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-fund-4":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-fund-3":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-fund-2":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-fund-1":
        title = "";
        metaDescription = "";
        break;
      case "/create-a-fund":
        title = "";
        metaDescription = "";
        break;
      case "/website":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ReportingExecutiveSummary />} />
      <Route
        path="/investor-profile-invest-profile"
        element={<InvestorProfileInvestProf />}
      />
      <Route
        path="/investor-profile-banking"
        element={<InvestorProfileBanking />}
      />
      <Route
        path="/fund-detail-compliance"
        element={<FundDetailCompliance />}
      />
      <Route
        path="/investor-profile-personal-info"
        element={<InvestorProfilePersonalIn />}
      />
      <Route
        path="/investor-profile-overview"
        element={<InvestorProfileOverview />}
      />
      <Route
        path="/reporting-quarterly-report"
        element={<ReportingQuarterlyReport />}
      />
      <Route path="/company-detail" element={<CompanyDetail />} />
      <Route
        path="/fund-detail-investor-relations"
        element={<FundDetailInvestorRelatio />}
      />
      <Route
        path="/fund-detail-portfolio-companies-open"
        element={<FundDetailPortfolioCompan />}
      />
      <Route path="/fund-detail-services-3" element={<FundDetailServices3 />} />
      <Route path="/fund-detail-services-2" element={<FundDetailServices2 />} />
      <Route path="/fund-detail-services" element={<FundDetailServices />} />
      <Route
        path="/fund-detail-performance"
        element={<FundDetailPerformance />}
      />
      <Route
        path="/fund-detail-portfolio-companies"
        element={<FundDetailPortfolioCompan1 />}
      />
      <Route path="/fund-detail-services-1" element={<FundDetailServices1 />} />
      <Route
        path="/fund-detail-look-feel-1"
        element={<FundDetailLookFeel1 />}
      />
      <Route
        path="/fund-detail-look-feel-01"
        element={<FundDetailLookFeel01 />}
      />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route
        path="/capital-call-detail-saved"
        element={<CapitalCallDetailSaved />}
      />
      <Route
        path="/capital-call-detail-1-4"
        element={<CapitalCallDetail14 />}
      />
      <Route
        path="/distributions-detail-add-1"
        element={<DistributionsDetailAdd1 />}
      />
      <Route
        path="/distributions-detail-1-7"
        element={<DistributionsDetail17 />}
      />
      <Route
        path="/distributions-detail-1-6"
        element={<DistributionsDetail16 />}
      />
      <Route
        path="/capital-call-detail-1-2"
        element={<CapitalCallDetail12 />}
      />
      <Route
        path="/distributions-detail-1-5"
        element={<DistributionsDetail15 />}
      />
      <Route
        path="/capital-call-detail-1-3"
        element={<CapitalCallDetail13 />}
      />
      <Route
        path="/distributions-detail-1-1"
        element={<DistributionsDetail11 />}
      />
      <Route path="/capital-call-detail-1" element={<CapitalCallDetail1 />} />
      <Route path="/fund-detail-1" element={<FundDetail1 />} />
      <Route path="/firmwide-dashboard" element={<FirmWideDashboard />} />
      <Route
        path="/fund-manager-dashboard"
        element={<FundManagerDashboard />}
      />
      <Route path="/create-a-fund-5" element={<CreateAFund5 />} />
      <Route path="/create-a-fund-4" element={<CreateAFund4 />} />
      <Route path="/create-a-fund-3" element={<CreateAFund3 />} />
      <Route path="/create-a-fund-2" element={<CreateAFund2 />} />
      <Route path="/create-a-fund-1" element={<CreateAFund1 />} />
      <Route path="/create-a-fund" element={<CreateAFund />} />
      <Route path="/website" element={<Website />} />
    </Routes>
  );
}
export default App;
