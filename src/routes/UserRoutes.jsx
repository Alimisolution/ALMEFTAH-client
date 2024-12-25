import Home from "../pages/user/Home";
import RealEstate from "../pages/user/RealEstate";
import RealEstateDetails from "../pages/user/RealEstateDetails";
import AboutUs from "../pages/user/AboutUs";
import Blog from "../pages/user/Blog";
import BlogDetails from "../pages/user/BlogDetails";
import Faq from "../pages/user/Faq";
import FindAgent from "../pages/user/FindAgent";
import FindAgentDetails from "../pages/user/FindAgentDetails";
import PrivacyPolicy from "../pages/user/PrivacyPolicy";
import Profile from "../pages/user/Profile";
import TermsConditions from "../pages/user/TermsConditions";

export const UserRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy",
    element: <RealEstate />,
  },
  {
    path: "/real-estate-details",
    element: <RealEstateDetails />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog-details",
    element: <BlogDetails />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/find-agent",
    element: <FindAgent />,
  },
  {
    path: "/find-agent-details",
    element: <FindAgentDetails />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/terms-conditions",
    element: <TermsConditions />,
  },
];
