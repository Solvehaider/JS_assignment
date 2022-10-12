// storing the car info with extra parameters as keyword
const carinfo = (manufacturer, modelname, ...keyword) => {
  const carr = {
    manufacturer: manufacturer,
    modelname: modelname,
    extrafeatures: keyword,
  };
  return carr;
};

const obj = carinfo("honda", "city123", { color: "red" }, { cruise: "yes" });
// displaying car info 
console.log("Car Information " , obj);
