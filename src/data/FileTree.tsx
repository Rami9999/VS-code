import { IFile } from "../interfaces";
import {v4 as uuid} from "uuid"


export const fileTree:IFile = {
    id:uuid(),
    name:"VS Code Clone",
    isFolder:true,
    children: [
        {
            id:uuid(),
            name:"node_modules",
            isFolder:true,
            children: [
                {
                    id:uuid(),
                    name:'.vite',
                    isFolder:true,
                    children:[
                        {
                            id:uuid(),
                            name:'react.js',
                            isFolder:false,
                            content:`export interface FileSystem{
                                name:nukmber,
                                isFolder:boolean,
                                children?:FileSystem[],
                                content?:string:undefined,
                            }`
                        },
                    ]
                },
            ]
        },

        {
            id:uuid(),
            name:"public",
            isFolder:true,
            children: [
                {
                    id:uuid(),
                    name:"index.tsx",
                    isFolder:false,
                    content:"import {useState} from 'react.ts'"
                },
            ]
        },

    ],
};