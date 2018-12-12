import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.css']
})

export class MineComponent implements OnInit {
    @Output() childEvent = new EventEmitter();
    currQ: number;
    questions = [
        "What is 4 + 2?",
        "What is the last letter in the word 'Greatness'?",
        "What did I have for dinner last night?"
    ];
    answers = [
        "6", "s", "Pepperoni Pizza"
    ];

    response: any;
    
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this.resetQuestion();
        this.resetResponse();
    }
    
    resetQuestion() {
        this.currQ = Math.floor(Math.random() * 3);
    }

    resetResponse() {
        this.response = {
            userAnswer: ""
        };
    };

    userGuessed(event: any) {
        console.log(event);
        if (this.response['userAnswer'] == this.answers[this.currQ]) {
            // user guessed right
            this._httpService.mineCoin(1);
            event['target'][0]['value'] = "";
            alert("Correcto-mundo");
            this.resetQuestion();
            this.resetResponse();
        } else {
            // user guessed wrong
            alert("That is wrong! Please try again")
        }
    }
}
