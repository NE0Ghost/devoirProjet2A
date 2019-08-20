import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.page.html',
    styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

    emails = [
        {
            mail: 'jose@rodez.fr',
        },
        {
            mail: 'jose@rodez.fr',
        },
    ];
    telephone = [
        {
            numero: '0x.xx.xx.xx.xx',
        },
        {
            numero: '1x.xx.xx.xx.xx',
        },
    ];

    constructor() { }

    ngOnInit() {
    }

}
