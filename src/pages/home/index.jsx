import style from "./Home.module.css";
import { Cripto } from "../components/cripto";
import { Actions } from "../components/actions";

export function Home() {
  return (
    <>
      <div className={style.container}>
        <Actions />
        <Cripto />
      </div>
    </>
  );
}
