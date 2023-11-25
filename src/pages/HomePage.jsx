import styled from "styled-components";
import SearchForm from "../components/searchForm/SearchForm";

export function HomePage() {
    

    return (
        <Container>
            <SearchForm/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    width: 100dvw;
`