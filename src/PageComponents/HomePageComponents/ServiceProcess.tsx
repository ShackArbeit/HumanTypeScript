import style from '../../CssModules/HomePage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../ToolkitComponents/AboutFetchData/AboutJeromeSlice';
import  { useEffect } from 'react';
import { RootState } from '../../ToolkitComponents/Store';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const theme = createTheme({
      breakpoints: {
        values: {
          xs: 0,
          sm: 500,
          md: 768,
          lg: 1280,
          xl: 1920,
        },
      },
    })
    const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    }));

const ServiceProcess = () => {
      const datas=useSelector((state:RootState)=>state.aboutJerome)
      const dispatch=useDispatch()
      useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('http://localhost:9000/home/serviceProcess');
                const Data = await response.json();
                dispatch(setData(Data))
              } 
              catch (error) {
                console.log(error);
              }
            };
            fetchData();
          }, []);
  return (
   <ThemeProvider theme={theme}>
   <Container className={style.serviceWrap} fluid>
   <h2 className={style.serviceTitle} >解析項目</h2>
   <Box sx={{ flexGrow: 1 }}>
   <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 6, md: 12 }}>
   {datas.map((data)=>(
            <Grid item xs={12} sm={3} md={3} key={data.id}>
            <div className={style.serviceContainer}>
               <div className={style.serviceItem}>
               <img src={`https://picsum.photos/300/300?random=${data.id}`} alt={`Image ${data.id}`}/>
               <div className={style.serviceText}>
               <h2>{data.title}</h2>
               <p>{data.content}</p>
               <Stack spacing={2} direction="row" margin="0 atuo">
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <ColorButton variant="contained">
        <Link to='booking' style={{textDecoration:"none",color:"white"}}>立即預約 ! </Link>
        </ColorButton>
      </div>
    </Stack>
               </div>
               </div>
            </div>
            </Grid>
   ))}
   </Grid>
   </Box>
   </Container>
   </ThemeProvider>
  )
}

export default ServiceProcess