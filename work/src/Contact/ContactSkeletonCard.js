import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Contact.css'
const ContactSkeletonCard = () => {
    return (
        <div className="contact">
            <div className="contact__left">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <h2 className="contact-title">
                        <Skeleton count={1} height={50} width={150} />
                    </h2>
                   
                </SkeletonTheme>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <p className="para-content">
                        <Skeleton count={1} height={250} width={450} />

                    </p>
                </SkeletonTheme>
            </div>
            <div className="contact__right">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <h2 style={{ marginBottom: 50 }}className="contact-title">
                        <Skeleton count={1} height={50} width={150} />
                    </h2>
                </SkeletonTheme>
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <p style={{marginLeft:50}} className="para-content">
                        <Skeleton count={1} height={250} width={550} />

                    </p>
                </SkeletonTheme>


            </div>

        </div>
    )
}

export default ContactSkeletonCard
