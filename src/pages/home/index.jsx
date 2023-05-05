import style from "./Home.module.css";
import { Actions } from "../components/actions";
import { useState } from "react";
import { api } from "../../lib/axios";
import { useEffect } from "react";

export function Home() {
  const [investments, setInvestments] = useState([]);
  const [reports, setReports] = useState([]);

  function getInvestments() {
    api.get("/investments").then(async ({ data }) => {
      setInvestments(await data);
    });
  }

  function getReports() {
    api.get("/reports").then(async ({ data }) => {
      setReports(await data);
    });
  }

  useEffect(() => {
    getInvestments();
    getReports();
  }, []);
  return (
    <>
      <div className={style.container}>
        {investments.map((item) => {
          return <Actions investments={item} reports={reports} key={item.id} />;
        })}
      </div>
    </>
  );
}
