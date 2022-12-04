import { Suspense } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import NewsEditor from "../components/newsEditor/newsEditor";
import '../routes/newsEditorPage.css'

export default function NewsEditorPage(){


    return (
        <>
        <Header/>
            <Suspense>
                <div style={{marginTop: "50px"}} className="editor-container">
                    <NewsEditor/>
                </div>
            </Suspense>
           
        <div>
            <Footer/>
        </div>

        </>
    )
}