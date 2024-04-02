import Footer from '../components/Footer/Footer';
import CreateGuidePage from '../credit-guide/page';
import PrivacyPolicyContainer from '../privacy-policy/PrivacyPolicy';

const CreditGuideAndPrivacyPolicy = () => {
  return (
    <div className="overflow-hidden">
      <div style={{ marginTop: '100px', marginBottom: '50px' }}>
        <CreateGuidePage />
        <PrivacyPolicyContainer />
      </div>
    </div>
  );
};

export default CreditGuideAndPrivacyPolicy;
