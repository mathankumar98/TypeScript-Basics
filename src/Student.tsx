import React, { Component, FC, useState } from "react";
import *as redux from 'redux';

//TypeScript States Declaration and initialization in class

//interface state
// interface StudentsState
// {
//     name:string;
//     age:number;
// }

// //props state
// type StudentsProps=
// {
//     fathername:string
//     mothername?:string //if we give ? nullable symbol is will like not mandatory
// }

// class Student extends Component<StudentsProps,StudentsState>
// {
//     state:Readonly<StudentsState> =
//     {
//         name:"mathan",
//         age:24,
//     }


//     render():JSX.Element
//     {
//         const { name } = this.state;
//         return(
//             <>
//          <p>{this.props.fathername}</p>
//          </>
        
//         )
//     }
// }


//Arrow Function jsx

// type StudentsProps=
// {
//     name:string;
//     age:50,
// }

// const Student= ():JSX.Element =>{
//     return <h1>Hi From Student</h1>
// }


//functional component in typescript
// type StudentsProps=
// {
//     name?:string;
//     age?:50,
// }

// const Student:FC<StudentsProps>= (props):JSX.Element =>{
//     const[studentname,setstudentname]= useState<string>('mohan'); //string type will be add inline in function component
//     return <h1>{studentname}</h1>
// }

// export default Student;

//Increament Decrement Using Redux

//actions
export const COUNTER_INCREMENT = "counter/increment";
export const COUNTER_DECREMENT = "counter/decrement";

const initialState={
    count:0
}

const reducer=(state=initialState, action) =>{
    switch(action.type){
        case COUNTER_INCREMENT:{
            return{...state,count:state.count +1 };
            break;
        }
        case COUNTER_DECREMENT:{
            return{...state,count:state.count -1};
            break;
        }
        default:{
            return state;
        }
    }
}

const store=redux.createstore(reducer);
export default store