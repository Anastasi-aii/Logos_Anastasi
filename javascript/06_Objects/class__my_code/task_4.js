let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function sum() { 
    let result = 0;
  

  for (let key in salaries) {
     result += salaries[key]
     
      }
      console.log(result);
    }
    sum();
    
