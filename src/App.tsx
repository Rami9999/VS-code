import OpenedFilesBar from './components/OpenedFilesBar'
import RecursiveComponent from './components/RecursiveComponent'
import { fileTree } from './data/FileTree' 

const App = () => {

  return (
    <div>
      
      <div className='flex h-screen'>

        <div className='w-64 border-r border-black p-2 border-b-[1px] border-[#00000010]'>
        <RecursiveComponent fileTree={fileTree} />

        </div>
        <OpenedFilesBar />
      </div>
    </div>
  )
}

export default App