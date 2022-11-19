import { useRecoilState } from "recoil"
import { slideCounterState } from "../atoms/slideState";

const useUpdateNewsIndex = () => {
    const [, setCurrentIndex] = useRecoilState(slideCounterState);    
    //funcao anonima recebe os argumentos dos eventos ocorridos no componente.
    return (newsIndexEvent) =>{
        //funcao executa a atualizacao do estado atual com base nos arumentos recebidos.
        return setCurrentIndex( () => {
            return newsIndexEvent;
        })
    }    
}

export default useUpdateNewsIndex;