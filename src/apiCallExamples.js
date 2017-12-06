import React, { Component } from 'react';
import axios from 'axios';


export default class Examples extends Component {
    constructor() {
        super()

        this.state = {
            newProduct: {
                id: '4a51jod', 
                desc: 'Ugly Christmas Sweater',
                image: 'https://images-na.ssl-images-amazon.com/images/I/A1TMc13v8dL._UL1500_.jpg',
                price: '34',
                title: 'Sweater'

            },
            deleteId: '9ad1jor',
            updateId: '27kqpvi'
        }
    }


    getProducts() {
        axios.get('https://practiceapi.devmountain.com/products').then(res => {
            return res.data;
        })
    }

    postProduct() { 
        axios.post('https://practiceapi.devmountain.com/products/', this.state.newProduct).then(res => {
            console.log(res.data)
        })
        //The post request is adding the newProduct object on state to the url on the body of the request.
    }

    updateProduct() {
        axios.put(`https://practiceapi.devmountain.com/products/${this.state.updateId}`).then(res => {
            console.log(res.data)
        })
        //The put request is adding the updateId on state to the end of the url as a parameter. 
    }


    deleteProduct() {
        axios.delete(`https://practiceapi.devmountain.com/products?id=${this.state.deleteId}`).then(res => {
            console.log(res.data)
        })
        //The delete request is adding the deleteId on state to the end of the url as a query.
    }


    render() {
        return (
            <div></div>
        )
    }
}