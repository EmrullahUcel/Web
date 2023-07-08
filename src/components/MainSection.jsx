import { Link } from "react-router-dom";



const MainSection = () => {
  return (
    <div className="pc:w-full pc:h-[200px] pc:flex justify-between  rounded-lg p-3 mt-4">
      <div>
        <h1 className="text-center pc:my-5 pc:text-5xl pc:mb-10 pc:mt-[-20px] text-violet-800">
          Merhaba !
        </h1 >
        <p className="pc:text-justify pc:w-64 pc:overflow-hidden leading-[18px]">
          Ben Emrullah . 2022 aralık ayında bir heves olarak başladığım yazılıma şuan Front end Developer olma yolunda ilerliyorum .
          benimle ilgili daha fazla şey öğrenmek isterseniz <Link className="text-red-500" to="/About">About Me</Link> tıklayablirsiniz
        </p>
      </div>
      <div className="border-2 border-fuchsia-950 pc:w-72 pc:h-60 flex text-center items-center justify-center
      phone:h-44">
        Burada bir resim var
      </div>
    </div>
  )
}

export default MainSection;