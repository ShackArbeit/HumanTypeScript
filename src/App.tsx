import viteLogo from '/vite.svg'
import {useState,useEffect} from 'react'


type UserData={
  id:number
  job:string
  salary:number
}

function App() {
  const[data,setData]=useState<UserData[]>([])
  useEffect(()=>{
    const fetchApi=async()=>{
      try{
        const response=await fetch('http://localhost:8000/user')
        if(!response){
          throw new Error('Can not get data from port 8000 !')
        }
        const Userdata=await response.json()
        console.log(Userdata)
        setData(Userdata)
      }catch(error){
        console.log()
      }
    }
    fetchApi()
   },[])
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>HumanDeisgn TypeScript</h1>
      {data.map((item) => (
            <div key={item.id}>
             <p>Job: {item.job}</p>
             <p>Salary: {item.salary}</p>
              </div>
          ))}
    </>
  )
}

export default App
