import Image from "next/future/image";
import style from "./itemModal.module.css";
import data from "../../utils/data";

function ItemModal(props) {
  const product = data.products.find((product) => product.name === props.name);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={style.content}>
      <h1 className={style.name}>{product.name}</h1>
      <Image
        src={product.image}
        alt="item_image"
        width={500}
        height={500}
        objectFit="contain"
      />
      <h2>{product?.price.toFixed(2)} €</h2>
      <p>Type of wine: {product.type}</p>
      <p>Region: {product.region}</p>
      <p>Volume: {product.volume}</p>
    </div>
  );
}

export default ItemModal;
