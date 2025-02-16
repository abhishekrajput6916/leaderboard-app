import React, { useRef, useEffect } from 'react';

function Map({ className }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the map when the container is in view
            loadMap();
            observer.unobserve(mapElement);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(mapElement);

    return () => {
      observer.unobserve(mapElement);
    };
  }, []);

  const loadMap = () => {
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958915675!2d75.69903607352784!3d22.72420499694239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1739303933683!5m2!1sen!2sin`;

    mapRef.current.appendChild(iframe);
  };

  return (
    // <div className={className}>
    //   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958915675!2d75.69903607352784!3d22.72420499694239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1739303933683!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
    // </div>
    <div ref={mapRef} className={className}> {/* Placeholder content or loading indicator */}    <div className='absolute text-white flex items-center justify-center font-bold tracking-widest inset-0 bg-black/80 -z-10'>Loading map...</div>    </div>
  )
}

export default Map