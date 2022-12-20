import { React,  useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './newsEditor.css';
import useCreateNews from '../../recoil/hooks/newsHooks/useCreateNews';
import { useParams } from 'react-router-dom';
import useGetNewsById from '../../recoil/hooks/newsHooks/useGetNewsById';
import useUpdateNews from '../../recoil/hooks/newsHooks/useUpdateNews';
import { useRecoilValue } from 'recoil';
import { authAtom, userAtom } from '../../recoil/atoms/userState';

const NewsEditor = () => {    
    var currentAuth = useRecoilValue(authAtom)
    var loggedUser = useRecoilValue(userAtom)

    let {id} = useParams();
    var getNews  = useGetNewsById(id);
    let haveId = false;
    
    if(getNews !== undefined){
        
        var title = getNews.title;
        var subtitle = getNews.subtitle;
        var imageUrl = getNews.url;
        var content = JSON.parse(getNews.contents);
        haveId = true;            
    }

    var [currentTitle, setCurrentTitle] = useState(title);
    var [currentSubtitle, setCurrentSubtitle] = useState(subtitle);
    var [currentUrl, setCurrentUrl] = useState(imageUrl);
    var [currentContent, setCurrentContent] = useState(content);
    

    const HandleSaveClick = () => {        
        useCreateNews(currentTitle, currentSubtitle, currentContent, currentUrl, currentAuth, loggedUser);
        currentTitle = null;
        currentSubtitle = null;
        currentUrl = null;
        currentContent = null;
        setTimeout(() => {
            window.location.href = "http://localhost:3000/news"            
        }, 200);
    }

    const HandleUpdateClick = () => {
        useUpdateNews(id, currentTitle, currentSubtitle, currentContent, currentUrl, currentAuth);
        window.location.href = `http://localhost:3000/news-page/${id}`
    }

return (
    <>  
        
        <div className="title-area">                    
            <input type="title" placeholder="Title" value={currentTitle} onChange={ev => setCurrentTitle(ev.target.value)}/>
            <input type="text" placeholder="Subtitle" value={currentSubtitle} onChange={ev => setCurrentSubtitle(ev.target.value)} />
            <input type="text" placeholder="Main image URL" value={currentUrl} onChange={ev => setCurrentUrl(ev.target.value)}/>            
        </div>

        <div className="App">        
            <Editor
                defaultContentState={currentContent}
                onContentStateChange={setCurrentContent}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
        <div>
            {
                haveId? (
                    <button key={"opt2"} className="button-editor" onClick={HandleUpdateClick}>Edit it!</button>
                    ) : (
                    <button key={"opt1"} className="button-editor" onClick={HandleSaveClick}>Publish it!</button>
                )
            }
        </div>
       
    </>
  )
}
export default NewsEditor;