import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import CardDeck from 'react-bootstrap/CardDeck'



export default function BodyCards() {
    return (

<div class="card" >
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Mail : {this.props.Namepr}</li>
    <li class="list-group-item">Numero : {this.props.Postcodepr} </li>
  </ul>
</div>
    )
}
