import React, { useState } from 'react';
import { ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './newsEditor.css';
import {useUpdateContent, useUpdateSubtitle, useUpdateTitle, useUpdateURL} from '../../recoil/hooks/newsHooks/useUpdateNews';
import { useGetContent, useGetSubtitle, useGetTitle, useGetUrl } from '../../recoil/hooks/newsHooks/useGetNewsElements';
import useCreateNews from '../../recoil/hooks/newsHooks/useCreateNews';
const NewsEditor = () => {

    const currentTitle = useGetTitle();
    const updateTitle = useUpdateTitle();
    
    const currentSubtitle = useGetSubtitle();
    const updateSubtitle = useUpdateSubtitle();
    
    const currentUrl = useGetUrl();
    const updateUrl = useUpdateURL();
    
    const currentContent = useGetContent();
    const updateContent = useUpdateContent();

    const HandleClick = () => {        
        useCreateNews(currentTitle, currentSubtitle, currentContent, currentUrl);
    }
   


  return (
    <>  
        
        <div className="title-area">                    
            <input type="title" placeholder="Title" value={currentTitle} onChange={ev => updateTitle(ev.target.value)}/>
            <input type="text" placeholder="Subtitle" value={currentSubtitle} onChange={ev => updateSubtitle(ev.target.value)} />
            <input type="text" placeholder="Main image URL" value={currentUrl} onChange={ev => updateUrl(ev.target.value)}/>            
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
        
        <button onClick={HandleClick}>Publish it!</button>
       
    </>
  )
}
export default NewsEditor;