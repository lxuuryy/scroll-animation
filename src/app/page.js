import Image from "next/image";
import MainPage from "./MainPage";
import Lenis from 'lenis'


export default function Home() {


  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}, []);
  return (
    <main className="bg-gradient-to-br flex flex-col from-violet-900 to-black  ">
     <MainPage imageUrl='/vid1.mp4'  title='Colaborate' header='Built for all of us' text='We are a startup specializing in AI, dedicated to transforming industries through innovative and intelligent solutions. Our cutting-edge technology leverages the power of artificial intelligence to drive efficiency, enhance productivity, and unlock new possibilities. At our core, we are committed to excellence, pushing the boundaries of whats possible and delivering superior quality in every product we create.' click='Find Out More'/>
     <MainPage imageUrl='/vid2.mp4' title='Quality' header='Never Compromise'/>
     <MainPage imageUrl='/vid3.mp4' title='Modern' header='Dress for the best'/>
      <MainPage imageUrl='/vid4.mp4' title='Exellence' header='Superior Standards'/>
    </main>
  );
}
