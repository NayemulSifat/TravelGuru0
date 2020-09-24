import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useParams } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './Booking.css'
import tourSpotsFakeData from '../../fakeData/tourspots/Index';




const Booking = () => {


  const { id } = useParams();

  const soloAreas = tourSpotsFakeData.find(area => area.id === parseInt(id));

  const { title, image, details, city } = soloAreas;


  const [fromSelectedDate, setFromSelectedDate] = React.useState(new Date('2020-09-25T21:11:54'));

  const handleFromDateChange = (date) => {
    setFromSelectedDate(date);
  }
  const [toSelectedDate, setToSelectedDate] = React.useState(new Date('2020-10-18T21:11:54'));

  const handleToDateChange = (date) => {
    setToSelectedDate(date);
  }



  return (
    <div className="row" style={{marginTop:'10%',backgroundImage:{image}}} >

      <div className="col-md-6" >
        <h2>{title}</h2><br />
        <p>{details}</p>
      </div>

      <div className="col-md-6" >
        <form className='proccedConfirmation'>
          <label>Origin</label>
          <input type="text" value={city} /><br />
          <label>Destination</label>
          <input type="text" value={title} /><br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Grid container xs={12} justify="space-around">

              <Grid xs={5} >
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="From"
                  format="dd/MM/yyyy"
                  value={fromSelectedDate}
                  onChange={handleFromDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid xs={5}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="To"
                  format="dd/MM/yyyy"
                  value={toSelectedDate}
                  onChange={handleToDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>

            </Grid>
          </MuiPickersUtilsProvider>
          <Link to="/confirmation" className='btn proccedBtn' >Confirm Booking</Link>
        </form>

      </div>
    </div>
  );
};


export default Booking;