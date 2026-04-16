import AnimationSection from "../components/AnimationSection";
import ComparisonSection from "../components/ComparisonSection";
import FaqSection from "../components/FaqSection";
import FranchiseForm from "../components/FranchiseForm";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProcessSection from "../components/ProcessSection";
import SectionWrapper from "../components/SectionWrapper";
import WhyVprintSection from "../components/WhyVprintSection";

const HomePage = ({ onGetFranchise }) => (
  <>
    <HeroSection onGetFranchise={onGetFranchise} />
    <AnimationSection />
    <HowItWorksSection />
    <WhyVprintSection />
    <ComparisonSection />
    <SectionWrapper id="franchise-form" title="Start Your Franchise Journey">
      <FranchiseForm />
    </SectionWrapper>
    <ProcessSection />
    <FaqSection />
  </>
);

export default HomePage;
