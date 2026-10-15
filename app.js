let user = null;
let plants = JSON.parse(localStorage.getItem("plants")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// LOGIN
function login(email, password) {
    user = { email, name: "Utilizador" };
    goTo('home');
}

// LOGOUT
function logout() {
    user = null;
    goTo('login');
}

// ADICIONAR PLANTA
function addPlant(data) {
    plants.push(data);
    localStorage.setItem("plants", JSON.stringify(plants));
    goTo('plants');
}

// EDITAR PLANTA
function updatePlant(index, newData) {
    plants[index] = newData;
    localStorage.setItem("plants", JSON.stringify(plants));
    goTo('plants');
}

// REMOVER PLANTA
function deletePlant(index) {
    plants.splice(index, 1);
    localStorage.setItem("plants", JSON.stringify(plants));
    goTo('plants');
}

// REGISTAR CUIDADO
function registerCare(index) {
    tasks.push({
        plant: plants[index].commonName,
        date: new Date().toLocaleString(),
        type: "Rega"
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Cuidado registado!");
}
