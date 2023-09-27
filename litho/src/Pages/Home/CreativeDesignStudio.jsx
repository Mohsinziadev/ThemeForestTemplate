import React, { lazy } from 'react'

// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax';
import { m } from "framer-motion";
import { Link as ScrollTo } from "react-scroll"

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import { fadeIn, fadeInLeft } from '../../Functions/GlobalAnimations';
import Buttons from '../../Components/Button/Buttons'
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import CustomModal from '../../Components/CustomModal'
import SideButtons from "../../Components/SideButtons";

import Services from '../../Components/Services/Services';
import BlogGrid from '../../Components/Blogs/BlogGrid';
import { blogData } from "../../Components/Blogs/BlogData";
import { ClientData01 } from '../../Components/Clients/ClientsData';
import Clients from '../../Components/Clients/Clients';
import FooterStyle07 from '../../Components/Footers/FooterStyle07';



const serviceData = [
  {
    img: "https://litho.themezaa.com/wp-content/webp-express/webp-images/uploads/2020/02/our-story-img12.jpg.webp",
    icon: "ti-arrow-right",
    title: "Professional liability",
    content: "Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
    linkTitle: "More info",
    link: "/page/what-we-offer"
  },
  {
    img: "https://litho.themezaa.com/wp-content/webp-express/webp-images/uploads/2020/02/our-story-img11.jpg.webp",
    icon: "ti-arrow-right",
    title: "Dedicated to our clients",
    content: "Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
    linkTitle: "More info",
    link: "/page/what-we-offer"
  },
  {
    img: "https://litho.themezaa.com/wp-content/webp-express/webp-images/uploads/2020/02/our-story-img13.jpg.webp",
    icon: "ti-arrow-right",
    title: "Outstanding services",
    content: "Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna.",
    linkTitle: "More info",
    link: "/page/what-we-offer"
  }
]

const blogGridData = blogData.filter((item) => item.blogType === "grid");

const WhatWeOfferPage = (props) => {

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav theme="dark" expand="lg" className="py-[0px] lg:px-[15px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />

              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          <Col className="col-auto text-right pe-0">
            <SearchBar className="pr-0 xs:pl-[15px]" />
            <HeaderLanguage className="xs:pl-[15px]" />
            <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
          </Col>
        </HeaderNav>
      </Header>
      {/* Header End */}
      {/* <SideButtons /> */}
      {/* Parallax Scrolling Start */}
      <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] overflow-hidden relative">
        <Parallax className="lg-no-parallax h-[100vh] w-full bg-cover bg-top cover-background absolute top-[0px] left-0 lg:h-[700px] lg:-top-[100px] md:h-[650px] sm:h-[550px] xs:h-[420px] xs:-top-[70px]" translateY={[-40, 40]} style={{ backgroundImage: `url(https://litho.themezaa.com/wp-content/uploads/2020/02/what-we-offers-bg-1.jpg)` }}></Parallax>
        <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div>
        <Container className="h-full relative xs:px-[15px]">
          <Row className="justify-center h-full">
            <Col xl={6} lg={7} md={8} className="relative font-serif text-center text-white flex justify-center flex-col">
              <h1 className="opacity-60 mb-[20px] text-xmd leading-[20px]">What we offers</h1>
              <h2 className="font-medium -tracking-[1px] mb-0">we are a creative design studio</h2>
            </Col>
            <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block -translate-x-1/2 cursor-pointer">
              <i className="ti-arrow-down text-lg leading-none text-white bg-[rgba(0,0,0,0.7)] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <m.section id="about" className="py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px] overflow-hidden" {...fadeIn}>
        <Container>
          <Row className="items-center">
            <Col md={6} className="relative sm:mb-[30px]">
              <img src="https://litho.themezaa.com/wp-content/webp-express/webp-images/uploads/2020/02/what-we-offers-01.jpg.webp" className="rounded-[5px] w-full" height="564" width="390" alt="what-we-offers" />
              {/* Modal Component Start */}
              <CustomModal.Wrapper
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                modalBtn={<Buttons type="submit" className="btn-sonar border-0" themeColor={["#b27cfd", "#ff9393"]} color="#fff" size="lg" title={<i className="icon-control-play" />} />} >
                <div className="w-[1020px] max-w-full relative rounded mx-auto">
                  <div className="fit-video">
                    <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                  </div>
                </div>
              </CustomModal.Wrapper>
              {/* Modal Component End */}

            </Col>
            <Col lg={{ span: 5, offset: 1 }} md={6} >
              <h5 className="font-serif font-medium text-darkgray w-[90%]">Litho is meant to simplify the website building</h5>
              <p className="w-[85%] mb-[25px] lg:w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="mt-[15px] sm:mt-0 inline-block">
                <Buttons to="/page/who-we-are" className="mr-[24px] font-medium rounded-none font-serif uppercase hover:text-darkgray btn-slide-filling-right bg-gradient-to-r from-darkgray to-darkgray sm:mr-[20px] xs:mr-[8px]" size="md" color="#fff" themeColor="#fff" title="Discover Litho" />
                <Buttons to="/page/about-us" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" size="md" color="#232323" themeColor="#232323" title="Read more" />
              </div>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}


      {/* Section Start */}
      <section className="py-[130px] lg:py-[95px] md:py-[70px] sm:py-[50px]py-[130px] sm:py-[50px] bg-lightgray">
        <Container>
          <Row className="justify-center">
            <Col md={6} className="col-12 text-center mb-[4.5rem]">
              <span className="font-serif mb-[10px] block uppercase text-md font-medium">WHAT WE OFFER SERVICES</span>
              <h5 className="font-serif text-darkgray font-medium -tracking-[1px] mb-[15px]">Amazing performance</h5>
            </Col>
          </Row>
          <Services grid="row-cols-1 row-cols-lg-3 row-cols-md-2 justify-center gap-y-10 sm:gap-y-[15px]" theme='service-style-02' className="" data={serviceData} animation={fadeIn} />
        </Container>
      </section>
      {/* Section End */}


      {/* section Start */}
      <m.section className="bg-darkgray py-[55px] lg:py-[95px] md:py-[75px] sm:py-[50px] bg-no-repeat bg-[bottom_240px_right_-10px] md:bg-right-bottom" style={{ backgroundImage: `url(/assets/img/webp/litho-react-landing-page-img-05.webp)` }} {...fadeIn}>
        <Container fluid>
          <Row className="items-center justify-center">
            <Col xs="auto" className="-ml-[12vw] md:ml-0">
              <img loading="lazy" width="" height="" className="xl:w-[700px] lg:w-[500px] md:mx-auto" src="/assets/img/webp/litho-react-landing-page-img-04.webp" alt="" />
            </Col>
            <Col xxl={3} lg={4} sm={8} xs={11} className="md:text-center pl-[35px] xl:pl-[10px]">
              <span className="font-serif font-semibold text-xmd text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase inline-block -tracking-[.5px] mb-[20px] sm:mb-[10px]">react router for easy routing</span>
              <h2 className="heading-4 font-serif font-medium text-lightgray -tracking-[2px] xs:-tracking-[.5px] mb-[3.5rem] w-[84%] lg:w-full sm:mb-10">React router is a standard library for routing in react.</h2>
              <p className="text-xmd leading-[32px] w-[90%] mb-0 lg:w-full">Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the when an unknown printer took specimen book. </p>
              <Buttons to="/home-seo-agency" className="mt-16 btn-fill tracking-[1px] font-medium font-serif rounded-none uppercase md:mb-[15px]" themeColor="#fff" color="#232323" size="lg" title="Discover more" />
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* section End */}


      {/* section Start */}
      <m.section className="relative pt-[190px] pb-[240px] overflow-hidden xl:bg-[length:900px] lg:py-[130px] lg:bg-[length:700px] md:bg-top md:bg-contain md:pb-[95px] md:pt-[60%] sm:pb-[50px] bg-gradient-to-b from-[#f4f5f9] to-transparent" {...fadeIn}>
        <div className="absolute top-0 left-0 h-full w-full bg-[right_-40px_center] bg-no-repeat xl:bg-[length:900px] lg:bg-[length:700px] md:bg-top md:bg-contain" style={{ backgroundImage: "url(/assets/img/webp/litho-react-landing-page-img-06.webp)" }}></div>
        <Container className="relative">
          <Row className="items-center justify-start md:justify-center">
            <Col lg={5} md={8} className="md:text-center">
              <span className="font-serif font-semibold text-xmd text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase inline-block -tracking-[.5px] mb-[20px] sm:mb-[10px]">formik for form validation</span>
              <h2 className="heading-4 font-serif font-medium text-darkgray -tracking-[2px] xs:-tracking-[.5px] w-[95%] mb-12 lg:w-full sm:mb-10">Formik is third party react form library.</h2>
              <p className="text-xmd leading-[32px] w-[90%] mb-0 lg:w-full">Lorem ipsum is simply dummy text of the printing and typedsetting industry. lorem has been the industry's standard dummy text ever since the when an unknown printer took specimen book.</p>
              <Buttons to="/elements/contact-form" target="_blank" className="mt-12 btn-fill tracking-[1px] font-medium font-serif rounded-none uppercase" themeColor="#232323" color="#fff" size="lg" title="Discover more" />
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* section End */}


      {/* Section Start */}
      <section className="bg-[#f4f5f9] py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-center text-center">
            <Col className="mb-[56px]">
              {/* <span className="mb-[5px] text-[#969896] tracking-[1px] font-serif uppercase block">Latest blog</span> */}
              <h2 className="heading-5 font-semibold text-darkgray font-serif">Customer Benefits: Why Choose Us</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <BlogGrid grid="blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data={blogGridData.slice(1, 4)} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}


      {/* Section Start */}
      <section className="py-[100px] lg:py-[95px] md:py-[80px] sm:py-[50px] xs:py-[50px]">
        <Container>
          <Clients
            grid="row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2"
            theme="client-logo-style-01"
            data={ClientData01.slice(0, 4)}
            animation={fadeIn}
          />
        </Container>
      </section>
      {/* Section End */}



      {/* Section Start */}
      <m.section className="relative" {...fadeIn}>
        <div style={{ backgroundImage: "url('https://litho.themezaa.com/wp-content/uploads/2020/09/home-corporate-img-05.jpg')" }} className="mxl:bg-cover py-[100px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px] bg-fixed lg:bg-cover lg:bg-local lg:bg-center" >
          <div className="left-0 top-0 h-full w-full absolute bg-darkslateblue opacity-75"></div>
          <Container className="relative">
            <Row className="justify-center items-center">
              <Col xl={7} md={8} sm={10} className="md:mb-[30px] sm:mb-[30px]">
                <h2 className="heading-4 font-serif font-semibold text-white mb-0 sm:text-center">
                  Gearing your company through an Innovative strategy
                </h2>
              </Col>
              <Col xl={5} md={4} className="md:flex md:justify-center text-end">
                {/* <Buttons
                  to="/"
                  className="font-medium font-serif uppercase rounded-none"
                  themeColor={["#2ed47c", "#e8a626"]}
                  size="lg"
                  color="#fff"
                  title="Download litho"
                /> */}
                <button
                  className=" bg-transparent text-white font-semibold capitalize py-2 px-10 border border-white  transition-colors duration-300 group hover:!bg-white hover:!text-black"
                >
                  Download litho
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </m.section>
      {/* Section End */}



      {/* Section Start */}
      <FooterStyle07 className="bg-[#262b35] text-slateblue" logo="https://litho.themezaa.com/wp-content/uploads/2020/10/logo-gradient-sky-blue-pink-white@2x.png" theme="dark" />
      {/* Section End */}
    </div>
  )
}

export default WhatWeOfferPage