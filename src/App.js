import './App.css';
import AboutUs from './components/AboutUs';
import Activities from './components/Activities';
import Banner from './components/Banner';
import Banner1 from './components/Banner1';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Galery from './components/Galery';
import LuckyMember from './components/LuckyMember';
import MemberOfTheMonth from './components/MemberOfTheMonth';
import NewsLetter from './components/NewsLetter';
import Separator from './components/shared/Separator';


function App() {
  return (
    <>
    <Banner></Banner>
    <NewsLetter/>
    <AboutUs/>
    <Galery/>
    {/* <MemberOfTheMonth/> */}
    <LuckyMember/>
    <Activities/>
    <ContactUs/>
    <Footer/> 
    </>
  );
}

export default App;
