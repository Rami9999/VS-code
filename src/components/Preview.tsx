import React from 'react'
import OpenedFilesBar from './OpenedFilesBar'
import FileSyntaxHighlighter from './FileSyntaxHighlighter'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Preview = () => {
    const {openedFiles,clickedFile} = useSelector((state:RootState)=>state.tree)

  return (
    <>
        <OpenedFilesBar />
        <FileSyntaxHighlighter content={clickedFile.fileContent}/>

    </>
  )
}

export default Preview