import style from "./info.module.css";
import InfoPicture from "./infoPicture";

function Info(props) {
  return (
    <div id={style.info}>
      <div id={style.infoText}>
        <h1>{props.region.title}</h1>
        <ul className={style.font}>
          <li>
            <b>Vineyard area:</b> {props.region.vineyard_area} ha
          </li>
          <li>
            <b>Number of registered producers:</b> {props.region.producers}
          </li>
          <li>
            <b>White wines:</b>
            <ul>
              {props.region.wines.white_wines.map((wine) => (
                <li key={wine}>{wine}</li>
              ))}
            </ul>
          </li>
          <li>
            <b>Red wines:</b>
            <ul>
              {props.region.wines.red_wines.map((wine) => (
                <li key={wine}>{wine}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div id={style.infoPictures}>
        <InfoPicture src="/infoPicture/zagreb1.jpg" alt="1" />
        <InfoPicture src="/infoPicture/zagreb2.jpg" alt="2" />
      </div>
    </div>
  );
}

export default Info;
