import { Link } from "react-router-dom";



const MainSection = () => {
  return (
    <div className="min-[850px]:w-full min-[850px]:h-[200px] min-[850px]:flex justify-between  rounded-lg p-3 mt-4">
      <div>
        <h1 className="text-center min-[850px]:my-5 min-[850px]:text-5xl min-[850px]:mb-10 min-[850px]:mt-[-20px] text-violet-800">
          Merhaba !
        </h1 >
        <p className="min-[850px]:text-justify min-[850px]:w-64 min-[850px]:overflow-hidden leading-[18px]">
          Ben Emrullah . 2022 aralık ayında bir heves olarak başladığım yazılıma şuan Front end Developer olma yolunda ilerliyorum .
          benimle ilgili daha fazla şey öğrenmek isterseniz <Link className="text-red-500" to="/About">About Me</Link> tıklayablirsiniz
        </p>
      </div>
      <div className="border-2 border-fuchsia-950 min-[850px]:w-72 min-[850px]:h-60 flex text-center items-center justify-center
      min-[280px]:h-44">
        Burada bir resim var
      </div>
    </div>
  )
}

export default MainSection;