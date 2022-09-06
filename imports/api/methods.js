import { Meteor } from 'meteor/meteor';
import { CheckSeatStatus, SeatsCollection } from '../db/seatsData';

Meteor.methods({
    'book-seat'(_id) {
        SeatsCollection.update({ _id }, { $set: { color: 'green' } })
        if(CheckSeatStatus.find().count() === 1){
            CheckSeatStatus.remove({})
        }
    },

    'check-seat'(seatNo, seatId, color) {
        if(CheckSeatStatus.find().count() === 1){
            CheckSeatStatus.remove({})
        }
        seatNo && CheckSeatStatus.insert({ seatNo, seatId, color })
    }
})