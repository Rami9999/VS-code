import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'
 
interface IProps{
    content:String | undefined
}
const FileSyntaxHighlighter = ({content}:IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco} customStyle={{
        backgroundColor:'transparent',
        width:"100%",
        maxHeight:"100.h",
        overflowX:"auto",
        fontSize:"1.5rem"
    }}
    showLineNumbers>
        {String(content)}
    </SyntaxHighlighter>
  )
}

export default FileSyntaxHighlighter