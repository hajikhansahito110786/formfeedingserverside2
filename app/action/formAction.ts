"use server"

import { redirect } from "next/navigation";

export const formAction=async(formData:FormData)=>{
    const name1=await formData.get("name1");
    const id1=await formData.get("id");

    console.log("formdata.....123",name1,id1);
    redirect(`/${id1}/?name1=${name1}`);
    
}