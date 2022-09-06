import { Mongo } from 'meteor/mongo';

export const SeatsCollection = new Mongo.Collection('seatsData')
export const CheckSeatStatus = new Mongo.Collection('checkSeat')
