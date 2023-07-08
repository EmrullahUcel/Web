


const BackPage = (props) => {
    return <div className="min-[850px]:w-10/12 min-[850px]:h-[390px] min-[280px]:w-[275px] min-[280px]:flex min-[280px]:flex-col min-[280px]:h-[550px] px-12 py-5 bg-white m-32 shadow-[10px_13px_19px_5px_rgba(0,0,0,0.3)] rounded-2xl">
        {props.children}
    </div>


}

export default BackPage