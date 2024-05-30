// Contact.jsx

import React, { Component } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Contact extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
      ))
    );

    return (
      <section className="mt-20 bg-black-100 p-4 pl-40 bg-black ">
        <div className=" ">
          <div className="text-white flex flex-row justify-space-evenly items-center mt-20 gap-80">
            <div className="">
              <h1 className="text-5xl font-semibold mt-0 mb-4 pl-5 text-blue-900">contacts</h1>
              <section>
                <div className="office flex items-center gap-2">
                  <MdLocationPin className="icon icon_office text-white w-10 h-20" />
                  <p className="para_office text-white text-lg w-64">127 Obanikoro way, Ikeja, Lagos</p>
                </div>
              </section>

              <div className="post grid grid-rows-3 gap-5">
                <section>
                  <div className="email flex items-center gap-2">
                    <AiOutlineMail className="icon icon_email text-white w-10 h-20" />
                    <a
                      className="texta text-white text-lg"
                      href="mailto:ibiamjnr9@gmail.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      ibiamjnr9@gmail.com
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
                      +2347066026820
                    </a>
                  </div>
                </section>
              </div>
            </div>

            <div style={{ width: '400px', height: '400px' }}>
              <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
