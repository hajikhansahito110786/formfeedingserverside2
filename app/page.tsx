

"use server"
//import form from "next/form"
import { formAction } from "./action/formAction";
//import { useSearchParams } from "next/navigation";


export default async function Home() {

  //const query=useSearchParams();
  //const name1=query.get("name1");
  //const id1=query.get("id");

  return (
    <div>
      home page
      <form action={formAction}>
      
<input type="text" name="name1" placeholder="data"  className="bg-slate-100 border-4 shadow-black m-5"/>

<br/>
<input type="number" name="id" placeholder="id"  className="bg-slate-100 border-4 shadow-black m-5"/>

<input type="submit" name="submit" placeholder="submit"  className="bg-slate-100 border-4 shadow-black m-5"/>

      </form>
      <p>

      
      </p>

        </div>
      
  );
}
