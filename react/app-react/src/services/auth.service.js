import axios from 'axios';

// Armazenando o endereço da API
const apiUrl = "http://localhost:8000/api";

const authService = {

    // Função que se comunica com o back-end para efetuar o login
    async sendLogin(data){
        let endpoint = apiUrl + "/auth";
        return axios.post(endpoint, data)
    },

    // Função que salva os dados do usuário no localstorage
    setLoggedUser(userData){
        try {
            let parsedData = JSON.stringify(userData)
            localStorage.setItem("user", parsedData)
        } catch (error) {
            console.log(error)
        }
    },

    // Função que recupera os dados do usuário do localstorage
    getLoggedUser(){
        try {
            let userData = localStorage.getItem("user")
            if(!userData) return null;
            let parsedData = JSON.parse(userData)
            return parsedData;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    // Função que limpa o localstorage, removendo os dados do usuário
    clearLoggedUser(){
        localStorage.clear()
    }

}

export default authService;