import { useRef, useState } from "react";
import { Button, Flex, Portal } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Swal from "sweetalert2";

export default function SearchForm() {
    const [searchCitiesResult, setSearchCitiesResult] = useState([]);
    const [showPortal, setShowPortal] = useState(false);
    const ref = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        setShowPortal(false);

        if (searchCitiesResult.length === 0) {
            Swal.fire({
                title: 'Erro',
                icon: 'error',
                text: 'Cidade não encontrada.'
            })
        }
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
                                onClick={e => handleSubmit(e)}
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