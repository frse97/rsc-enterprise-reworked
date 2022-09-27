import { memo } from "react";
import { ProductIcon } from "../../../../icons";
import "./Product.scss";

const ProductStep: React.FC = () => {
  return (
    <div className="third-step">
      <div className="product">
        <h1 className="title">Product - Market fit</h1>
        <p className="description">
          A lot of ideas look great until they’re tested on the market. We mix
          our knowledge of the technology with your aspirations and needs and a
          strong vision for the future in order to deliver a high quality,
          effective solution/product.
        </p>
      </div>
      <div className="product-img">
        <ProductIcon />
      </div>
    </div>
  );
};

export default memo(ProductStep);
