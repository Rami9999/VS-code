import { useSelector } from 'react-redux'
import OpenedFilesBar from './components/OpenedFilesBar'
import Preview from './components/Preview'
import RecursiveComponent from './components/RecursiveComponent'
import ResizablePanel from './components/ResizablePanel'
import { fileTree } from './data/FileTree' 
import { RootState } from './app/store'
import VsCode from './components/SVG/VsCode'
import IconImage from './components/IconImage'
import DropMenu from './components/ui/ContextMenu'

const App = () => {
  const {openedFiles} = useSelector((state:RootState)=>state.tree)

  return (
    <div className='flex h-screen'>
      <ResizablePanel 
        leftPanel={<div className='w-64 p-2 '>
          <RecursiveComponent fileTree={fileTree} />
          
          </div>}
        rightPanel={
          openedFiles.length?
          <Preview />:<div className='mx-auto h-full my-auto flex justify-center items-center '><IconImage src="vscode-logo.png" /></div>
        }
        showLeftPanel={true}/>
    </div>

  )
}

export default App