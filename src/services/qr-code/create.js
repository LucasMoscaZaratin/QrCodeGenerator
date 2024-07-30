import prompt from "prompt";
import QRCodePrompt from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

export default async function createQRCode() {
  prompt.get(QRCodePrompt, handle);
  prompt.start;
}
