const Separator = (number) => {
  var num = number;
  var commas = num.toLocaleString("en-US");
  var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return commas;
};

const intSeparator = (numb) => {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
};

const numberLine = (str) => {
  const lines = str.split(/\r\n|\r|\n/);
  console.log(lines);
  return lines;
};

const validateEmail = (email) => {

  if (!email) {
    return {
      isDown: false,
      message: "Email Required",
    };
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return {
      isDown: false,
      message: "Invalid email address",
    };
  } else {
    return {
      isDown: true,
      message: "Thanks for submit your email",
    };
  }
};

export { Separator, intSeparator, numberLine, validateEmail };
