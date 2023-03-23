import React from 'react'
import Image from 'next/image'
import Hero from './hero'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div id="top-bar" className="top-bar">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-md-8">
                      <ul className="top-info text-center text-md-left">
                          <li><i className="fas fa-map-marker-alt"></i> <p className="info-text">Prevics Terrazo & General Hardware Ltd, Eastern Bypass, Nairobi, Kenya</p>
                          </li>
                      </ul>
                  </div>
                  {/* <!--/ Top info end --> */}

                  <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                      <ul className="list-unstyled">
                          <li>
                              <Link title="Facebook" href="/">
                                  <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                              </Link>
                              <Link title="Twitter" href="/">
                                  <span className="social-icon"><i className="fab fa-twitter"></i></span>
                              </Link>
                              <Link title="Instagram" href="/">
                                  <span className="social-icon"><i className="fab fa-instagram"></i></span>
                              </Link>
                          </li>
                      </ul>
                  </div>
                  {/* <!--/ Top social end --> */}
              </div>
          </div>
      </div>
          {/* // <!--/ Topbar end -->
          // <!-- Header start --> */}
          <header id="header" className="header-one">
              <div className="bg-white">
                  <div className="container">
                      <div className="logo-area">
                          <div className="row align-content-center">
                              <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                                  <a className="d-block" href="index.html">
                                      {/* <Image width={100} height={100} loading="lazy" src="" alt="Constra" /> */}
                                        {/* <Image
                                            // loader={myLoader}
                                            src="/images/logo.png"
                                            alt="prevics"
                                            width={500}
                                            height={500}
                                        /> */}
                                        <i className="fa-light fa-helmet-safety"></i>
                                        <h3>Prevics Terrazo</h3>
                                    </a>
                              </div>
                              {/* <!-- logo end --> */}

                              <div className="col-lg-9 header-right">
                                  <ul className="top-info-box">
                                      <li>
                                          <div className="info-box">
                                              <div className="info-box-content">
                                                  <p className="info-box-title">Call Us</p>
                                                  <p className="info-box-subtitle">(+254) 747-291-435</p>
                                              </div>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="info-box">
                                              <div className="info-box-content">
                                                  <p className="info-box-title">Email Us</p>
                                                  <p className="info-box-subtitle">previcsterrazo@gmail.com</p>
                                              </div>
                                          </div>
                                      </li>
                                      {/* <li className="last">
                                          <div className="info-box last">
                                              <div className="info-box-content">
                                                  <p className="info-box-title">Global Certificate</p>
                                                  <p className="info-box-subtitle">ISO 9001:2017</p>
                                              </div>
                                          </div>
                                      </li> */}
                                      <li className="header-get-a-quote">
                                          <a className="btn btn-primary" href="contact.html">Get A Quote</a>
                                      </li>
                                  </ul>
                                  {/* <!-- Ul end --> */}
                              </div>
                              {/* <!-- header right end --> */}
                          </div>
                          {/* <!-- logo area end --> */}

                      </div>
                      {/* <!-- Row end --> */}
                  </div>
                  {/* <!-- Container end --> */}
              </div>

              <div className="site-navigation">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                      <span className="navbar-toggler-icon"></span>
                                  </button>

                                  <div id="navbar-collapse" className="collapse navbar-collapse">
                                      <ul className="nav navbar-nav mr-auto">
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/">
                                                Home
                                            </Link>
                                        </li>
                                          <li className="nav-item dropdown">
                                              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Company <i className="fa fa-angle-down"></i></a>
                                              <ul className="dropdown-menu" role="menu">
                                                  <li><Link href="/">About Us</Link></li>
                                                  <li><Link href="/">Our People</Link></li>
                                                  <li><Link href="/">Testimonials</Link></li>
                                                  <li><Link href="/">Faq</Link></li>
                                                  <li><Link href="/">Pricing</Link></li>
                                              </ul>
                                          </li>

                                          <li className="nav-item dropdown">
                                              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Projects <i className="fa fa-angle-down"></i></a>
                                              <ul className="dropdown-menu" role="menu">
                                                  <li><Link href="/">Projects All</Link></li>
                                                  <li><Link href="/">Projects Single</Link></li>
                                              </ul>
                                          </li>

                                          <li className="nav-item dropdown">
                                              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services <i className="fa fa-angle-down"></i></a>
                                              <ul className="dropdown-menu" role="menu">
                                                  <li><Link href="/">Services All</Link></li>
                                                  <li><Link href="/">Services Single</Link></li>
                                              </ul>
                                          </li>

                                          <li className="nav-item dropdown">
                                              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                                              <ul className="dropdown-menu" role="menu">
                                                  <li><Link href="/">Typography</Link></li>
                                                  <li><Link href="/">404</Link></li>
                                                  <li className="dropdown-submenu">
                                                      <Link href="/" className="dropdown-toggle" data-toggle="dropdown">Parent Menu</Link>
                                                      <ul className="dropdown-menu">
                                                          <li><a href="#!">Child Menu 1</a></li>
                                                          <li><a href="#!">Child Menu 2</a></li>
                                                          <li><a href="#!">Child Menu 3</a></li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li className="nav-item dropdown">
                                              <Link href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">News <i className="fa fa-angle-down"></i></Link>
                                              <ul className="dropdown-menu" role="menu">
                                                  <li><Link href="/">News Left Sidebar</Link></li>
                                                  <li><Link href="/">News Right Sidebar</Link></li>
                                                  <li><Link href="/">News Single</Link></li>
                                              </ul>
                                          </li>

                                          <li className="nav-item">
                                            <Link className="nav-link" href="contact">
                                                Contact
                                            </Link>
                                        </li>
                                      </ul>
                                  </div>
                              </nav>
                          </div>
                      </div>
                     

                      <div className="nav-search">
                          <span id="search"><i className="fa fa-search"></i></span>
                      </div>
                      {/* <!-- Search end --> */}

                      <div className="search-block" style={{display: "none"}}>
                          <label htmlFor="search-field" className="w-100 mb-0">
                              <input type="text" className="form-control" id="search-field" placeholder="Type what you want and enter" />
                            </label>
                          <span className="search-close">&times;</span>
                      </div>
                      {/* <!-- Site search end --> */}
                  </div>
                  {/* <!--/ Container end --> */}

              </div>
              {/* <!--/ Navigation end --> */}
          </header>
          {/* <Hero /> */}
        </>
  )
}

export default Header