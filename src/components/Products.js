import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductItem from './Product';
import product1 from './images/product1.png';
import product2 from './images/product2.jpeg';
import product3 from './images/product3.jpeg';
import product4 from './images/product4.jpeg';
import product5 from './images/product5.png';
import product6 from './images/product6.jpeg';

const List = [
    product1, product2, product3, product4, product4, product5, product6
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Products() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Box sx={{ width: '85%', maxWidth: 1600 }}>

                <Typography variant="h4" gutterBottom align='center'>
                    Pharmacy Products
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {List.map((item) => {
                            return (
                                <Grid item xs={12} lg={3} >
                                    <ProductItem img={item} />
                                </Grid>

                            )
                        })}
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}> </Box>






            </Box>
        </Box>
    );
}