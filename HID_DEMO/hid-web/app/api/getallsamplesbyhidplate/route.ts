// import { promise } from "zod";

import { HIDSampleStatus } from "@/configs/AppConfig";



export async function GET(req: Request) {

  

    const { searchParams } = new URL(req.url);
  
    function randomDate(start: { getTime: () => number; }, end: { getTime: () => number; }) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }
   
      const data = Array.from({ length: 100 }, (_, i) =>  ({
        
       
           
        samplenumber: Math.floor(Math.random() * 1000), 
        referencenumber: Math.floor(Math.random() * 1000), 
        kind:"test" ,
        patientid :  i + 1 ,
        hidplateno: `HID_${Math.floor(Math.random() * 1000)}`,  
        rundate: randomDate(new Date(2012, 0, 1), new Date()),  
        score : Math.floor(Math.random() * 100),
        status : HIDSampleStatus[Math.floor(Math.random()*HIDSampleStatus.length)],
        actions:''
      
      }));
  

  
      const pageIndex = parseInt(searchParams.get('pageIndex') || '') || 0;

      const pageSize = parseInt(searchParams.get('pageSize') || '') || 10;
    
      // Helper function for pagination
      const paginate = (array: string | unknown[], pageIndex: number, pageSize: number) => {
        return array.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
      };
  
      const paginatedData = paginate(data, pageIndex, pageSize);
  
  
        // await new Promise((res)=> {
        //   setTimeout(res,30000)
        // })
        return new Response(JSON.stringify({
          rows: paginatedData,
          rowCount: data.length,
          pageCount: Math.ceil(data.length / pageSize),
        }), {
      headers: { 'Content-Type': 'application/json' },
    })
    
    
    }
    
  
  
  
  