const BackPage = ({ children, state }) => {
  return (
    <div
      style={{ backgroundColor: state.bgColor, transition: "all 2s" }}
      className="pc:w-10/12 h-[490px] phone:w-[275px] 
    phone:flex phone:flex-col phone:h-[560px] px-12 py-5 bg-white m-32 shadow-[10px_13px_19px_5px_rgba(0,0,0,0.3)] "
    >
      {children}
    </div>
  );
};

export default BackPage;
