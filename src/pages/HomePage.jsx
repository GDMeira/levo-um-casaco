import { useState } from "react"
import styled from "styled-components"
import useCep from "../hooks/api/useCep";
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export function HomePage() {
    const [cep, setCep] = useState('');
    const { address, cepLoading, cepError, getCep } = useCep();
    const MySwal = withReactContent(Swal)

    async function handleSubmit(e) {
        e.preventDefault();

        const address = await getCep(cep);

        if (address.logradouro) {
            Swal.fire({
                title: 'Sucesso!',
                didOpen: () => {
                    Swal.isLoading(cepLoading);
                },
                icon: 'success',
                text: `${address.logradouro}, ${address.localidade}-${address.uf}`
            })
        } else {
            Swal.fire({
                title: 'Falha!',
                didOpen: () => {
                    Swal.isLoading(cepLoading);
                },
                icon: "error",
                text: 'CEP inválido.'
            })
        }
        
        
    }

    return (
        <Container>
            <h1>Busca CEP</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="12345678"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                />
                <button>Procurar</button>
            </form>
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