import {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setClickedFileAction, setOpenFilesAction } from '../../app/features/fileTreeSlice';

interface IProps{
    x:number,
    y:number,
    setShowMenu:(val:boolean)=>void
}


const ContextMenu = ({x,y,setShowMenu}:IProps) => {

    const dispatch = useDispatch();

    const {clickedFile,openedFiles,tabIdToRemove} = useSelector((state:RootState) => state.tree)
const menuRef = useRef<HTMLDivElement>(null)

useEffect(() => {
    const handleClickOutside = (event:MouseEvent)=>{
        if(menuRef.current && !menuRef.current.contains(event.target as Node))
            setShowMenu(false)
    }
    window.addEventListener('click',handleClickOutside);

    return ()=>{
        window.removeEventListener('click',handleClickOutside)
    }
},[setShowMenu]);

    //handlers
    const closeAll = ()=>{
        dispatch(setOpenFilesAction([]));
        dispatch(setClickedFileAction({fileContent:'',filename:'',activeTabID:null}));
        setShowMenu(false);
    }

    const closeTab = () => {
        const id = tabIdToRemove;
        const filterd = openedFiles.filter((file)=>file.id!==id);
        dispatch(setOpenFilesAction(filterd));
        const lastFile = filterd[filterd.length-1];
        setShowMenu(false);

        if(lastFile)
            dispatch(setClickedFileAction({fileContent:lastFile.content,filename:lastFile.name,activeTabID:lastFile.id}));
        else    
            dispatch(setClickedFileAction({fileContent:'',filename:'',activeTabID:null}));

    }
  return (

    <div ref={menuRef}>
        <ul className='bg-white text-black w-fit px-7 py-2 rounded-md' style={{
            position:"absolute",
            left:x,
            top:y,
        }}>
            <li className='cursor-pointer hover:bg-[#646473] duration-300 flex justify-center items-center  mr-2 p-1 rounded-md'  onClick={()=>closeTab()}>
                Close
            </li>
            <li className='cursor-pointer hover:bg-[#646473] duration-300 flex justify-center items-center  mr-2 p-1 rounded-md' onClick={()=>closeAll()}>
                Close all
            </li>
        </ul>
    </div>

  )
}

export default ContextMenu