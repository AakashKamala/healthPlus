import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [doctors,setDoctors]=useState([]);
    const [patients,setPatients]=useState([]);


    const getDoctors=async()=>{
        try {
            const response=await fetch("http://localhost:7000/api/data/doctors",{
                method:"GET",
            });
            if(response.ok){
                const data=await response.json();
                setDoctors(data.msg);
            }
        } catch (error) {
            console.log(`doctors frontend error: ${error}`);
        }
    }

    const getPatients=async()=>{
        try {
            const response=await fetch("http://localhost:7000/api/form/patientform",{
                method:"GET",
            });
            if(response.ok){
                const data=await response.json();
                setPatients(data.msg);
            }
        } catch (error) {
            console.log(`patients frontend error: ${error}`);
        }
    }

    useEffect(()=>{
        getDoctors();
        getPatients();
    },[]);

    return <AuthContext.Provider value={{
        doctors,
        patients}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}

