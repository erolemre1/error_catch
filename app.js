document.getElementById("myBtn").addEventListener("click", function (e) {
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var errors = document.getElementById("errors");
 errors.innerHTML = " ";
  try {
    if (name.value.length === 0) {
      throw new Error("Name is required");
    }

    if (name.value.length > 20) {
      throw new Error("Name is to long");
    }
    if (age.value.length === 0) {
        throw new Error("Age is required");
      }
      if (isNaN(age.value)) {
        throw new Error("Age is not numeric");
      }
  } catch(err) {

    ///errorda error kelimesinin gelmesini istemiyosan  err.message bu şekilde yazmalısın
    errors.innerHTML = err.message;
   
  }  
  finally {
      name.value= " ";
      age.value = " ";
  }

  e.preventDefault();
});
 
errors.style.color="red"
errors.style.fontWeight="bold"
errors.style.fontSize="25px"