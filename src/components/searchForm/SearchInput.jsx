import React, { useEffect, useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useGeocoding from "../../hooks/api/useGeocoding";
import { CiSearch } from "react-icons/ci";

export default function SearchInput({ searchCitiesResult, setSearchCitiesResult, setShowPortal }) {
    const { getGeoCoding } = useGeocoding();
    const [cityName, setCityName] = useState("");

    useEffect(() => {
        async function getData() {
            const geoCoding = await getGeoCoding(cityName)
            setSearchCitiesResult(geoCoding);
        }

        const delayDebounceFn = setTimeout(() => {
            setShowPortal(true);

            if (cityName.length > 3) {
                getData();
            }
        }, 600);

        return () => {
            clearTimeout(delayDebounceFn);
        };
    }, [cityName]);

    async function handleInputChange(e) {
        setCityName(e.target.value);
    }

    return (
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
                <CiSearch color='gray.300' />
            </InputLeftElement>
            <Input
                type="text"
                placeholder="procure por uma cidade"
                onChange={e => handleInputChange(e)}
                value={cityName}
                autoFocus
                isInvalid={cityName.length > 0 && searchCitiesResult.length === 0}
            />
        </InputGroup>
    );
};