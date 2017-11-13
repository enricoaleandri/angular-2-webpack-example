import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'test',
    template: require('./template.html'),
    styles: [require('./style.scss')],
    providers: [],
    directives: [],
    pipes: []
})

export class Test implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        alert("Components RAN.");
    }
}
