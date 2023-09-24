import connectMongoDB from "./../../../lib/mongodb";

import Post from "./../../../models/post";
import { NextResponse } from "next/server";

export async function GET(){
 try{
    connectMongoDB();
    const res = await Post.find();
    return NextResponse.json(res)
    console.log(res)
    }
    catch(e){
        return NextResponse.json({message:"Connection is failed"}, {status:503})
    }
}

export async function POST(req){
try{
    const {title, content, authorEmail} = await req.json();
    const db =  connectMongoDB();
    const res = await Post.create({
        title,
        content,
        date: Date(),
        authorEmail

    });  
    
    return NextResponse.json({message:"Post created"}, {status:201})
    
}
catch(error){
    return NextResponse.json({message:"Connection is failed"}, {status:503})
    
}
}

export async function DELETE(req){
    
    try{
        const id = req.nextUrl.searchParams.get("id")
       connectMongoDB();
       await Post.findByIdAndDelete(id)
       return NextResponse.json({message:"delete"}, {status:200})
       }
       catch(e){
           return NextResponse.json({message:"Connection is failed"}, {status:503})
       }
   }