const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("es-ES", { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })
}

export default (dateFormat);
