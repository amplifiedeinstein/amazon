import { api, LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ParentCart extends LightningElement {
    cartCount = 0;
    msg = "Hello";
    cartDisp = 'Cart (0)';
    @track prodsInCart = [];
    bool1 = true;
    //bool2 = false;

    productList = [{
        Name: 'Lemon',
        Price: '$5',
        Img: 'https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg',
        Rating: 5
    }, {
        Name: 'Orange',
        Price: '$10',
        Img: 'http://www.azspagirls.com/files/2010/09/orange.jpg',
        Rating: 5
    }, {
        Name: 'Banana',
        Price: '$15',
        Img: 'http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg',
        Rating: 5
    }];


    hanldeAddCart(event) {
        this.cartCount++;
        this.cartDisp = 'Cart ' + '(' + this.cartCount + ')';
        console.log(event.detail);
        console.log(event.detail.Price);
        console.log(event.detail.Name);
        this.prodsInCart.push(event.detail);
        console.log(this.prodsInCart.length + ' Products in cart');

    }
    hanldeRemoveFromCart(event) {
        console.log('event received');
        console.log(event.detail);
        let index = event.detail;
        this.prodsInCart.splice(index, 1);
        this.cartCount--;
        this.cartDisp = 'Cart ' + '(' + this.cartCount + ')';
        if (this.prodsInCart.length == 0) {
            alert('Your have removed everything from your cart.');
            this.bool1 = true;
        }

    }
    handleClearCartClick() {
        this.cartCount = 0;
        this.cartDisp = 'Cart ' + '(' + this.cartCount + ')';
        this.prodsInCart = [];
        console.log('Products in Cart-');
        console.log(this.prodsInCart);
        this.bool1 = true;
    }
    handleViewCartClick(event) {
        if (this.prodsInCart.length == 0) {
            alert('Your Cart Is empty, Add a product in your cart.');

        } else {
            this.bool1 = false;
            console.log('Products in Cart-');
            console.log(this.prodsInCart);
        }
    }
    handleGoBackClick(event) {
        this.bool1 = true;
    }
}