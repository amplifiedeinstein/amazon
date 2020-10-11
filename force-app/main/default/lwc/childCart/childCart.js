import { LightningElement, api } from 'lwc';

export default class ChildCart extends LightningElement {
    eventVal = {};
    @api product = {
        Name: 'Lemon',
        Price: '5$',
        Img: 'https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg'
    }
    sendEvent(event) {
        this.eventVal = event.target.value;
        //console.log(this.eventVal);
        // console.log(this.eventVal.Name);

        // Creates the event with the data.
        const selectedEvent = new CustomEvent("addtocart", {
            detail: this.eventVal
        });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}