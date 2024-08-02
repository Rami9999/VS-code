import FileIcone from './SVG/File'
import { IFile } from '../interfaces'
import { useState } from 'react'
import FolderIcon from './SVG/Folder'
import RightArrow from './SVG/RightArrow'
import DownArrow from './SVG/DownArrow'
import OpenFolderIcon from './SVG/OpenFolder'
import RenderFileIcon from './RenderFileIcon'
import { useDispatch, useSelector } from 'react-redux'
import {  setClickedFileAction, setOpenFilesAction } from '../app/features/fileTreeSlice'
import { RootState } from '../app/store'
import { doesFileExist } from '../utils/functions'

 interface IProps{
  fileTree:IFile
}
const RecursiveComponent = ({fileTree}:IProps) => {
  const dispatch = useDispatch();

  const {openedFiles} = useSelector((state:RootState)=>state.tree)

  const [isOpen,setIsOpen] = useState<boolean>(false);

  //Handlers

  const toggle = ()=>{
    setIsOpen(prev => !prev);
  }

  const onFileClicked = ()=>{
    const exists = doesFileExist(openedFiles,fileTree.id);
    const {name,content} = fileTree
    dispatch(setClickedFileAction({filename:name,fileContent:content,activeTabID:fileTree.id}))

    if(exists)
    {
      return;
    }
    
    dispatch(setOpenFilesAction([...openedFiles,fileTree]))
  }
  return (
    <div className='mb-2 ml-2 cursor-pointer'>
        <div className='flex items-center mb-1' >
          {
            fileTree.isFolder ? (
            <div  className='flex items-center mr-2' onClick={toggle}>
                {
                  isOpen ? (
                    <div className='flex items-center'>
                      <DownArrow />
                      <OpenFolderIcon />
                      <span>{fileTree.name}</span>

                    </div>
                  ):(
                    <div className='flex items-center'>
                      <RightArrow />
                      <FolderIcon />
                      <span>{fileTree.name}</span>

                    </div>
                  )
                }
            </div>
          ):(       
            <div  className='flex items-center ml-2' onClick={onFileClicked}>   
              <span className='mr-1' >
                <RenderFileIcon filename={fileTree.name} />
              </span>
              <span>{fileTree.name}</span>
            </div>
          )
          }

        </div>
        {
          isOpen && fileTree.children && fileTree.children.map((file,idx)=>(
            <RecursiveComponent fileTree={file} key={idx}/>

          ))
        }

    </div>
  )
}

export default RecursiveComponent