
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import starLogo from '../../resources/Icon/star_1_.png';
import RoomDesigns from '../../fakeData/roomdesign/Index';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    main: {
        marginTop: '2%'
    },
    div: {
        marginBottom: '4%'
    }

}));


const ConfirmBooking = () => {


    const classes = useStyles();





    return (

        <div>
            <Grid container spacing={3} className={classes.main}>

                <Grid item xs={6}>

                    <p>252 stays Apr 13-17 3 guests</p>
                    <h4>Stay in </h4>
                    {
                        RoomDesigns.map(room =>

                            <Grid container spacing={3} className={classes.div} key={room.id}>
                                <Grid item xs={6}>
                                    <Grid>
                                        <img style={{ height: '100%', width: '100%' }} s src={room.img} alt="hotel-room" />
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <h5>{room.title}</h5>
                                    <p>{room.room}</p>
                                    <p>{room.facility1}</p>
                                    <p>{room.facility2}</p>
                                    <small style={{ marginRight: '15%' }}><img style={{ width: '15px', height: '15px' }} src={starLogo} alt="logo" /> {room.rating}</small>
                                    <>
                                        <small style={{ marginRight: '3%' }}>{room.price}</small>
                                        <small>{room.totalPrice}</small>
                                    </>
                                </Grid>
                            </Grid>)
                    }
                </Grid>

                <Grid item xs={6}>


                </Grid>
            </Grid>
        </div>
    );
};

export default ConfirmBooking;