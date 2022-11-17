import style from "./filter.module.scss";
import Form from "react-bootstrap/Form";

function Filter() {
  return (
    <div id={style.filter}>
      <h2>Filter</h2>
      <div id={style.regions}>
        <p className={style.filterTitle}>Regions</p>
        <Form.Check type="checkbox" label="Grad Zagreb" />
        <Form.Check type="checkbox" label="Zagorje" />
        <Form.Check type="checkbox" label="Slavonija" />
        <Form.Check type="checkbox" label="Istra" />
        <Form.Check type="checkbox" label="Dalmacija" />
        <Form.Check type="checkbox" label="Međimurje" />
      </div>
      <div id={style.range}>
        <p className={style.filterTitle}>Range</p>
        <div className={style.range}>
          <Form.Range />
        </div>
      </div>
      <div id={style.taing}>
        <p className={style.filterTitle}>Rating</p>
        <Form.Check type="checkbox" label="5 stars" />
        <Form.Check type="checkbox" label="4 stars" />
        <Form.Check type="checkbox" label="3 stars" />
        <Form.Check type="checkbox" label="2 stars" />
        <Form.Check type="checkbox" label="1 stars" />
      </div>
    </div>
  );
}

export default Filter;
