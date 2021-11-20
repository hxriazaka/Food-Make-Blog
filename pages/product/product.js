

const Product = ({ img, title}) => {
  return (
    <div>
      <div className="product container">
        <div className="text-white product-ctnt1">
          <img src={img} />
          <h6>{title}</h6>
        </div>
      </div>
    </div>
  );
};

export default Product;