import { Link } from "react-router-dom";



const MainSection = () => {
  return (
    <div className="w-96 h-[350px]  rounded-lg p-3 mt-4">
      <h1 className="my-5 text-5xl mt-[-20px] mb-20">
        Merhaba !
      </h1 >
      <p className="text-start ">
        Ben Emrullah . 2022 aralık ayında bir heves olarak başladığım yazılıma şuan Front end Developer olma yolunda ilerliyorum .
        benimle ilgili daha fazla şey öğrenmek isterseniz <Link className="text-red-500" to="/About">About Me</Link> tıklayablirsiniz
      </p>
    </div>
  )
}

export default MainSection;