import React, { useEffect, useState } from 'react'
import { bubble as Menu } from 'react-burger-menu'
// import { Sidebar, Item } from 'react-sidebar-ui'
import './NavBar.css'

const NavBar = () => {
    const url = 'https://dpavaman.github.io/portfolio/'
    const [menuStatus, setMenuStatus] = useState(true)

    useEffect(() => {
        setMenuStatus(false);
    }, [menuStatus])


    return (
        <Menu width={300} isOpen={menuStatus} customBurgerIcon={
            <div className='myBurger'>
                <div class="bm-burger-bars" style={{ position: "absolute", height: "20%", left: "0px", right: "0px", top: "0%", opacity: "1" }}></div>
                <div class="bm-burger-bars" style={{ position: "absolute", height: "20%", left: "0px", right: "0px", top: "40%", opacity: " 1" }}></div>
                <div class="bm-burger-bars" style={{ position: "absolute", height: "20%", left: "0px", right: "0px", top: "80%", opacity: "1" }}></div>
            </div>
        }  >
            <button onClick={(e) => {
                e.preventDefault();
                window.location.replace(`${url}#home`)
                setMenuStatus(!menuStatus)
            }} id="goToHome" className="menu-item"  >Home</button>

            <button onClick={(e) => {
                e.preventDefault();
                window.location.replace(`${url}#about`)
                setMenuStatus(!menuStatus)
            }} id="goToAbout" className="menu-item"  >About</button>

            <button onClick={(e) => {
                window.location.replace(`${url}#skills`)
                setMenuStatus(!menuStatus)
                // e.dispatchEvent(new KeyboardEvent('keypress', { 'key': 'esc' }));
            }} id="goToSkills" className="menu-item"  >Skills</button>

            <button onClick={(e) => {
                e.preventDefault();
                window.location.replace(`${url}#projects`)
                setMenuStatus(!menuStatus)
            }} id="goToProjects" className="menu-item"  >Projects</button>

            <button onClick={(e) => {
                e.preventDefault()
                window.location.replace(`${url}#contact`)
                setMenuStatus(!menuStatus)
            }} id="goToContact" className="menu-item"  >Contact Me</button>

        </Menu>
    )
}

export default NavBar















// import React, { Fragment } from 'react'
// import { Nav } from 'react-bootstrap'
// import Navbar from 'react-bootstrap/Navbar'
// import './NavBar.css'

// const NavBar = () => {
//     return (
//         <Fragment>
//             <Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark" className='animate-navbar nav-theme justify-content-betweek' >
//                 <Nav.Link href='#home'> <h2 className='myName'>Pavaman Dabeer</h2> </Nav.Link>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ml-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#about">About me </Nav.Link>
//                         <Nav.Link href="#skills">Skills</Nav.Link>
//                         <Nav.Link href="#projects">Projects</Nav.Link>
//                         <Nav.Link href="#contact">Contact me</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </Fragment>
//     )
// }

// export default NavBar