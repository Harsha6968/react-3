import React from 'react';
class CompA extends React.Component{
    name="harsha";
    no=449;
    render (){
        return <>
        <h1>ComponentA</h1>
        <p>{this.name}</p>
        <p>{this.no}</p>
               </>
    }
}
export default CompA;