import { Component } from 'react';

function List(props) {
  var tampilkan = props.hasil
  
    if (isNaN(tampilkan)) {
      tampilkan = ''
    }
    return <h1>{tampilkan}</h1>
  }

export default List