import { Meteor } from 'meteor/meteor';
import { SeatsCollection } from '../imports/db/seatsData';
import '../imports/api/publish';
import '../imports/api/methods';

Meteor.startup(() => {
  console.log('server called....');
  // If the seatsData collection is empty, add some data.
  if (SeatsCollection.find().count() === 0) {
    console.log(SeatsCollection.find().count() === 0)
    for (let seatNo = 44; seatNo > 0; seatNo--) {
      SeatsCollection.insert({ seatNo, color: 'red' });
    }
  }
})