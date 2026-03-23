// dependência utilizadas
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

// usuário insere a URL que deseja salvar
inquirer
    .prompt([
    {
        message: "Digite sua URL: ",
        name: "URL"
    },
    ])
    .then((answers) => {
        const url = answers.URL; // url passa a ser uma value que recebe o input da resposta do usuário (answers)
        var qr_svg = qr.image(url); // converte a URL que o usuario digitou anteriormente em um QR
        qr_svg.pipe(fs.createWriteStream("qr_image.png")); // transforma o QR em imagem
        fs.writeFile("texto.txt", url, (err) => { // cria um txt que salva a URL que o usuário digitou
            if (err) throw err;
        console.log('The file has been saved!');
})
    })
    .catch((error) => {
        if (error.isTtyError) {
      // o prompt não conseguiu rodar com sucesso nesse ambiente
        } else {
      // alguma coisa deu errada kkkk
        }
});