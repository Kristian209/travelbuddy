import React from 'react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const MarkerContainer = ({ place, lng, lat }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)'); 

    return (
        <div 
            className={classes.markerContainer}
            lng={lng}
            lat={lat}
        >
                {!isDesktop ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                ) : (
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                            {place.name}
                        </Typography>
                            <img
                            className={classes.pointer}
                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            alt={place.name}
                        />
                        <Rating size="small" value={Number(place.rating)} readOnly />
                    </Paper>
                )
            }   
        </div>
    )
};
    
    export default MarkerContainer