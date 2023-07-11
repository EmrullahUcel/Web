import Header from "./Header";


const BackPage = ({ children, transfer }) => {
  console.log(transfer);
  return (
    <div
      style={{ 
        backgroundColor: transfer.bgColor,
         transition: "all 1s" }}
      className="pc:w-10/12 pc:h-4/5 phone:w-[275px]  relative
    phone:flex phone:flex-col phone:h-[560px] px-12 py-5 bg-white m-32 shadow-[10px_13px_19px_5px_rgba(0,0,0,0.3)] "
    >
      
      <Header />
      {children}
    </div>
  );
};

export default BackPage;
