window.addEventListener("load", () => {
    const form = document.querySelector("#newRecord");
    const getName = document.querySelector("#getName");
    const getAmount = document.querySelector("#getAmount");
    const getPurpose = document.querySelector("#getPurpose");
    const show = document.querySelector(".show");

    

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const Name = getName.value;
      const Amount = getAmount.value;
      const Purpose = getPurpose.value;

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
        if (editButt.innerText.toLowerCase() == "edit") {
          editButt.innerText = "Save";
          input1.removeAttribute("readonly");
          input2.removeAttribute("readonly");
          input3.removeAttribute("readonly");
          input1.focus();
          input2.focus();
          input3.focus();
        } else {
          editButt.innerText = "Edit";
          input1.setAttribute("readonly", "readonly");
          input2.setAttribute("readonly", "readonly");
          input3.setAttribute("readonly", "readonly");
        }
      });
      deleButt.addEventListener("click", (e) => {
        const getconfirmation=confirm("Are you sure you want to delete the record");
        if(getconfirmation){

          show.removeChild(row);
        }
        
      });
      getName.value="";
      getAmount.value="";
      getPurpose.value="";
      

      

    });
    
    
  });