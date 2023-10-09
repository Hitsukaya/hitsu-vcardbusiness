import Image from 'next/image'
import Heroone from './components/widgets/Heroone';
 
import InfoAlert from './components/widgets/InfoAlert';
import FourElements from './components/widgets/FourElements';
export default function Home() {
  return (

     <><Heroone />
     
     <InfoAlert />

    <FourElements />
     
    
     </>

  );
}
