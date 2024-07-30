import chalk from "chalk";

const QRCodePrompt = [
  {
    name: "link",
    description: chalk.yellow.bold("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo de QR CODE (1 - Imagem ou (2 - Terminal"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    require: true,
  },
];

export default QRCodePrompt;
