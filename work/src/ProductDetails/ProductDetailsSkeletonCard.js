import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './ProductDetails.css'

const ProductDetailsSkeletonCard = () => {
    return (
        <div className="productdetails">
            <div className="prod__title">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <h2>
                        <Skeleton count={1} height={50} width={150} />
                    </h2>
                </SkeletonTheme>
            </div>
            <div className="prod">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="prod__left">
                    <Skeleton style={{ marginTop: 50 }} count={1} height={300} width={550} />
                </div>
                </SkeletonTheme>
            </div>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="prod__content">
                    <Skeleton style={{ marginTop: 50 }} count={1} height={300} width={1200} />
                </div>
            </SkeletonTheme>
            <SkeletonTheme color="#202020" highlightColor="#444">
                <div className="pimg_gallery_1">
                    <Skeleton style={{ marginTop: 20 }} count={1} height={500} width={1200} />
                </div>
            </SkeletonTheme>


        </div>
    )
}

export default ProductDetailsSkeletonCard
