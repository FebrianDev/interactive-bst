import React from 'react';
import { Link } from "react-router-dom";
import hero from "../../assets/undraw_code_inspection_bdl7.png"

export default function () {
    return(
        <section id={'home'} className={'pt-36'}>
            <div className="container">
                <div className="flex flex-wrap">

                    {/*Section Left*/}
                    <div className="w-full px-4 mt-20 lg:w-1/2">
                        <h1 className={'block font-bold text-dark text-4xl mb-2'}>Interactive Binary Search Tree</h1>
                        <p className={'font-medium text-secondary mb-5 leading-relaxed'}>I'm Game Technology Student at Electronic Engineering Polytechnic Institute of Surabaya. I have an interest in Web Development, Android Development, & Game Development

                            technology</p>

                        <div className="flex items-center mb-10 mt-4">

                        </div>

                        <Link to={'/dashboard'}><span
                            className={'text-base font-semibold text-white bg-primary py-3 border border-primary px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'}>Dashboard</span></Link>
                        <Link to={'/dashboard'}><span
                            className={'text-base font-semibold ml-2 text-primary bg-white shadow-xl py-3 px-8 rounded-full hover:shadow-2xl border border-primary hover:opacity-80 transition duration-300 ease-in-out'}>Guidance</span></Link>

                    </div>

                    {/*    Section Right*/}
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <img src={hero} width={720} height={720} className={'max-w-full mx-auto'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
