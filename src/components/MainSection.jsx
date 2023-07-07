import { Link } from "react-router-dom";



const MainSection = () => {
  return (
    <div className="w-full h-[200px] flex justify-between  rounded-lg p-3 mt-4">
      <div>
        <h1 className="my-5 text-5xl mb-20 mt-[-20px]">
          Merhaba !
        </h1 >
        <p className="text-justify w-64 ">
          Ben Emrullah . 2022 aralık ayında bir heves olarak başladığım yazılıma şuan Front end Developer olma yolunda ilerliyorum .
          benimle ilgili daha fazla şey öğrenmek isterseniz <Link className="text-red-500" to="/About">About Me</Link> tıklayablirsiniz
        </p>
      </div>
      <div className="border-2 border-fuchsia-950 w-72 h-60 flex text-center items-center justify-center">
        Burada bir resim var
      </div>
    </div>
  )
}

export default MainSection;