import { Suspense} from "react";
import { useParams } from "react-router-dom"
import Header from "../components/header";
import Footer from "../components/footer";
import NewsContent from "../components/newsContent/newsContent";



export default function NewsPage() {

 

    //adicionar todo o conteudo da pagina num componente por causa do suspense.
    return (
        
        <>  
            <Suspense fallback={<h4>loading...</h4>}>
                <Header/>
                <Suspense fallback={<h4>loading...</h4>}>
                    <NewsContent/>
                </Suspense>            
                <Footer/>            
            </Suspense>          
        </>
    )
}