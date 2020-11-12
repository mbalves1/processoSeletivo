
const button = document.querySelector(".button")

button.addEventListener('click', (event) => {
    event.preventDefault();
    let name = document.querySelector("#formGroupExampleInput").value;
    let email = document.querySelector("#formGroupExampleInput2").value;
    let tel = document.querySelector("#formGroupExampleInput3").value;
    let tel2 = document.querySelector("#formGroupExampleInput4").value;
    
    
    let response = document.querySelector('#containerCandidate')
    response.innerHTML = '';

    let divName = document.createElement('div')

    let labelName = document.createElement('label')
    let nameInclude = document.createElement('p')

    let labelEmail = document.createElement('p')
    let emailInclude = document.createElement('p')

    let telInclude = document.createElement('p')
    let tel2Include = document.createElement('p')
   

    labelName.textContent = "Nome:"
    labelEmail.textContent = "E-mail:"

    nameInclude.textContent = name
    emailInclude.textContent = email
    telInclude.textContent = tel
    tel2Include.textContent = tel2

    response.appendChild(divName)
    divName.appendChild(labelName)
    divName.appendChild(nameInclude)
    divName.appendChild(labelEmail)
    divName.appendChild(emailInclude)
    divName.appendChild(telInclude)
    divName.appendChild(tel2Include)
   

    
})
      
