const express=require('express')
const JeromeProfile=require('./AboutJerome');
const jdContent=require('./Feedback');
const { serviceContent}=require('./HomePage');
const {bookingProcess}=require('./HomePage')
const {hoverHumanDesign}=require('./WhatIsHumanDesign')
const {explainHumanDesign}=require('./WhatIsHumanDesign')
const {TalentHumanDesign}=require('./WhatIsHumanDesign')
const { roleHumanDesign}=require('./WhatIsHumanDesign')
const {authorHumanDesign}=require('./WhatIsHumanDesign')
const {energyHumanDesign}=require('./WhatIsHumanDesign')
const {roadHumanDesign}=require('./WhatIsHumanDesign')
const { writerHumanDesign} =require('./WhatIsHumanDesign')
const {isDesktopContent}=require('./BookingIntroduction')
const {isMobile}=require('./BookingIntroduction')
const cors=require('cors')
const app = express();


app.use(cors())

const mongo = require('mongodb')
const url = "mongodb+srv://wang8119:wang8119@cluster0.w3kipgk.mongodb.net/?retryWrites=true&w=majority"
const client = new mongo.MongoClient(url);
let db = null
async function initDB() {
      try {
            await client.connect()
            console.log('連線成功')
            db = client.db("myWebsite");
  
      } catch (err) {
            console.log('連線失敗', err)
            return
      }
}
initDB()

const dayjs = require('dayjs');

app.post('/saveDateTime', async (req, res) => {
  try {

    const collection = db.collection('ForBooking');
    const { selectDateTime } = req.body;
    const newBooking = new Date(selectDateTime);
   // 將存放的時間點做前後 90 分鐘的區間設定
    const startTime = dayjs(newBooking).subtract(90, 'minutes');
    const endTime = dayjs(newBooking).add(90,'minutes');
  // 先向集合內搜尋存在區間內的所有可能
    const existingReservations = await collection.find({
      $or: [
        {
          $and: [
            { Year: { $eq: newBooking.getFullYear() } },
            { Month: { $eq: newBooking.getMonth() } },
            { Day: { $eq: newBooking.getDate() } },
            { $or: [
                { $and: [
                    { Hour: { $eq: startTime.hour() } },
                    { Minute: { $gte: startTime.minute() } },
                ] },
                { $and: [
                    { Hour: { $eq: endTime.hour() } },
                    { Minute: { $lte: endTime.minute() } },
                ] },
                { $and: [
                    { Hour: { $gt: startTime.hour() } },
                    { Hour: { $lt: endTime.hour() } },
                ] },
            ] },
          ],
        },
      ],
    }).toArray();
    // 若有搜尋到，則將所有符合條件且已存放在 MongoDB 的資料透過解構賦值返回給前端
    if (existingReservations.length > 0) {
      for(i=0;i<existingReservations.length;i++){
        const { Year, Month, Day, Hour, Minute } = existingReservations[i];
        return res.status(400).json({
          success: false,
          message: 'Reservation time is already booked. Please choose another time.',
          Year,
          Month,
          Day,
          Hour,
          Minute
        });
      }
    }
    // 若沒有搜尋到，就額外新增一筆預約資料
    else{
      const year = newBooking.getFullYear();
      const month = newBooking.getMonth();
      const day = newBooking.getDate();
      const hour = newBooking.getHours();
      const minute = newBooking.getMinutes();
  
      await collection.insertOne({
        Year: year,
        Month: month,
        Day: day,
        Hour: hour,
        Minute: minute,
      });
      res.json({
        success: true,
        message: 'DateTime inserted successfully!',
        Year: year,
        Month: month,
        Day: day,
        Hour: hour,
        Minute: minute,
      });
    } 
  } catch (error) {
    console.error('Error inserting DateTime into MongoDB:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});







app.get("/", (req , res) => {
    res.send( "Hello world!" );
});
app.get('/aboutJerome/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile=JeromeProfile.find(item=>item.id===id)
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }else{
  res.json({id:profile.id,title:profile.title,content:profile.content});
  }
});
// 觀眾回饋
app.get('/feedback/jdShare',(req,res)=>{
  res.send(jdContent)
})
//首頁解析項目區塊
app.get('/home/serviceProcess',(req,res)=>{
  res.send(serviceContent)
})
// 首頁預約流程區塊
app.get('/home/bookingProcess',(req,res)=>{
  res.send(bookingProcess)
})
// 人類圖是什麼分頁
app.get('/human/hoverIntroducer',(req,res)=>{
  res.send(hoverHumanDesign)
})
// 人類圖較紹子分頁 1 (簡介)
app.get('/human/explainHuman',(req,res)=>{
  res.send(explainHumanDesign)
})
// 人類圖較紹子分頁 2 (類型與天賦)
app.get('/human/talentHuman',(req,res)=>{
  res.send(TalentHumanDesign)
})
// 人類圖較紹子分頁 3 (角色部分)
app.get('/human/roleHuman',(req,res)=>{
  res.send(roleHumanDesign)
})
// 人類圖介紹分頁 4 (內在權威部分)
app.get('/human/authorHuman',(req,res)=>{
  res.send(authorHumanDesign)
})
// 九大中心
app.get('/human/energyHuman',(req,res)=>{
  res.send(energyHumanDesign)
})
// 作者部分
app.get('/human/writerHuman',(req,res)=>{
  res.send( writerHumanDesign)
})
// 通道部分
app.get('/human/roadHuman',(req,res)=>{
  res.send(roadHumanDesign)
})
// 以下為預約系統的部分
app.get('/bookingIntroduction/isDesktop',(req,res)=>{
  res.send(isDesktopContent)
})
app.get('/bookingIntroduction/isMobile',(req,res)=>{
  res.send(isMobile)
})




app.listen(9000,()=>{
      console.log('Server running at port 9000 !')
})