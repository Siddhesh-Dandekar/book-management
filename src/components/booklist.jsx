import Bookcard from "./bookcard";
// import Books from "../utilis/mockdata"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../utilis/useFetch";

function Booklist() {
    const [Books , setBooks] = useState([])
    const [search, setSearch] = useState('');
    const [filterbook, setFilterbook] = useState(Books);

    function handlesearch() {
        const filter = Books.filter(item => item.title.toUpperCase().includes(search.toUpperCase()));
        console.log(filter)
        setFilterbook(filter)
    }

    const { data, error, loading } = useFetch("https://www.dbooks.org/api/recent")

    useEffect(() => {
        if (data) {
            console.log(data.books)
            setBooks(data.books)
            setFilterbook(data.books)
        }
    }, [data])


    if(loading){
        return <p>Loading Data....</p>;
    }

    // async function fetchdata(){
    //     try{
    //         const response = await fetch("https://www.dbooks.org/api/recent");
    //         const data = await response.json();
    //         setBooks(data.books)
    //         setFilterbook(data.books);

    //     }
    //     catch(err){
    //         console.log('this is error',err);
    //     }
    // }

    return (
        <div className="m-4">
            <div className="flex justify-center"><input type="text" className="border-black border-2" onChange={(e) => setSearch(e.target.value)} />
                <button className="border-black border-2 mx-2 px-2 rounded-sm" onClick={handlesearch}>Search</button></div>
            <br />
            <div className="flex gap-3 flex-wrap justify-center">
                {filterbook.map(item => <Link to={`book/${item.id}`} key={item.id} className="hover:scale-105 duration-300"><Bookcard bookdata={item} /></Link>)}
            </div>
        </div>
    )
}

export default Booklist;