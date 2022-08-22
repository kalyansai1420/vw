import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SkeletonCard from './SkeletonCard'
import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Data from './Data'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import HomeSkeletonCard from './Home/HomeSkeletonCard';
import NavBar from './Nav/NavBar';
import ProductDetails from './ProductDetails/ProductDetails';
import Portfoliopage from './PortfolioPage/Portfoliopage';
import AboutSkeletonCard from './About/AboutSkeletonCard';
import PortfolioSkeletonCard from './Portfolio/PortfolioSkeletonCard';
import ScrollToTop from './ScrollToTop';
import Copyright from './Footer/Copyright';
import ContactPage from './ContactPage/ContactPage';
import { Media } from 'react-breakpoints'
import Circleloader from './Circleloader';
import Cursor from './cursor/Cursor';
import ContactSkeletonCard from './Contact/ContactSkeletonCard';
import PortfolioPageSkeletonCard from './PortfolioPage/PortfolioPageSkeletonCard';
import ProductDetailsSkeletonCard from './ProductDetails/ProductDetailsSkeletonCard';
import TawkTo from "tawkto-react";

const App = () => {

  useEffect(() => {
    var tawk = new TawkTo("630300a437898912e9645892", "1gb1rl17o");

    tawk.onStatusChange((status) => {
      console.log(status);
    });
  }, []);



  const [portfolio, setPortfolio] = useState([]);
  const [homeloading, setHomeloading] = useState(false);
  useEffect(() => {
    setHomeloading(true);
    const timing = setTimeout(() => {
      setPortfolio(Data);
      setHomeloading(false);
    }, 3500);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div className="app">
      <Router>
        <Cursor/>
        <ScrollToTop/>
        {homeloading &&
              <Media>
                {({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                    <Circleloader/>
                  ) : (
                    <Circleloader />
                  )
                }
              </Media>
            }
            {!homeloading && <NavBar />}
        
        <Switch>
          
          <Route path="/portfolio/productDetails">
            {homeloading &&
              <Media>
                {({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                    <Circleloader/>
                  ) : (
                    <Circleloader />
                  )
                }
              </Media>
            }
            {!homeloading && <ProductDetails />}
            
          </Route>
          <Route path="/portfolio">
            {homeloading &&
              <Media>
                {({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                  <Circleloader />
                  ) : (
                    <Circleloader />
                  )
                }
              </Media>
            }
            {!homeloading && portfolio.map((list, index) => {
              return (
                <div key={index}>
                  <Portfoliopage list={list} />
                </div>
              );
            })}
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            {/****** Home ******/}
            {homeloading &&
              <Media>
                {({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                  <Circleloader />
                  ) : (
                    <Circleloader />
                  )
                }
              </Media>
            }
            {!homeloading && <Home />}

            {/****** About ******/}

            {homeloading &&
              <Media>
                {({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                  <Circleloader />
                  ) : (
                    <Circleloader />
                  )
                }
              </Media>
            }
            {!homeloading && <About />}

            {/****** Portfolio ******/}
            {homeloading &&              
              <Media>
                {({ breakpoints, currentBreakpoint }) =>
                  breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                  <Circleloader />
                  ) : (
                    <Circleloader />
                  )
                }
              </Media>
            }
            {!homeloading && portfolio.map((list, index) => {
              return (
                <div key={index}>
                  <Portfolio list={list} />
                </div>
              );
            })}
            {/****** Contact ******/}
            {homeloading && <Media>
              {({ breakpoints, currentBreakpoint }) =>
                breakpoints[currentBreakpoint] > breakpoints.desktop ? (
                  <Circleloader />
                ) : (
                  <Circleloader />
                )
              }
            </Media>}
            {!homeloading && <Contact/> }
          </Route>
        </Switch>
        <Footer />
      </Router>
      <Copyright/>



    </div>
  );
}

export default App;
