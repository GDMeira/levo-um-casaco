import { useRef, useState } from "react";
import { Button, Flex, Portal } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Swal from "sweetalert2";
import useWeather from "../../hooks/api/useWeather";

export default function SearchForm({ setWeatherInfo }) {
    const [searchCitiesResult, setSearchCitiesResult] = useState([]);
    const [showPortal, setShowPortal] = useState(false);
    const ref = useRef();
    const { getWeather } = useWeather();

    async function handleSubmit(e, city = {}) {
        e.preventDefault();
        setShowPortal(false);

        if (searchCitiesResult.length === 0) {
            Swal.fire({
                title: 'Erro',
                icon: 'error',
                text: 'Cidade não encontrada.'
            });

            return
        }

        if (!city.name) {
            city = searchCitiesResult[0];
        }

        const weatherInfo = await getWeather(city.lat, city.lon);
        setWeatherInfo(weatherInfo);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (<>
        <h1>Busca cidade</h1>
        <form
            ref={ref}
            onKeyDown={e => handleKeyPress(e)}
            onSubmit={e => handleSubmit(e)}
        >
            <SearchInput searchCitiesResult={searchCitiesResult} setSearchCitiesResult={setSearchCitiesResult} setShowPortal={setShowPortal} />
        </form>

        {
            (searchCitiesResult.length > 0 && showPortal) && (
                <Portal containerRef={ref}>
                    <Flex direction={'column'}>
                        {searchCitiesResult.map((city, i) => (
                            <Button
                                key={i}
                                onClick={e => {
                                    handleSubmit(e, city);
                                }}
                            >
                                {city.name}, {city.state}
                            </Button>
                        ))}
                    </Flex>
                </Portal>
            )
        }
    </>)
}