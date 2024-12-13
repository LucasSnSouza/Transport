const default_aplications = [
    {
        name: "Shadeless Animes",
        thumbnail: "/assets/images/thumbnails/thumbnail-shadeless-animes.png",
    }
];

const default_commands = [
    {
        title: "Meus aplicativos",
        command: "Exiba meus aplicativos"
    }
]

export function getSystemAplications(){
    return default_aplications;
}

export function getSystemCommands(){
    return default_commands;
}