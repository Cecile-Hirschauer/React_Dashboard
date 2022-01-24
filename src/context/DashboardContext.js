import React, {createContext, useState} from "react";
import fulldata from "./fulldata";

export const dashboardContext = createContext();

const DashboardContextProvider = props => {
    const [dataChart, setDataChart] = useState(fulldata['2020']);
    const [yearData, setYearData] = useState('2020');

    const changeYear = el => {
        setDataChart(fulldata[el.target.value]);
        setYearData(el.target.value);
    }

    return (
        <dashboardContext.Provider value={{changeYear, dataChart, yearData}}>
            {props.children}
        </dashboardContext.Provider>
    )
}

export default DashboardContextProvider;

