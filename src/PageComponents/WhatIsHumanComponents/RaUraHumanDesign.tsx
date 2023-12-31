import style from '../../CssModules/HumanDesignDetail.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../../ToolkitComponents/AboutFetchData/AboutJeromeSlice'
import { RootState } from '../../ToolkitComponents/Store'



export default function RaUraHumanDesign() {
  const datas=useSelector((state:RootState)=>state.aboutJerome)
  const dispatch=useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/human/writerHuman');
        const Data = await response.json();
        console.log(Data)
        dispatch(setData(Data));
      } 
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className={style.HumanDesignWrap} fluid>
    <h1 className={style.HumanDesignMainTitle}>  人類圖的前世今生 !  </h1>
    <div className={style.GelleryContainer}>
    {datas.map((data, index) => (
      <Container fluid key={data.id}>
        <Row className={style.GelleryRow}>
          {index % 2 === 0 ? ( 
            <>
              <Col md={6} xs={12} className={style.GelleryColLeft}>
                <div className={style.GelleryImageContainer}>
                  <img src={data.url} className={style.GelleryImage} alt={data.title} />
                </div>
              </Col>
              <Col md={6} xs={12} className={style.GelleryColRight}>
                <div className={style.textContainer}>
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col md={6} xs={12} className={style.GelleryColLeft}>
                <div className={style.textContainer}>
                  <h2>{data.title}</h2>
                  <p>{data.content}</p>
                </div>
              </Col>
              <Col md={6} xs={12} className={style.GelleryColRight}>
                <div className={style.GelleryImageContainer}>
                  <img src={data.url} className={style.GelleryImage} alt={data.title} />
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    ))}
  </div>
    </Container>
   
  );
}

