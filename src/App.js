import "./App.css";
import { Navbar, Footor, Ad, Homepage, Subscription } from "./componands/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DataAnalytics,
  ManualQA,
  QAAutomation,
  QABundle,
  SalesEngineering,
  SystemsEngineering,
  UXDesign,
} from "./componands/Function/OurPrograms/index";
import {
  AffiliateProgram,
  OurBlog,
  SuccessStories,
} from "./componands/Function/Insights/index";
import {
  ContractTeam,
  Recruiting,
  WorkatCareerist,
} from "./componands/Function/Enterprise";
import {
  GraduateOutcomes,
  MeetCareeist,
  OurInstructors,
} from "./componands/Function/About/index";
import {
  EducationRules,
  Guarantee,
  CancellationPolicy,
  PrivacyPolicy,
  TermsofService,
  ReferralPolicy,
} from "./componands/Policy/index";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Ad />
        <Routes>
          <Route exact path="/dataanalytics" element={<DataAnalytics />} />
          <Route exact path="/manualqa" element={<ManualQA />} />
          <Route exact path="/qaautomation" element={<QAAutomation />} />
          <Route exact path="/qabundle" element={<QABundle />} />
          <Route exact path="/salesengi" element={<SalesEngineering />} />
          <Route exact path="/systemengi" element={<SystemsEngineering />} />
          <Route exact path="/uxdesign" element={<UXDesign />} />
          <Route
            exact
            path="/affiliateprogram"
            element={<AffiliateProgram />}
          />
          <Route exact path="/ourblog" element={<OurBlog />} />
          <Route exact path="/success" element={<SuccessStories />} />
          <Route exact path="/contact" element={<ContractTeam />} />
          <Route exact path="/recuriting" element={<Recruiting />} />
          <Route exact path="/work" element={<WorkatCareerist />} />
          <Route exact path="/outcome" element={<GraduateOutcomes />} />
          <Route exact path="/meet" element={<MeetCareeist />} />
          <Route exact path="/ourinstruct" element={<OurInstructors />} />
          <Route exact path="/educationrules" element={<EducationRules />} />
          <Route exact path="/guarantee" element={<Guarantee />} />
          <Route exact path="/cancelpolicy" element={<CancellationPolicy />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/terms" element={<TermsofService />} />
          <Route exact path="/referralpolicy" element={<ReferralPolicy />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/subscription" element={<Subscription />} />
        </Routes>
        <Footor />
      </Router>
    </div>
  );
}

export default App;
