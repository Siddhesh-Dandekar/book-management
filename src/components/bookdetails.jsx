// import Books from "../utilis/mockdata";
import { useParams } from "react-router-dom";
import useFetch from "../utilis/useFetch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utilis/cartSlice";


function Bookdetails() {
    const { data, error, laoding } = useFetch('https://www.dbooks.org/api/recent');
    const params = useParams();
    const [bookdetail, setBookdetail] = useState([]);

    const dispatch = useDispatch();

    function handleadditem(item) {
        dispatch(addItem(item));
        console.log('hi');
    }

    function handleremoveitem(){
        dispatch(removeItem())
    }
    useEffect(() => {
        if (data) {
            const sample = data.books.filter(x => x.id == params.id);
            setBookdetail(sample)
        }
    }, [data])

    return (
        bookdetail.map(bookdetail => {
            return (
                <section className="w-full flex justify-center">
                    <div key={bookdetail.id} className="m-4 w-60 h-auto border-2 rounded-sm border-black">
                        <img src={bookdetail.image}></img>
                        <div className="p-2">
                            <h1><b>{bookdetail.title}</b></h1>
                            <span>{bookdetail.authors}</span>
                            <br />
                            <span>{bookdetail.publication_year}</span>
                        </div>
                        <button className="border-2 border-black" onClick={()=> handleadditem(bookdetail)}>Add to Cart</button>
                        <button className="border-2 border-black" onClick={()=> handleremoveitem()}>remove item</button>
                    </div>
                   
                </section>

            );
        })
    )
}


export default Bookdetails;