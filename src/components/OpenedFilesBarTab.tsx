import { useDispatch, useSelector } from 'react-redux'
import { setClickedFileAction, setFileIdToRemoveAction, setOpenFilesAction } from '../app/features/fileTreeSlice'
import { IFile } from '../interfaces'
import RenderFileIcon from './RenderFileIcon'
import CloseIcon from './SVG/CloseIcon'
import { RootState } from '../app/store'

interface IProps{
    file:IFile
}
const OpenedFilesBarTab = ({file}:IProps) => {
    const dispatch = useDispatch();

    const {clickedFile,openedFiles} = useSelector((state:RootState) => state.tree)

    const onClick = () => {
        const {id,name,content} = file
        dispatch(setClickedFileAction({filename:name,fileContent:content,activeTabID:id}));
    }

    const removeFile = (id:string|undefined)=>{
        const newOpenedFiles = openedFiles.filter(file=>file.id!==id)
        const lastFile = newOpenedFiles[newOpenedFiles.length-1];
        if(!lastFile)
        {
            console.log('no itemssss')
            dispatch(setOpenFilesAction([]));
            dispatch(setClickedFileAction({fileContent:'',filename:'',activeTabID:null}));
            return

        }
        dispatch(setOpenFilesAction(newOpenedFiles));

        dispatch(setClickedFileAction({fileContent:lastFile.content,filename:lastFile.name,activeTabID:lastFile.id}));
      }
  return (
    <div className='flex items-center p-2' onClick={onClick} style={{
        borderTop: file.id===clickedFile.activeTabID ? "2px solid #cf6ccf":"2px solid transparent"
    }}
    onContextMenu={e=>{
        e.preventDefault();
        dispatch(setFileIdToRemoveAction(file.id))
    }}
>
        <RenderFileIcon filename={file.name}/>
        <span className='cursor-pointer duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md'>
            {file.name}
        </span>
        <span className='cursor-pointer hover:bg-[#646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md' onClick={(e)=>{
            e.stopPropagation();
            removeFile(file.id)
        }}>
            <CloseIcon />
        </span>

    </div>

  )
}

export default OpenedFilesBarTab