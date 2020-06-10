const logo = document.querySelectorAll("#logoAnimacao path");

for (let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLenght()}`);
}