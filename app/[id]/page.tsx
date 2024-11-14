"use client";
import { useParams,useSearchParams } from "next/navigation";

const Page= () =>{
  const usePathparameter=useParams();
  console.log(usePathparameter);
    //console.log(params)
    const useSearchparameter=useSearchParams();
    console.log(useSearchparameter);
    const name=useSearchparameter.get("name1")
    const id=useSearchparameter.get("id1")
    console.log(name);
    //const {id}=await params;
    //const {name,age,edu}=await searchParams;
    //console.log(name,age,edu);


    return(
      <div>
       <h1>
       page
       </h1>
       <h1>
        id.....
       {usePathparameter.id}
       <br/>
       {id}
        </h1>
        <br/>
       <h1>
        name....
       {name}
       
       </h1>
      
          </div>
        
    );
  };
  export default Page;
  