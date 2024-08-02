import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import OpenedFilesBarTab from './OpenedFilesBarTab'
import FileSyntaxHighlighter from './FileSyntaxHighlighter'

interface IProps{

}
const OpenedFilesBar = () => {
    const {openedFiles,clickedFile} = useSelector((state:RootState)=>state.tree)
  return (
    <div>
        <div className='flex items-center space-x-2'>
            {openedFiles.map((file)=>(
                <OpenedFilesBarTab file={file} key={file.id}/>
            ))}
        </div>
        <FileSyntaxHighlighter content={clickedFile.fileContent}/>
    </div>
  )
}

export default OpenedFilesBar