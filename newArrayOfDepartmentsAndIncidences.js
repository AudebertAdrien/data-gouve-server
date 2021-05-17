const calculateIncidenceRate = require("./calculateIncidenceRate");

// expected as a result {department: incidence} : [ { '1': '1.37' }, { '2': '2.76' }, { '3': '0.60' } ]
module.exports = function (dataCovid19) {
  console.log("newArrayOfDepartmentsAndIncidences");
  // get all the departments number
  let findDepartmentsNumbers = [...new Set(dataCovid19.map((doc) => doc.dep))];

  let result = findDepartmentsNumbers.map((num) => {
    let sortedDep = dataCovid19.filter((doc) => doc.dep === num);
    let obj = {
      [`${num}`]: calculateIncidenceRate(sortedDep),
    };
    return obj;
  });
  return result;
};