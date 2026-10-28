const p = document.getElementById("down");
const yappington = document.getElementById("yap");
const search_input = document.getElementById("feature-search");
const search_message = document.getElementById("search-message");

const feat_array = [
    {
        name: "GDScript",
        category: "Programación",
        description: "Lenguaje de programación integrado en Godot, diseñado específicamente para el desarrollo de videojuegos."
    },
    {
        name: "Motor 2D y 3D",
        category: "Gráficos",
        description: "Permite crear videojuegos en 2D y 3D con herramientas de renderizado, iluminación y físicas."
    },
    {
        name: "Sistema de nodos y escenas",
        category: "Arquitectura",
        description: "Permite construir juegos mediante nodos organizados en escenas reutilizables y flexibles."
    },
    {
        name: "Exportación multiplataforma",
        category: "Distribución",
        description: "Permite exportar videojuegos a plataformas compatibles como Windows, Linux, macOS, Android, iOS y la web."
    }
];

p.addEventListener("click", () => {
    document.getElementById("msg").textContent = "Chachi pistachi";
});

p.addEventListener("dblclick", () => {
    console.log("mezuzu");
});

yappington.addEventListener("click", () => {
    const yaap = document.getElementById("yapyapyap");
    yaap.classList.toggle("h");

    yappington.textContent = yaap.classList.contains("h")
        ? "Show show show"
        : "Hide it";
});

function generate_za_cards(from_list) {
    const dynalist = document.getElementById("zalist");
    dynalist.replaceChildren();

    from_list.forEach(el => {
        const content = document.createElement("li");

        content.innerHTML = `
            <h3>${el.name}</h3>
            <p><strong>Categoría:</strong> ${el.category}</p>
            <p>${el.description}</p>
        `;

        dynalist.appendChild(content);
    });
}

search_input.addEventListener("input", () => {
    const search_text = search_input.value.trim().toLowerCase();

    const filtered_features = feat_array.filter(feature =>
        feature.name.toLowerCase().includes(search_text) ||
        feature.description.toLowerCase().includes(search_text)
    );

    generate_za_cards(filtered_features);

    search_message.textContent = filtered_features.length === 0
        ? "No se encontraron características que coincidan con tu búsqueda."
        : "";
});

generate_za_cards(feat_array);