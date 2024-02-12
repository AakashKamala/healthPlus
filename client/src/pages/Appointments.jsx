import { useState } from "react";
import MedAPI from "./medAPI.jsx";
import Med from "./Med";

const Appointments = () => {

  const [medData,setMedData]=useState(MedAPI);

  return (
    <>
      <Med medData={medData}/>
    </>
  );
};

export default Appointments;
