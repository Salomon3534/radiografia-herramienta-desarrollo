const down_button = document.getElementById("down");
const toggle_button = document.getElementById("yap");
const search_input = document.getElementById("feature-search");
const search_message = document.getElementById("search-message");

const features = [
    {
        name: "GDScript",
        category: "Programación",
        description: "Lenguaje de programación integrado en Godot y diseñado para desarrollar videojuegos."
    },
    {
        name: "Motor 2D y 3D",
        category: "Gráficos",
        description: "Permite crear videojuegos en 2D y 3D mediante herramientas de renderizado, iluminación y físicas."
    },
    {
        name: "Sistema de nodos y escenas",
        category: "Arquitectura",
        description: "Permite organizar los elementos del juego en nodos y crear escenas reutilizables."
    },
    {
        name: "Exportación multiplataforma",
        category: "Distribución",
        description: "Permite exportar videojuegos a plataformas compatibles como Windows, Linux, macOS, Android, iOS y la web."
    }
];

down_button.addEventListener("click", () => {
    document.getElementById("msg").textContent = "¡Todo listo!";
});

down_button.addEventListener("dblclick", () => {
    console.log("Se ha hecho doble clic en el botón.");
});

toggle_button.addEventListener("click", () => {
    const content = document.getElementById("yapyapyap");

    content.classList.toggle("h");

    toggle_button.textContent = content.classList.contains("h")
        ? "Mostrar contenido"
        : "Ocultar contenido";
});

function generate_feature_cards(feature_list) {
    const feature_list_element = document.getElementById("zalist");

    feature_list_element.replaceChildren();

    feature_list.forEach(feature => {
        const list_item = document.createElement("li");

        list_item.innerHTML = `
            <h3>${feature.name}</h3>
            <p><strong>Categoría:</strong> ${feature.category}</p>
            <p>${feature.description}</p>
        `;

        feature_list_element.appendChild(list_item);
    });
}

search_input.addEventListener("input", () => {
    const search_text = search_input.value.trim().toLowerCase();

    const filtered_features = features.filter(feature =>
        feature.name.toLowerCase().includes(search_text) ||
        feature.description.toLowerCase().includes(search_text)
    );

    generate_feature_cards(filtered_features);

    search_message.textContent = filtered_features.length === 0
        ? "No se encontraron características que coincidan con la búsqueda."
        : "";
});

generate_feature_cards(features);