/**
 * @returns {HTMLElement}
 */
const makeEl = (tag, innerVal = null) => {
  const t = document.createElement(tag);

  if (innerVal) t.innerHTML = innerVal;

  return t;
};

/**
 * @param {Array} rows
 * @param {String[]} rows.cell
 * @returns {HTMLElement}
 */
const makeHead = (rows = null) => {
  const thead = makeEl("thead");

  if (!rows) return thead;

  rows.forEach(row => {
    const tr = makeEl("tr");

    row.forEach(cell => {
      const th = makeEl("th", cell);
      tr.append(th);
    });

    thead.append(tr);
  });

  return thead;
};

/**
 * @param {Array} rows
 * @param {String[]} rows.cell
 * @returns {HTMLElement}
 */
const makeBody = (rows = null) => {
  const tbody = makeEl("tbody");

  if (!rows) return tbody;

  rows.forEach(row => {
    const tr = makeEl("tr");

    row.forEach(cell => {
      const th = makeEl("td", cell);
      tr.append(th);
    });

    tbody.append(tr);
  });

  return tbody;
};

/**
 * @param {Array} rows
 * @param {String[]} rows.cell
 * @param {Array} columns
 * @param {String[]} columns.cell
 * @returns {HTMLElement}
 */
const makeTable = (headRows = [], bodyRows = []) => {
  const table = makeEl("table");

  table.append(makeHead(headRows));
  table.append(makeBody(bodyRows));

  return table;
};

const TableCreator = (() => {
  return {
    makeHead: makeHead,
    makeBody: makeBody,
    makeTable: makeTable,
  };
})();

export default TableCreator;
