import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
  return (

    <div className='a'>
        <Header/>
      <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    <footer className='footer'>
        <div className="social-media-links">
            <i className="fab fa-facebook fa-4x"></i>
            {/* <i className="fa-brands fa-facebook"></i> */}
            <i className="fab fa-x-twitter fa-4x"></i>
            <a href='https://www.instagram.com/ideaforgeeeee?igsh=YmtpeW9ta3Nka3Fn'><i className="fab fa-instagram fa-4x"></i></a>
            {/* <a href='https://www.instagram.com/ideaforgeeeee?igsh=YmtpeW9ta3Nka3Fn'><i className="fa-brands fa-instagram"></i></a> */}
        </div>
        <p>Idea Forge &copy; 2024, All Rights Reserved</p>
    </footer>
    </div>

  );
}
