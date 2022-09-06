import { Meteor } from 'meteor/meteor';
import { CheckSeatStatus, SeatsCollection } from '../db/seatsData';

Meteor.publish('get-seats', function getSeats(){
    console.log('publish called....')
    return SeatsCollection.find({})
})

Meteor.publish('check-seat', function getSeats(){
    console.log('publish called....')
    return CheckSeatStatus.find({})
})