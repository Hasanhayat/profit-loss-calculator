
  let expense = 0;

  function calculate() {
    let item = document.querySelector(".item");
    let priceInput = document.querySelector(".price");
    let price = parseInt(priceInput.value);
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let result = document.querySelector(".result");
    let select = document.querySelector("select").value;

    if (!item.value || isNaN(price) || price <= 0) {
      alert("Please enter a valid item and price");
      return;
    }

    if (select == "sell") {
      expense += price;
      sell(item.value, price, result, h1, h2);
    } else {
      expense -= price;
      buy(item.value, price, result, h1, h2);
    }

    item.value = "";
    priceInput.value = "";
    displayTotal();
  }

  function sell(item, price, result, h1, h2) {
    price = `${price} PKR`;
    let div = document.createElement("div");
    div.setAttribute("class", "profit");
    h1.append(item);
    div.append(h1);
    result.append(div);
    h2.append(price);
    div.append(h2);
  }

  function buy(item, price, result, h1, h2) {
    price = `-${price} PKR`;
    let div = document.createElement("div");
    div.setAttribute("class", "loss");
    h1.append(item);
    div.append(h1);
    result.append(div);
    h2.append(price);
    div.append(h2);
  }

  function displayTotal() {
    let totalDiv = document.querySelector("#total");
    totalDiv.setAttribute("class","total")
    totalDiv.innerHTML = "";
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

    if (expense > 0) {
      h1.textContent = "The profit is:";
      h2.textContent = `${expense} PKR`;
    } else if (expense < 0) {
      h1.textContent = "You loss:";
      h2.textContent = `${Math.abs(expense)} PKR`;
    } else {
      h1.textContent = "No profit or loss.";
      h2.textContent = "0 PKR";
    }

    totalDiv.appendChild(h1);
    totalDiv.appendChild(h2);
  }

//   let expense = 0;
//   let totalProfit = 0;
//   let totalLoss = 0;
//   function calculate() {
//     let item = document.querySelector(".item").value;
//     let price = document.querySelector(".price").value;
//     price = Number(price)
//     let h1 = document.createElement("h1");
//     let h2 = document.createElement("h2");
//     let result = document.querySelector(".result");
//     let select = document.querySelector("select").value;
//     let cont = document.querySelector("containor");
//     if (!item || isNaN(price) || price <= 0) {
//       alert("Please enter valid item and price");
//       return;
//     }
//     if (select == "sell" && price > 0) {
//       totalProfit += price;
//       expense += price;
//       const sell = () => {
//         console.log("sell");
//         price = `${price}PKR`;
//         let div = document.createElement("div");
//         div.setAttribute("class", "profit");
//         h1.append(item);
//         div.append(h1);
//         result.append(div);
//         h2.append(price);
//         div.append(h2);
//       };
//       sell();
//     } else {
//       totalLoss += price;
//       expense -= price;
//       const buy = () => {
//         console.log("buy");
//         price = `-${price}PKR`;
//         let div = document.createElement("div");
//         div.setAttribute("class", "loss");
//         h1.append(item);
//         div.append(h1);
//         result.append(div);
//         h2.append(price);
//         div.append(h2);
//       };
//       buy();
//     }
//     const ans = () => {
//       let div = document.createElement("div");
//       if (expense > 0) {
//         div.setAttribute("class", "total");
//         h1.append("Profit is :");
//         div.append(h1);
//         h2.append(expense);
//         div.append(h2);
//         cont.append(div);
//       } else {
//         div.setAttribute("class", "total");
//         h1.append("you loss :");
//         div.append(h1);
//         h2.append(expense);
//         div.append(h2);
//         cont.append(div);
//       }
//       console.log(expense);
//     };
//     ans();
//   }   
  


 