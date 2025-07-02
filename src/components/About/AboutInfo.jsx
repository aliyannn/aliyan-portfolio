import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function AboutInfo() {
    let year = new Date().getFullYear();
    let startingYear = 2022
    let experience = year - startingYear
    return (
        <div className='text-xl leading-10'>
            <p>
                Hi, I am <em className='spanText'>Aliyan Gohar</em> from <em className="spanText">Lahore, Pakistan. </em>
                I hold a BSc (hons) in Computer Sciences from University of Central Punjab (UCP).
                I've {experience} {experience === 1 ? 'year' : 'years'} of experience in Frontend Web Developemnt, I specialize in React.js and WordPress.

                <br />
                When I'm not building websites or writing code, I enjoy:

                <ul className='mt-2'>
                    <li className='flex items-center gap-2'>
                        <IoIosArrowForward /> Pc Games
                    </li>
                    <li className='flex items-center gap-2'>
                        <IoIosArrowForward /> Cricket
                    </li>
                    <li className='flex items-center gap-2'>
                        <IoIosArrowForward /> Exploring new places and ideas
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default AboutInfo