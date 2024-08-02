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
}
const initialState:IInitialState = {
    openedFiles:[],
    clickedFile:{
        activeTabID:null,
        filename:"",
        fileContent:""
    },

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
    }
});

export const {setOpenFilesAction,setClickedFileAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer;