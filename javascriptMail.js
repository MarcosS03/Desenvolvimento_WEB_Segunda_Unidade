    const res = require("express/lib/response");

    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            mensagem: document.getElementById("mensagem").value
        }

        const serviceID = "service_blfqwbf";
        const templateID = "template_tieck5p";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("telefone").value = "";
                    document.getElementById("mensagem").value = "";
                    console.log(res);
                    alert("Sua mensagem foi enviada com sucesso!!!");
                })
            .catch((err) => console.log(err));
    }