import style from "./filter.module.scss";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import Image from "next/future/image";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleResize() {
    if (window.innerWidth > 991) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id={style.filter}>
      <div className={style.heading}>
        <h2 className={style.title}>Filters</h2>
        <Image
          src="/filter.svg"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="filters"
          aria-expanded={isOpen}
          className={style.button}
          width={30}
          height={30}
          alt="filter_icon"
        />
      </div>
      <Collapse in={isOpen}>
        <div id={style.filters}>
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
      </Collapse>
    </div>
  );
}

export default Filter;
