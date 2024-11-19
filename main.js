

let vote = Number(prompt ("Inserisci un voto"))


if (vote < 18) {
    console.log("Insufficiente");
}else if (vote >= 18 && vote < 21) {
    console.log("sufficiente");
}else if (vote >= 21 && vote < 24) {
    console.log("buono");
}else if (vote >= 24 && vote < 27) {
    console.log("distinto");
}else if (vote >= 27 && vote <= 29) {
    console.log("ottimo");
}else if (vote == 30) {
    console.log("eccellente");
}else{
    console.log("voto invalido");
}



let v = prompt ("inserisci un voto");


switch(true) {
    case (v < 18):
        console.log("Insufficiente");
        break;
    case (v >= 18 && v < 21):
        console.log("sufficiente");
        break;
    case (v >= 21 && v < 24):
        console.log("buono");
        break;
    case (v >= 24 && v < 27):
        console.log("distinto");
        break;
    case (v >= 27 && v <= 29):
        console.log("ottimo");
        break;
    case (v == 30):
        console.log("eccellente");
        break;
    default:
        console.log("voto invalido");
  }
  