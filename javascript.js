const searchInput = document.getElementById('searchInput');
const doctorNameInput = document.getElementById('doctorNameInput');
const doctorCRMInput = document.getElementById('doctorCRMInput');
const doctorInscription = document.getElementById('doctorInscription');
const doctorEndress = document.getElementById('doctorEndress');
const doctorTelephone = document.getElementById('doctorTelephone');
const dataList = document.getElementById('dataList');
const terms = dataList.getElementsByTagName('dt');
const definitions = dataList.getElementsByTagName('dd');

// Adiciona um evento de input ao campo de pesquisa
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();

    // Se houver texto na caixa de pesquisa, mostrar a lista
    if (filter) {
        dataList.style.display = 'block';
    } else {
        dataList.style.display = 'none';
    }

    // Itera sobre todos os termos e definições da lista
    let hasVisibleItems = false;
    for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        const name = definitions[i * 2];
        const crm = definitions[i * 2 + 1];
        const inscription = definitions[i * 2 + 2];
        const endress = definitions[i * 2 + 3];
        const telephone = definitions[i * 2 + 4];
        const text = term.textContent || term.innerText;

        // Verifica se o texto do termo corresponde ao filtro de pesquisa
        if (text.toLowerCase().indexOf(filter) > -1) {
            term.style.display = '';
            name.style.display = '';
            crm.style.display = '';
            inscription.style.display = '';
            endress.style.display = '';
            telephone.style.display = '';
            hasVisibleItems = true;
        } else {
            term.style.display = 'none';
            name.style.display = 'none';
            crm.style.display = 'none';
            inscription.style.display = 'none';
            endress.style.display = 'none';
            telephone.style.display = 'none';
        }
    }

    // Se não houver itens visíveis, oculta a lista novamente
    if (!hasVisibleItems) {
        dataList.style.display = 'none';
    }
});

// Adiciona evento de clique aos termos para preencher os campos de entrada
for (let i = 0; i < terms.length; i++) {
    terms[i].addEventListener('click', function() {
        const name = definitions[i * 2];
        const crm = definitions[i * 2 + 1];
        const inscription = definitions[i * 2 + 2];
        const endress = definitions[i * 2 + 3];
        const telephone = definitions[i * 2 + 4];
        
        searchInput.value = this.textContent || this.innerText;
        doctorNameInput.value = name.textContent.trim() || name.innerText;
        doctorCRMInput.value = crm.textContent.trim() || crm.innerText;
        doctorInscription.value = inscription.textContent.trim() || inscription.innerText;
        doctorEndress.value = endress.textContent.trim() || endress.innerText;
        doctorTelephone.value = telephone.textContent.trim() || telephone.innerText;
        dataList.style.display = 'none';
    });
}