import { LightningElement, api } from 'lwc';

export default class CheckoutProduct extends LightningElement {
    eventVal = 0;
    @api prodobj = {
        Img: 'http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg',
        Name: 'Banana',
        Price: '$15',
        Rating: 5
    };
    @api index = 0;

    removeProd(event) {
        //   alert('Prod removed');
        //alert(this.index);
        this.eventVal = event.target.value;
        console.log(this.eventVal);

        // Creates the event with the data.
        const selectedEvent = new CustomEvent("removecart", {
            detail: this.eventVal
        });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }

    /*
    {Array( rating ) .fill() .map((_, i) => (<p>🌟</p>
            ))}
            */


}