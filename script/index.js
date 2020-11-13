
const button = document.querySelector(".button")

button.addEventListener('click', (event) => {
    event.preventDefault();

    // Valores de elementos
    let name = document.querySelector("#formGroupExampleInput").value;
    let email = document.querySelector("#formGroupExampleInput2").value;
    let tel = document.querySelector("#formGroupExampleInput3").value;
    let tel2 = document.querySelector("#formGroupExampleInput4").value;
    document.querySelector("#formGroupExampleInput").value = ""
    document.querySelector("#formGroupExampleInput2").value =""
    document.querySelector("#formGroupExampleInput3").value = ""
    document.querySelector("#formGroupExampleInput4").value = ""

    // Criação de elementos
    let response = document.querySelector('#containerCandidate')
    response.innerHTML = '';

    let divName = document.createElement('div')

    let labelName = document.createElement('label')
    labelName.classList.add('bold')
    let nameInclude = document.createElement('p')

    let labelEmail = document.createElement('label')
    labelEmail.classList.add('bold')
    let emailInclude = document.createElement('p')

    let labelTel = document.createElement('label')
    labelTel.classList.add('bold')
    let telInclude = document.createElement('p')

    let labelTel2 = document.createElement('label')
    labelTel2.classList.add('bold')
    let tel2Include = document.createElement('p')
   
    // labels
    labelName.textContent = "Nome:"
    labelEmail.textContent = "E-mail:"
    labelTel.textContent = "Telefone:"
    labelTel2.textContent = "Telefone2:"

    nameInclude.textContent = name
    emailInclude.textContent = email
    telInclude.textContent = tel
    tel2Include.textContent = tel2

    response.appendChild(divName)
    divName.appendChild(labelName)
    divName.appendChild(nameInclude)
    divName.appendChild(labelEmail)
    divName.appendChild(emailInclude)
    divName.appendChild(labelTel)
    divName.appendChild(telInclude)
    divName.appendChild(labelTel2)
    divName.appendChild(tel2Include)
   
   //*************************************Lembrar de fazweer*************************
    if(name == ""){
        nameInclude.textContent = "Nome não informado"
    }
    if(email == ""){
        emailInclude.textContent = "E-mail não informado, que pena"
    }
    if(tel == ""){
        telInclude.textContent = "Telefone não informado"
    }
    if(tel2 == ""){
        tel2Include.textContent = "Telefone não informado"
    }
  
})
      
