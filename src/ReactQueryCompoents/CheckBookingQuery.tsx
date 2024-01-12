 import { useQuery,UseQueryResult } from '@tanstack/react-query';

 interface CheckBookingInterface{
    BookingItem:string,
    BookingPerson:string,
    Day:number,
    Hour:number,
    Minute:number,
    Sessions:Array<{
        SessionId:string,
        Cookie: {
            path: string;
            _expires: string;
            originalMaxAge: number;
            httpOnly: boolean;
          };
    }>
    TimeItem:string,
    Year:number
 }


 export const useCheckBooking=():UseQueryResult< CheckBookingInterface|Error>=>{
         return useQuery({
            queryKey:['checkBooking'],
             queryFn:async()=>{
                 const response=await fetch('http://localhost:8001/checkBooking')
                 const data=await response.json() as  CheckBookingInterface
                 return data
             }
         })  
 }