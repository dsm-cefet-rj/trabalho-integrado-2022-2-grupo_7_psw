import { React, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './newsEditor.css';
import {useUpdateContent, useUpdateSubtitle, useUpdateTitle, useUpdateURL} from '../../recoil/hooks/newsHooks/useUpdateNewsState';
import { useGetContent, useGetSubtitle, useGetTitle, useGetUrl } from '../../recoil/hooks/newsHooks/useGetNewsElements';
import useCreateNews from '../../recoil/hooks/newsHooks/useCreateNews';
import { useParams } from 'react-router-dom';
import useGetNewsById from '../../recoil/hooks/newsHooks/useGetNewsById';
import useUpdateNews from '../../recoil/hooks/newsHooks/useUpdateNews';

const NewsEditor = () => {
    
    let {id} = useParams();
    var getNews  = useGetNewsById(id);
    let haveId = false;


    let currentTitle = useGetTitle();
    const updateTitle = useUpdateTitle();
    
    let currentSubtitle = useGetSubtitle();
    const updateSubtitle = useUpdateSubtitle();
    
    let currentImageUrl = useGetUrl();
    const updateUrl = useUpdateURL();
    
    let currentContent = useGetContent();
    const updateContent = useUpdateContent();

    function loadData()  {
        
        if(getNews !== undefined){      
            currentTitle = getNews.title;
            currentSubtitle = getNews.subtitle;
            currentImageUrl = getNews.url;
            currentContent = JSON.parse(getNews.contents);
            haveId = true;            
        }
        console.log(haveId)
    }

   

    useEffect(() => {
        //Carrega apenas uma vez durante inicialização, mas o problema é que
        //não altera nenhum atributo solicitado. 
        loadData()
    }, [] )


    const HandleSaveClick = () => {        
        useCreateNews(currentTitle, currentSubtitle, currentContent, currentImageUrl);
        currentTitle = null;
        currentSubtitle = null;
        currentImageUrl = null;
        currentContent = null;
    }

    const HandleUpdateClick = () => {
        useUpdateNews(id, currentTitle, currentSubtitle, currentContent, currentImageUrl)
    }
   


  return (
    <>  
        
        <div className="title-area">                    
            <input type="title" placeholder="Title" value={currentTitle} onChange={ev => updateTitle(ev.target.value)}/>
            <input type="text" placeholder="Subtitle" value={currentSubtitle} onChange={ev => updateSubtitle(ev.target.value)} />
            <input type="text" placeholder="Main image URL" value={currentImageUrl} onChange={ev => updateUrl(ev.target.value)}/>            
        </div>

        <div className="App">        
            <Editor
                defaultContentState={currentContent}
                onContentStateChange={updateContent}
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