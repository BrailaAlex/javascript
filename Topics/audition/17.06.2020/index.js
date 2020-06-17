const format = (n, c, d, t) => {
    let c = isNaN(c = Math.abs(c)) ? 2 : c;

    d = d == undefined ? "." : d;

    t = t == undefined ? "," : t;

    s = n < 0 ? "-" : "";

    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));

    j = i.length > 3 ? j % 3 : 0;

    let firstPart = (j ? i.substr(0, j) + t : "");
    let secondPart = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
    let thirdPart = c ? d + Math.abs(n - i).toFixed(c).slice(2) : "";
    return s + firstPart + secondPart + thirdPart;
    // let result = s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    // if (result === "0") return "NA";
    // return result;
}

//TODO update names of variables
//don't use var
//don`t use mutation of data
//use short expressions instead of long one and put them into veriables

const format = (n, c, d, t) => {
    //TODO update names
    let c = isNaN(c = Math.abs(c)) ? 2 : c;
    let test = d == undefined ? "." : d;
    let test1 = t == undefined ? "," : t;
    let test2 = n < 0 ? "-" : "";
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c))));
    j = i.length > 3 ? j % 3 : 0;
    let firstPart = j ? i.substr(0, j) + t : "";
    let secPart = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
    let thirdPart = c ? d + Math.abs(n - i).toFixed(c).slice(2) : "";
    return test2 + firstPart + secPart + thirdPart;
};

// don’t mutate variable
// name variables CORRECT!
// don’t use var
// don’t use extra (   )
// long expressions move to the variables