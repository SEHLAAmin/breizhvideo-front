import React, { Component } from 'react'
import BodyCards from './BodyCards'


export default class Data extends Component {

    
   
    constructor(props){
        super(props);
         this.state =  [
  {name:'Rennes', post_code:'5751'},
  {name:'Anger', post_code:'44900'},
  {name:'Reims', post_code:'6165'},
  {name:'Toulouse', post_code:'37551'},
  {name:'Lyon', post_code:'6900'}
]

    }


   
    render() {
        return (
            <div>
            <BodyCards
                Namepr = {this.state.name}
               /* Postcodepr = {this.state.post_code}*/
            />
            </div>
        )
    }
}
