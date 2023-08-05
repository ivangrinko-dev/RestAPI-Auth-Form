const btnReg = document.querySelector(".btn-reg");
const usernameInpReg = document.querySelector(".username-inp-reg");
const emailInpReg = document.querySelector(".E-mail-inp-reg");
const phoneInpReg = document.querySelector(".Phone-inp-reg");
const passwordInpReg = document.querySelector(".Password");




const confirmPasswordInpReg = document.querySelector(
  ".Confirm-Password-inp-reg"
);
btnReg.addEventListener("click", async function () {
  const objectToSerwer = {
    username: usernameInpReg.value,
    email: emailInpReg.value,
    phone: phoneInpReg.value,
    pwd: passwordInpReg.value,
  };
  
  const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    body: JSON.stringify(objectToSerwer),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.status);
  console.log(await response.json());
});


const btnAuth = document.querySelector(".btn-auth");
const emailAuth = document.querySelector(".E-mail-inp-auth");
const passwordInpAuth = document.querySelector(".Password-auth");

btnAuth.addEventListener("click", async function () {
  const objectToSerwer = {
    email: emailAuth.value,
    pwd: passwordInpAuth.value,
  };
  console.log(objectToSerwer);
  const response = await fetch("http://localhost:3000/api/authorize", {
    method: "POST",
    body: JSON.stringify(objectToSerwer),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.status);
  console.log(await response.json());
});