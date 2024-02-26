import Footer from './components/Footer/Footer';
import GetStarted from './components/Get Started/GetStarted';
import { Loan } from './components/Loan/Loan';
import Processes from './components/Processes/Processes';
import { TopBar } from './components/Top/top';
import { Wrapper } from './components/Wrapper/wrapper';

export function Home() {}

export default function Web() {
  return (
    <>
      <TopBar />
      <Wrapper />
      <Loan />
      <Processes />
      <GetStarted />
      <Footer />
    </>
  );
}
