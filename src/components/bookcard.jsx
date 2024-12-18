function Bookcard(props){
    const {title, authors, publication_year, image} = props.bookdata;
    return(
        <div className="w-52 h-96 overflow-hidden border-black border-2 rounded-sm ">
            <img src={image} alt="" className="w-full h-60"/>
            <div className="p-2">
                <h2><b>{title}</b></h2>
            <span ><u>Author: {authors}</u></span>
            <br />
            <span>Publication - {publication_year}</span></div>
        </div>
    )
}

export default Bookcard