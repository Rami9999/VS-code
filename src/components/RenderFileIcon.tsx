import IconImage from './IconImage'
import FileIcone from './SVG/File'
import Html from './SVG/Html'
import Javascript from './SVG/Javascript'
import ReactTs from './SVG/ReactTs'
import Typescript from './SVG/Typescript'

interface IProps{
    filename: string
}

const RenderFileIcon = ({filename} : IProps) => {
    const extension = filename.split('.').pop()
    console.log(extension)
    if(extension ==='tsx') return <ReactTs />
    if(extension ==='ts') return <Typescript />
    if(extension ==='js') return <Javascript />
    if(extension ==='html') return <Html />
  return (
    <FileIcone />
  )
}

export default RenderFileIcon