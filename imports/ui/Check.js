import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Meteor } from 'meteor/meteor';

const newDate = new Date()
const date = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`
const time = `${newDate.getHours()}H:${newDate.getMinutes()}M:${newDate.getSeconds()}S`

const Check = ({ checkSeat }) => {
    return (
        <Box backgroundColor='orange' width='30vw' padding='2%' borderRadius='5px' height='15vh'>
            {
                checkSeat.length > 0 ?
                    <>
                        <Typography variant='h4' textAlign='center'>Check Seat Status</Typography>
                        <Typography variant='h6'>Seat Number: {checkSeat[0].seatNo}</Typography>
                        {
                            checkSeat[0].color === 'green' ?
                                <Typography variant='h4'>Seat Booked!</Typography> :
                                <Button type='button' variant='contained' onClick={() => Meteor.call('book-seat', checkSeat[0].seatId)}>Book</Button>
                        }
                        <Typography textAlign='end'>Date: {date}</Typography>
                        <Typography textAlign='end'>Time: {time}</Typography>
                    </>
                    :
                    <Typography variant='h4' padding='5vh'>Click on any seat to get status!</Typography>
            }
        </Box>
    )
}

export default Check;
