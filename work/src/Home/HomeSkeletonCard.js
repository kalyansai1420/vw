import React from 'react'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';
import './Home.css'
const HomeSkeletonCard = () => {
    return (
        
        <div className="home">
            <div className="home__left">
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <a href="https://www.instagram.com" target="_blank">
                        <Skeleton count={1} height={40} width={40} />
                    </a>
                </SkeletonTheme>
                <br/>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <a href="https://www.google.com/search?q=vennelaworks&oq=vennelaworks&aqs=chrome.0.69i59j46i13i175i199i275j69i60l2j69i61j69i60.10775j0j7&sourceid=chrome&ie=UTF-8" target="_blank">

                        <Skeleton count={1} height={40} width={40} />

                    </a>
                </SkeletonTheme>
                <br />
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <a href="https://www.facebook.com" target="_blank">
                   
                        <Skeleton count={1} height={40} width={40} />

                    </a>
                </SkeletonTheme>
                <br />
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <a href="tel:+919618606060" target="_blank">

                        <Skeleton count={1} height={40} width={40} />
                
                    </a>
                </SkeletonTheme>
            </div>
            <div className="home__right">
                <SkeletonTheme  color="#202020" highlightColor="#444">
                    <h1>
                        <Skeleton className="ske_home_h1" count={1} height={45} width={700} />
                    </h1>
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default HomeSkeletonCard
