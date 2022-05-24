import NavbarComponent from '../shared/NavbarComponent';
import FooterComponent from '../shared/FooterComponent';

function MainLayout({children}) {
  return (
    <>
        <NavbarComponent/>
        {children}
        <FooterComponent/>
    </>
  )
}

export default MainLayout