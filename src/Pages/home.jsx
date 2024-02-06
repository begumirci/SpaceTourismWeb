import Header from '../assets/components/header';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <div className='container'>
        <div className='home-main'>
          <div className='space'>
            <h1>SO, YOU WANT TO TRAVEL TO</h1>
            <h2>SPACE</h2>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className='explore'>
            <span>EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
