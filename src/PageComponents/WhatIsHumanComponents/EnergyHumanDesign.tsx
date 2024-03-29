import style from '../../CssModules/HumanDesignDetail.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEnergyHumanDesign } from '../../ReactQueryCompoents/WhatisHumanDesign';


interface SubpageInterface{
  id:number,
  title:string,
  content:string,
  url:string
}

export default function EnergyHumanDesign() {

  const{data:datas,isLoading,error}=useEnergyHumanDesign()
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error :{error.message}</p>
  return (
    <Container className={style.HumanDesignWrap} fluid>
    <h1 className={style.HumanDesignMainTitle}>  有無能量都很好的 !  </h1>
    <div className={style.GelleryContainer}>
    {datas.map((data:SubpageInterface, index:number) => (
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


