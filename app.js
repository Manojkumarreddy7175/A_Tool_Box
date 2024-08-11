// app.js

// Sample data for AI tools
const aiTools = [
    {
        name: "Tool 1",
        description: "A great tool for NLP.",
        category: "nlp",
        industry: "healthcare",
        url: "https://example.com/tool1"
    },
    {
        name: "Tool 2",
        description: "An amazing tool for Image Generation.",
        category: "image-generation",
        industry: "education",
        url: "https://example.com/tool2"
    },
    // Add more tools as needed
];

// Function to render the AI tools
function renderTools(tools) {
    const toolsList = document.getElementById('tools-list');
    toolsList.innerHTML = '';

    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';

        toolCard.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" target="_blank">Learn More</a>
        `;

        toolsList.appendChild(toolCard);
    });
}

// Initial render of all tools
renderTools(aiTools);

// Filter tools based on search and filters
function filterTools() {
    const search = document.getElementById('search').value.toLowerCase();
    const functionality = document.getElementById('functionality').value;
    const industry = document.getElementById('industry').value;

    const filteredTools = aiTools.filter(tool => {
        return (
            (tool.name.toLowerCase().includes(search) || tool.description.toLowerCase().includes(search)) &&
            (functionality === 'all' || tool.category === functionality) &&
            (industry === 'all' || tool.industry === industry)
        );
    });

    renderTools(filteredTools);
}

// Event listeners for search and filters
document.getElementById('search').addEventListener('input', filterTools);
document.getElementById('functionality').addEventListener('change', filterTools);
document.getElementById('industry').addEventListener('change', filterTools);
