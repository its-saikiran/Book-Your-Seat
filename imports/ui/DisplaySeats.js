import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import { Meteor } from 'meteor/meteor';
import Check from './Check';

const DisplaySeats = ({ noOfSeats, checkSeat }) => {

    return (
        <Box display='flex' justifyContent='space-evenly'>
            <Grid container justifyContent="space-evenly" spacing={2} width='60vw'>
                {
                    noOfSeats.map(seat => (
                        <Grid
                            item
                            key={seat._id}
                        >
                            <Paper
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}
                                sx={{
                                    height: 60,
                                    width: 45,
                                    backgroundColor: seat.color === 'green' ? seat.color : checkSeat.length > 0 && checkSeat[0].seatNo === seat.seatNo ? checkSeat[0].color : seat.color
                                }}
                                onClick={() => Meteor.call('check-seat', seat.seatNo, seat._id, seat.color === 'red'? 'orange' : 'green')}
                            >{seat.seatNo}</Paper>
                        </Grid>
                    ))
                }
            </Grid>
            <Check checkSeat={checkSeat} />
        </Box>
    )
}

export default DisplaySeats;