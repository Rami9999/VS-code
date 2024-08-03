import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import OpenedFilesBarTab from './OpenedFilesBarTab'
import ContextMenu from './ui/ContextMenu'
import { useState } from 'react'

const OpenedFilesBar = () => {
    const {openedFiles} = useSelector((state:RootState)=>state.tree)
    const [showMenu,setShowMenu] = useState<boolean>(false)
    const [menuPosition,setMenuPosition] = useState<{x:number,y:number}>({
        x:0,
        y:0
    });
  return (
    <div className='w-fit'>
        <div className='flex items-center space-x-2'     onContextMenu={(e)=>{
        e.preventDefault();
        setMenuPosition({x:e.clientX,y:e.clientY});
        setShowMenu(true);

    }}>
            {openedFiles.map((file)=>(
                <OpenedFilesBarTab file={file} key={file.id}/>
            ))}
        </div>
        {showMenu &&<ContextMenu x={menuPosition.x} y={menuPosition.y} setShowMenu={setShowMenu}/>} 

    </div>
  )
}

export default OpenedFilesBar