import React from 'react';
import HeroImage from '../assets/img/hero.svg';
import {HashLink as Link} from "react-router-hash-link";

function Hero() {
  return (
    <>
      <section className='bg-primary text-gray-700 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-textWhite'>
            Blockchain research, development, and services
            </h1>
            <p className='text-textWhite mb-8 leading-relaxed'>
            <span style={{fontWeight : "700"}}>Consenso Labs</span> is a blockchain research and development lab where we confront ourselves to solve some of the most challenging finance, legal and economical use cases by utilizing the cutting edge technology platforms to achieve efficiency and the consensus among the disparate parties.
            </p>
            <div className='flex justify-center'>
              <Link
                  to='/#services'
                  className='mr-5 hover:text-gray-900'
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                <button className='inline-flex text-textWhite bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  Read More
                </button>
              </Link>

            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={HeroImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
