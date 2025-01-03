import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/clientprom";
export async function POST(request) {
    let data = await request.json();
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("users");

    if(data.password==data.confirmedpassword){let locator = {email: data.email};
    let changes = {
        $set: {
            password: data.password,
            name: data.name,
            isverified: true,
            age:data.age
        }
    };

    const result = await collection.updateOne(locator,changes)
    console.log(result)
    if(result){
        let a = await collection.deleteMany({isverified:false})
        return NextResponse.json({message:"Passwords matches perfectly!",result,success:true});
    }
else{
    return NextResponse.json({message:"Passwords do not match",success:false})
}
}
    else{
        return NextResponse.json({message:"Passwords do not match",success:false})
    }
}