import { Button, Grid, Typography } from '@mui/material' 
import {useNavigate} from 'react-router-dom'
const SectionOne = () => {
  const navigate = useNavigate();
  return (
    <div className='section-one'>
         <Grid  container>
        <Grid className='back' item xs={12} md={12}>
          <div className='content'>
          <Typography variant='h5' component='h4'>Great products with best details</Typography>
          <Typography variant='subtitle2' component='p'>e-commerce, in full electronic commerce, maintaining relationships <br></br>and conducting business 
          transactions that include selling information, services .</Typography>
           <Button className='btn' onClick={()=> navigate('/cart')} variant="contained" size="small">View More</Button>

          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SectionOne