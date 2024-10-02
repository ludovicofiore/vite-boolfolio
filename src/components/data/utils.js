const getType = (project) => {
    if (project.type) {
        return project.type.name;
    }
    return 'Nessuna tipologia'
}

const getTechnologies = (project) => {
    if (project.technology.length) {
        return project.technology.map(technology => technology.name).join(', ');
    }
    return 'Nessuna tecnologia'
}


export { getType, getTechnologies }