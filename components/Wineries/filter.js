import style from "./filter.module.scss";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import Image from "next/future/image";

function Filter(props) {
  const [isOpen, setIsOpen] = useState(false); // Managing filter window on mobile devices

  // Function for controling filter window on mobile devices
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
            <p className={style.filterTitle}>County</p>
            {props.counties.map((county) => (
              <Form.Check type="checkbox" key={county.id} label={county.name} />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Filter;
