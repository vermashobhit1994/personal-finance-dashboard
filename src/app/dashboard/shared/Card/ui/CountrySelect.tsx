"use client";

import { useCountrySelect } from '../../hooks/useCountrySelect';

export function CountrySelect() {
    const {countryNameList, changeCurrencySymbol} = useCountrySelect();
    return (
        <>
            {
                (countryNameList?.length !== 0) && (
                    <select onChange={changeCurrencySymbol}>
                        <option hidden>Select country</option>
                        {countryNameList.map((country) => (
                            <option key={country.id} value={country.name}>{country.name}</option>
                        ))}
                    </select>
                )
            }
        </>


    )
}
