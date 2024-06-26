import { AiFillStar } from "react-icons/ai";
import "./Products.css"
import { BsFillBagHeartFill } from "react-icons/bs";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" 
          alt="Shoe"></img>
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-review">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                $<del>300</del> 200
              </div>

              <div className="bag">
                <BsFillBagHeartFill></BsFillBagHeartFill> 

              </div>

            </section>

          </div>
        </section>

      </section>
    </>
  )
}

export default Products;
