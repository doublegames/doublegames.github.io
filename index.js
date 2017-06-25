function check(form) { /*function to check userid & password*/
if(form.userid.value == "admin" && form.pswrd.value == "lkr22jv") {
      window.open('adminp.html')
    }
    else if(form.userid.value == "user" && form.pswrd.value == "user") {
    /*window.location = 'start.html';*/
    window.location = 'uc.html'
  }
  else {
      alert("Error Password or Username")/*displays error message*/
  }
}
