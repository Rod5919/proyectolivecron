function get_values() {
  let user = {
  "fullname":document.getElementById("fullname").value,  
  "email":document.getElementById("email").value,
  "phone":document.getElementById("phone").value,
  "subject":document.getElementById("subject").value,
  "mat-1":document.getElementById("mat-1").value,
  "mat-2":document.getElementById("mat-2").value,
  "mat-3":document.getElementById("mat-3").value,
  "mat-4":document.getElementById("mat-4").value,
  "mat-5":document.getElementById("mat-5").value,
  "mat-6":document.getElementById("mat-6").value,
  "message":document.getElementById("message").value
  };

  fs.writeFileSync(path.resolve(__dirname, 'profile.json'), JSON.stringify(user));
}

var sendbutt = document.getElementById('send').addEventListener("click", get_values);