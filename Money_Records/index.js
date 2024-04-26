window.addEventListener("load", () => {
  const form = document.querySelector("#newRecord");
  const getName = document.querySelector("#getName");
  const getAmount = document.querySelector("#getAmount");
  const getPurpose = document.querySelector("#getPurpose");
  const show = document.querySelector(".show");
  const edit = document.querySelector(".edit");
  const del = document.querySelector(".delete");

  // Div Maker function used for making list item of Records
  let divMaker = (Name, Amount, Purpose) => {
    let rowClasses = ["row", "text-center", "my-3", "bg-light"];
    const row = document.createElement("div");
    row.classList.add(...rowClasses);

    let colClasses = ["col-sm-3", "p-2"];
    const col1 = document.createElement("div");
    col1.classList.add(...colClasses);
    const col2 = document.createElement("div");
    col2.classList.add(...colClasses);
    const col3 = document.createElement("div");
    col3.classList.add(...colClasses);
    const col4 = document.createElement("div");
    col4.classList.add(...colClasses);

    const input1 = document.createElement("input");
    input1.classList.add("showName");
    input1.type = "text";
    input1.value = Name;
    input1.setAttribute("readonly", "readonly");

    //Appending input1 to the column1
    col1.appendChild(input1);

    const input2 = document.createElement("input");
    input2.classList.add("showAmount");
    input2.type = "text";
    input2.value = Amount;
    input2.setAttribute("readonly", "readonly");
    //Appending input2 to the column2
    col2.appendChild(input2);

    const input3 = document.createElement("input");
    input3.classList.add("showPurpose");
    input3.type = "text";
    input3.value = Purpose;
    input3.setAttribute("readonly", "readonly");

    //Appending input3 to the column3
    col3.appendChild(input3);

    const editButt = document.createElement("button");
    editButt.type = "button";
    editButt.classList.add("btn", "btn-warning", "edit", "mx-1");
    editButt.innerHTML = "Edit";
    const deleButt = document.createElement("button");
    deleButt.type = "button";
    deleButt.classList.add("btn", "btn-danger", "delete");
    deleButt.innerHTML = "Delete";

    // Appending buttons to the column 4
    col4.appendChild(editButt);
    col4.appendChild(deleButt);

    //Appending columns to the row
    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    //Appending row to the conatainer
    show.appendChild(row);

    editButt.addEventListener("click", (e) => {
      if (editButt.innerText.toLowerCase() === "edit") {
        // Edit mode

        editButt.innerText = "Save";
        input1.removeAttribute("readonly");
        input2.removeAttribute("readonly");
        input3.removeAttribute("readonly");
        input1.focus();
        input2.focus();
        input3.focus();
      } else {
        // Save mode
        editButt.innerText = "Edit";
        input1.setAttribute("readonly", "readonly");
        input2.setAttribute("readonly", "readonly");
        input3.setAttribute("readonly", "readonly");

        // Access the edited values
        const editedName = input1.value;
        const editedAmount = input2.value;
        const editedPurpose = input3.value;

        // Get the parent row of the clicked button
        const row = e.target.closest(".row");

        // Get the original Name value to identify the item in local storage
        const originalName = row.querySelector(".showName").value;

        // Update the data in local storage
        let data = get_dataFromLocalStorage();
        const itemIndex = data.findIndex((item) => {
          item.Name === originalName;
        });

        if (itemIndex !== -1) {
          // Item found
          data[itemIndex].Name = editedName;
          data[itemIndex].Amount = editedAmount;
          data[itemIndex].Purpose = editedPurpose;
        }

        // Update local storage with the modified data
        add_datatoLocalStorage(data);
      }
    });
    deleButt.addEventListener("click", (e) => {
      // Get the parent row of the clicked button
      const getconfirmation=confirm("Are you sure you want to delete the record");
        if(getconfirmation){

        
      const row = e.target.closest(".row");
      

      // Get the Name value from the first input field within the row
      const nameToDelete = row.querySelector(".showName").value;

      // Get the current data from local storage
      let data = get_dataFromLocalStorage();

      // Filter out the item to be deleted
      data = data.filter((item) => item.Name !== nameToDelete);

      // Update local storage with the filtered data
      add_datatoLocalStorage(data);

      // Remove the row from the DOM
      row.remove();
    }});
  };

  //  All the inputs were passed to divMaker
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Name = getName.value.toLowerCase();
    const Amount = getAmount.value.toLowerCase();
    const Purpose = getPurpose.value.toLowerCase();
    let newItemValue = get_dataFromLocalStorage();
    divMaker(Name, Amount, Purpose);

    newItemValue.push({ Name: Name, Amount: Amount, Purpose: Purpose });
    add_datatoLocalStorage(newItemValue);

    getName.value = "";
    getAmount.value = "";
    getPurpose.value = "";
  });

  const add_datatoLocalStorage = (newitem) => {
    return localStorage.setItem("Money_Records", JSON.stringify(newitem));
  };
  const get_dataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("Money_Records")) || [];
  };
  const showitems = () => {
    let data = get_dataFromLocalStorage();
    data.forEach((per) => {
      divMaker(per.Name, per.Amount, per.Purpose);
    });
  };
  showitems();
});
