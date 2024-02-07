import { useRef } from "react";
import Card from "./Card";

export default function Forground() {

  const data = [
{
    desc :"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    filesize:"0.9mb",
    close:false,
    tag:{ isopen : true , tagTitle : "Download Now" , TagColor:"green"},   
  },
{
    desc :"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    filesize:"0.9mb",
    close:false,
    tag:{ isopen : true , tagTitle : "uplode" , TagColor:"blue"},   
  },
  {
    desc :"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    filesize:"0.9mb",
    close:false,
    tag:{ isopen : false , tagTitle : "Download Now" , TagColor:"green"},   
  },
{
    desc :"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    filesize:"0.9mb",
    close:true,
    tag:{ isopen : true , tagTitle : "Download Now" , TagColor:"green"},   
  },
{
    desc :"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    filesize:"0.9mb",
    close:true,
    tag:{ isopen : true , tagTitle : "Download Now" , TagColor:"green"},   
  },
  {
    desc :"Lorem ipsum dolor sit, amet consectetur adipisicing.",
    filesize:"0.9mb",
    close:false,
    tag:{ isopen : true , tagTitle : "uplode" , TagColor:"blue"},   
  },



]

const ref = useRef(null)

  return (
    <>
  <div ref={ref} className="bg-black/20 w-full h-full flex flex-wrap z-[3] fixed top-0 left-0" >
{
  data.map((item,i)=>(
    <div key={i}>
    <Card data={item}  referance={ref} />
    </div>
  ))
}          
  </div>
    </>
  )
}
