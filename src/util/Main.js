const Main = {
    getProjects() {
        return
    },

    formSubmit(name, mail, textarea) {
        return fetch("https://formsubmit.co/ajax/26f1b01f5051e565def73cc4550a4c97", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                mail: mail,
                message: textarea
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
}

export default Main;