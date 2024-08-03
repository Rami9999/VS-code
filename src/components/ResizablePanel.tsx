import React, { ReactNode } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

interface IProps {
    defaultLayout?:number[] | undefined,
    leftPanel: ReactNode,
    rightPanel:ReactNode,
    showLeftPanel: boolean
}
const ResizablePanel = ({defaultLayout=[20,80],leftPanel,rightPanel,showLeftPanel}:IProps) => {
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
      };
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
        {showLeftPanel &&<><Panel defaultSize={defaultLayout[0]} >
            {leftPanel}
        </Panel>
        <PanelResizeHandle className='border-r border-[#000000]' />
        </>
        }
        <PanelResizeHandle className='border-r border-[#000000]' />
        <Panel defaultSize={defaultLayout[1]}>
            {rightPanel}
        </Panel>
        
    </PanelGroup>
  )
}

export default ResizablePanel