import React from 'react'
import './Portfoliopage.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PortfolioPageSkeletonCard = () => {
    return (
        <div className="portfoliopage">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <h2 className="about-title">
                    <Skeleton count={1} height={50} width={250} />
                </h2>

            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="cards">
                    <Skeleton style={{  marginTop: 50 }} count={2} height={300} width={550} />
                </div>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="cards">
                    <Skeleton style={{  marginTop: 20 }} count={2} height={300} width={550} />
                </div>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="cards">
                    <Skeleton style={{  marginTop: 20 }} count={2} height={300} width={550} />
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default PortfolioPageSkeletonCard

