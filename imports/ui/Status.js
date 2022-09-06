import React from 'react';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Status = ({ noOfSeats }) => {

    return (
        <Box margin='1% 0'>
            <Grid container justifyContent='space-between'>
                <Grid container xs="auto" direction='column' backgroundColor='red' gap={1} padding='1%' height='42vh' minWidth='48vw'>
                    <Typography textAlign='center' variant='h3'>Available Seats</Typography>
                    {
                        noOfSeats.map(seat => seat.color === 'red' &&
                            <Grid item key={seat._id}>
                                <Typography textAlign='center' backgroundColor='white'>Seat Number: {seat.seatNo}</Typography>
                            </Grid>)
                    }
                </Grid>
                <Grid container xs="auto" direction='column' backgroundColor='green' gap={1} padding='1%' height='42vh' minWidth='48vw'>
                    <Typography textAlign='center' variant='h3'>Booked Seats</Typography>
                    {
                        noOfSeats.map(seat => seat.color === 'green' &&
                            <Grid item key={seat._id}>
                                <Typography textAlign='center' backgroundColor='white'>Seat Number: {seat.seatNo}</Typography>
                            </Grid>)
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default Status;
