import { priceFormatter } from "../../../utils/formatters";
import style from "../Reports.module.css";
export function Actions({ investments, reports }) {
  const filteredReports =
    reports.length > 0 &&
    reports.filter((item) => item.investmentId === investments.id);
  const filteredPrices = filteredReports.map((item) => item.value.toFixed(2));
  function mountDate(year, month) {
    const months = [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ];
    const date = `${months[month - 1]}/${year}`;

    return date;
  }

  function mountIncomePercentage(value, index) {
    const base = value.toFixed(2);
    const difference =
      filteredReports[index - 1] !== undefined
        ? base - filteredReports[index - 1].value.toFixed(2)
        : base - base;
    const percentage = difference / 100;
    const formatted = `${percentage.toFixed(2).replace(".", ",")}%`;

    return formatted;
  }

  const totalIncome =
    filteredReports.length > 0 &&
    Number(filteredPrices[filteredPrices.length - 1]) -
      Number(filteredPrices[0]);

  const totalPercentage = totalIncome.toFixed(2) / 100;

  const mountTotalIncome =
    Math.sign(totalPercentage) === 1
      ? `R$ ${totalIncome.toFixed(2)} (+${totalPercentage
          .toFixed(2)
          .replace(".", ",")}%)`
      : `R$ ${totalIncome.toFixed(2)} (${totalPercentage
          .toFixed(2)
          .replace(".", ",")}%)`;

  return (
    <>
      <section className={style.container}>
        <header>
          <h3>{investments.description}</h3>
          <h4>
            Rendimento total de{" "}
            <span
              className={
                Math.sign(totalPercentage) === 1
                  ? style.status_positive
                  : style.status_negative
              }
            >
              {mountTotalIncome}
            </span>
          </h4>
        </header>
        <main className={style.conatiner_info}>
          {filteredReports.map((item, index) => {
            return (
              <div className={style.info}>
                <p>{mountDate(item.year, item.month)}</p>
                <p>{priceFormatter.format(item.value)}</p>
                <p>{mountIncomePercentage(item.value, index)}</p>
              </div>
            );
          })}
        </main>
      </section>
    </>
  );
}
