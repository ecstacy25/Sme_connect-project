import React from 'react';
import Map from '../../assets/images/map.png';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';

const Contact = () => {
  return (
    <section className="mt-20 bg-gray-100 p-4 pl-40 bg-black ">
      <div className=" ">
        <div className=" text-white flex flex-row justify-space-evenly items-center mt-20 gap-80">
          <div className="">
            <h1 className="  text-5xl font-semibold mt-0 mb-4 pl-5">
              contacts
            </h1>
            <section>
              <div className="office flex items-center gap-2">
                <MdLocationPin className="icon icon_office text-white w-10 h-20" />
                <p className="para_office text-white text-lg w-64">
                  447 Broadway, 2nd floor suite #2281, New York
                </p>
              </div>
            </section>

            <div className="post grid grid-rows-3 gap-5">
              <section>
                <div className="email flex items-center gap-2">
                  <AiOutlineMail className="icon icon_email text-white w-10 h-20" />
                  <a
                    className="texta text-white text-lg"
                    href="mailto:emmanuel.alao@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    emmanuel.alao@gmail.com
                  </a>
                </div>
              </section>

              <section>
                <div className="phone flex items-center gap-2">
                  <HiPhone className="icon icon_phone text-white w-10 h-20" />
                  <a
                    className="textb text-white text-lg"
                    href="tel:+2347033348441"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +2347033348441
                  </a>
                </div>
              </section>
            </div>
          </div>

          <img className="place w-80 h-80 pt-0" src={Map} alt="location" />

        </div>
      </div>
    </section>
  );
};

export default Contact;
