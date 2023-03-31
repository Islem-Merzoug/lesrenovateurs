import React, { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

const WaitingSpinner = (props) => {
  const [showSpinner, setShowSpinner] = useState(props.propValue.data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(showSpinner);
    }, 500); // show spinner after half a second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSpinner && (
        <div >
          <Circles/>
        </div>
      )}
    </div>
  );
};

export default WaitingSpinner;
