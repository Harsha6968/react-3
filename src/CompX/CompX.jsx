import React from 'react'
import CompY from '../CompY/CompY'
class CompX extends React.Component{
  name="harsha";
   no=449;
   gender="male";
   contact=6302346968;
       render(){
        return <>
        <h1>Component X</h1>
        <hr />
        <CompY emp_name={this.name} emp_no={this.no} emp_gender={this.gender} emp_contact={this.contact}/>
        </>
       }
}
export default CompX