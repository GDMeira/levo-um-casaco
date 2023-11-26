import styled from "styled-components";
import SearchForm from "../components/searchForm/SearchForm";
import { useState } from "react";

export function HomePage() {
    const [weatherInfo, setWeatherInfo] = useState(undefined);

    return (
        <Container>
            <SearchForm setWeatherInfo={setWeatherInfo} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    width: 100dvw;

    @media(max-width: 700px) {
        flex-direction: column;
    }
`