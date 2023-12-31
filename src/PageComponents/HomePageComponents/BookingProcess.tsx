import style from '../../CssModules/HomePage.module.css'
import Container from 'react-bootstrap/Container';
import  { useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


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

type dataType={
  id:number,
  title:string,
  content:string,
  url:string
}


const BookingProcess = () => {
      const[datas,setDatas]=useState<dataType[]>([])
      useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch('http://localhost:9000/home/bookingProcess');
                const Data = await response.json();
                setDatas(Data)
              } 
              catch (error) {
                console.log(error);
              }
            };
            fetchData();
          }, []);
  return (
  <ThemeProvider theme={theme}>
    <Container className={style.bookProcessWrap}>
      <h2>預約流程</h2>
      <h1 className={style.bookProcessSubtitle}>S   T   E   P   S </h1>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 6, md: 12 }}> 
      {datas.map((data)=>(
             <Grid item xs={12} sm={3} md={3} key={data.id}>
              <div className={style.BookingProcessContainer} >
             <div className={style.BookingProcessItem}>
             <img src={data.url} />
             <div className={style.BookingProcessText}>
              <h5>{data.title}</h5>
              <span>{data.content}</span>
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

export default BookingProcess