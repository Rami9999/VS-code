import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";


export interface IClickedFile {
    activeTabID:string| null,
    filename:string,
    fileContent:String | undefined
}

interface IInitialState{
    openedFiles:IFile[],
    clickedFile:IClickedFile,
    tabIdToRemove:string | null,
}
const initialState:IInitialState = {
    openedFiles:[],
    clickedFile:{
        activeTabID:null,
        filename:"",
        fileContent:""
    },
    tabIdToRemove:null

};
const fileTreeSlice = createSlice({
    name:"fileTree",
    initialState,
    reducers:{
        setOpenFilesAction: (state,action:PayloadAction<IFile[]>)=>{
            state.openedFiles = action.payload
        },
        setClickedFileAction: (state,action:PayloadAction<IClickedFile>)=>{
            state.clickedFile = action.payload
        },
        setFileIdToRemoveAction: (state,action:PayloadAction<string | null>)=>{
            state.tabIdToRemove = action.payload
        },
    }
});

export const {setOpenFilesAction,setClickedFileAction,setFileIdToRemoveAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer;