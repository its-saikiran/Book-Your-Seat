import React from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { Meteor } from 'meteor/meteor';
import { CheckSeatStatus, SeatsCollection } from '../db/seatsData';
import DisplaySeats from './DisplaySeats';
import Status from './Status';
import { Grid, Paper } from '@mui/material';

export const App = () => {

  const { isLoading, noOfSeats, checkSeat } = useTracker(() => {
    const handler1 = Meteor.subscribe('get-seats')
    const handler2 = Meteor.subscribe('check-seat')
    if (!handler1.ready() && !handler2.ready()) {
      return { isLoading: true }
    }

    return {
      noOfSeats: SeatsCollection.find().fetch(),
      checkSeat: CheckSeatStatus.find().fetch()
    }
  })

  return (
    <>
      <Grid container justifyContent="end" spacing={2}>
        {
          [{ color: 'red', content: 'Available' }, { color: 'orange', content: 'Process' }, { color: 'green', content: 'Booked' }].map((hint, index) => (
            <Grid item key={index}>
              <Grid item marginLeft='6px'>
                <Paper
                  sx={{
                    height: 60,
                    width: 45,
                    backgroundColor: hint.color
                  }}
                />
              </Grid>
              <Grid item>{hint.content}</Grid>
            </Grid>
          ))
        }
      </Grid>
      <h1>Book Your Seat!</h1>
      {
        isLoading ? <h3>isLoading...</h3> :
          <>
            <hr color='arialblue'></hr>
            <DisplaySeats noOfSeats={noOfSeats} checkSeat={checkSeat} />
            <Status noOfSeats={noOfSeats} />
          </>
      }
    </>
  )
};
