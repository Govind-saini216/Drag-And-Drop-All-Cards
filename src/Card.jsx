import { CiImageOff } from "react-icons/ci";
import { CiSaveDown1 } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"




export default function Card({data,referance}) {

  return (
    <>
    <motion.div drag dragConstraints={referance} whileTap={{ scale:0.8 }} dragTransition={{bounceStiffness:600, bounceDamping:5}} className="w-52 h-64 text-white p-4  bg-slate-800 relative m-6 rounded-[20px]">
      <spna className="text-4xl" ><CiImageOff/></spna>
      <p className="leading-tight text-sm mt-5 font-semibold">{data.desc}</p>
     <div className="absolute bottom-0 left-0 w-full">
       <div className="flex items-center pb-5 px-4 justify-between">
        <h1>{data.filesize}</h1>
        <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
            {
                data.close ? <IoCloseCircle/>  :
          <CiSaveDown1 size="1.2em" color='#fff' />
            }
        </span>
       </div>

{
    data.tag.isopen && 
     <div className={ `rounded-b-[20px] flex items-center justify-center tag w-full py-4 ${data.tag.TagColor === "blue" ? "bg-blue-600" :"bg-green-600" } `}>
        <h3 className="text-sm font-semibold" >{data.tag.tagTitle}</h3>
     </div>
}

     </div>

    </motion.div>
    
    </>
  )
}
