import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    currentValue: number = 1;
    ledger: any[] = [];
    transID: number = 1000;
    totalCoins: number = 0

    constructor() { }

    getCurrentValue() {
        return this.currentValue;
    };

    getLedger() {
        return this.ledger;
    };

    getTotalCoins() {
        return this.totalCoins;
    }

    getSingleAction(id: number) {
        for (let action of this.ledger) {
            if (action.id == id) {
                return action;
            }
        }
    }

    mineCoin(amount: number) {
        let newRecord = {
            action: "Mined",
            amount: amount,
            value: this.currentValue,
            id: this.transID
        };
        this.ledger.push(newRecord);
        
        this.totalCoins += amount;
        this.transID++;
        this.currentValue++;
    };

    buyCoin(amount: number) {
        amount = Number(amount);
        let newRecord = {
            action: "Bought",
            amount: amount,
            value: this.currentValue,
            id: this.transID
        };
        this.ledger.push(newRecord);

        this.totalCoins += amount;
        this.transID++;
        this.currentValue++;
    };

    sellCoin(amount: number) {
        let newRecord = {
            action: "Sold",
            amount: amount,
            value: this.currentValue,
            id: this.transID
        };
        this.ledger.push(newRecord);

        this.totalCoins -= amount;
        this.transID++;
        this.currentValue--;
    };
}
