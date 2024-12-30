import clientPromise from "@/app/lib/clientprom";
import { NextResponse } from "next/server";

export async function POST(request) {
    let body = await request.json()
     let client = await clientPromise
     let db = client.db()
     let collection = db.collection("trees")

     let result = await collection.insertOne(body)
     

     return NextResponse.json({saved:body,message:"successfully added",success:true})
}
export async function GET(request) {
     let client = await clientPromise
     let db = client.db()
     let collection = db.collection("trees")

     let everythings = await collection.find().toArray()
     everythings.forEach((it)=>{
          it.links = JSON.parse(it.links)
     })
     return NextResponse.json({data:everythings})
}