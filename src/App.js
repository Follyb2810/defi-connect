import './App.css';
import Borrow from './component/Common/home/Borrow';
import BorrowInput from './component/Common/home/BorrowInput';
import Hero from './component/Common/home/Hero';
import Stats from './component/Common/home/Stats';
import WhyDefi from './component/Common/home/WhyDefi';


function App() {
  return (
   <section>
     <Hero/>
     <Stats/>
     <Borrow/>
     <WhyDefi/>
     <BorrowInput/>
   </section>
  );
}

export default App;
