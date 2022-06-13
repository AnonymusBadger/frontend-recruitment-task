import UserApi from "./../api/users-api";
import TableCreator from "./../utils/table-creator";
import makeLoader from "./../utils/make-loader";

/** @param {Object[]} data */
const cleanData = (data) => {
  const filter = [
    "name", "email", "address", "phone", "company",
  ];

  return data.reduce((agg, entry) => {
    const user = [];

    filter.forEach(key => {
      switch (key) {
      case "address":
        user.push(`${entry[key]["city"]}, ${entry[key]["street"]}, ${entry[key]["suite"]}`);
        break;
      case "company":
        user.push(entry[key]["name"]);
        break;
      default:
        user.push(entry[key]);
      }
    });

    agg.push(user);

    return agg;
  }, []);
};

document.addEventListener("DOMContentLoaded", () => {
  const tableEl = document.querySelector(".user-table");
  const loader = makeLoader();
  let table = null;

  const errorBttn = (() => {
    const bttn = document.createElement("button");
    bttn.classList.add("button", "button--warning");
    bttn.innerHTML = "Error! Try again!";

    bttn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent modal close; for some reason this counts as click outside?!
      bttn.remove();
      fetchData();
    });

    return bttn;
  })();

  const fetchData = () => {
    loader.add(tableEl);

    if (table) table.remove(); // prevent multiple adding tables

    UserApi.getAll({
      success: (data) => {
        table = TableCreator.makeTable([
          [
            "Name", "Email", "Address", "Phone", "Company",
          ],
        ], cleanData(data));
        loader.remove();
        tableEl.append(table);
      },
      error: (error) => {
        loader.remove();
        tableEl.append(errorBttn);
      },
    });
  };

  document.addEventListener("modal-1-show", () => {
    if (!table) { // load table only once
      fetchData();
    }
  });
});
