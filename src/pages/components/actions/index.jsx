import style from "../Reports.module.css";
export function Actions({ investments, reports }) {
  console.log(reports);
  return (
    <>
      <section className={style.container}>
        <header>
          <h3>{investments.description}</h3>
          <h4>
            Rendimento total de{" "}
            <span className={style.status}>R$ 614,54 (+61,45%)</span>
          </h4>
        </header>
        <main className={style.conatiner_info}>
          {reports.length > 0 &&
            reports.map((item) => {
              if (item.investmentId === investments.id) {
                return (
                  <div className={style.info}>
                    <p>
                      {item.month}/{item.year}
                    </p>
                    <p>R$ {item.value}</p>
                    <p>0,00%</p>
                  </div>
                );
              }
            })}
        </main>
      </section>
    </>
  );
}
