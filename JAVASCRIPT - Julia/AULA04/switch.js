let avaliacao = Number(prompt(`Avalie nosso atendimento de 1-5: `))

switch(avaliacao){
    case 1:
        alert(`Péssimo`);
        break;
    case 2:
        alert(`Ruim`);
        break;
    case 3:
        alert(`Regular`);
        break;
    case 4:
        alert(`Bom`);
        break;
    case 5:
        alert(`Ótimo`);
        break;
    default:
        alert(`Atendimento não foi avaliado`);
        break;
}