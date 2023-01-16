import Footer from './Footer';
import Header from './Header';



const Layout = (props) => {
    return(
        <div className="Layout">
            <Header/>
          
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;