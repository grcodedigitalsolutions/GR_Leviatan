"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const dotenv = __importStar(require("dotenv"));
const vscode = __importStar(require("vscode"));
const genai_1 = require("@google/genai");
const axios_1 = __importDefault(require("axios"));
const path = __importStar(require("path"));
dotenv.config({
    path: path.resolve(__dirname, "../.env")
});
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
var count = 1;
let api_keys = [
    process.env.API_KEY_1,
    process.env.API_KEY_2,
    process.env.API_KEY_3,
    process.env.API_KEY_4,
    process.env.API_KEY_5,
    process.env.API_KEY_6,
];
const geminiClient = new genai_1.GoogleGenAI({ apiKey: GEMINI_API_KEY });
async function callOpenRouterModel(prompt, modelId, api_key) {
    const response = await axios_1.default.post("https://openrouter.ai/api/v1/chat/completions", {
        model: modelId,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6,
        max_tokens: 4000,
    }, {
        headers: {
            "Authorization": `Bearer ${api_key}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://gr-code-digital.com",
            "X-Title": "GR Leviatan Extension"
        },
        timeout: 60000,
    });
    const content = response.data?.choices?.[0]?.message?.content;
    if (!content)
        throw new Error("El modelo no devolvió contenido.");
    return content.trim();
}
const MODEL_OPTIONS = [
    { label: "Gemini (gemini-2.5-flash)", description: "Google — rápido y funcional", modelId: "gemini-2.5-flash", engine: "Gemini" },
    { label: "DeepSeek: R1", description: "Razonamiento avanzado para código complejo", modelId: "deepseek/deepseek-r1:free", engine: "Free" },
    { label: "Qwen: Qwen3 235B A22B", description: "Modelo MoE potente con gran capacidad", modelId: "qwen/qwen3-235b-a22b:free", engine: "Free" },
    { label: "Meta: Llama 4 Scout", description: "Multimodal y muy rápido", modelId: "meta-llama/llama-4-scout:free", engine: "Free" },
    { label: "Qwen: Qwen3 Coder 480B", description: "Especializado en programación", modelId: "qwen/qwen3-coder:free", engine: "Free" },
    { label: "Google: Gemma 3 27B", description: "Alto rendimiento en código", modelId: "google/gemma-3-27b-it:free", engine: "Free" },
    { label: "DeepSeek: R1 Distill Llama 70B", description: "Razonamiento eficiente", modelId: "deepseek/deepseek-r1-distill-llama-70b:free", engine: "Free" },
];
async function selectModel() {
    return await vscode.window.showQuickPick(MODEL_OPTIONS, {
        placeHolder: "Selecciona un modelo GRATIS",
        canPickMany: false
    });
}
async function callAI(prompt, modelId, engine) {
    if (engine === "Gemini") {
        const result = await geminiClient.models.generateContent({
            model: modelId,
            contents: prompt,
        });
        const candidate = result.candidates?.[0];
        if (!candidate || !candidate.content) {
            throw new Error("Gemini no devolvió contenido válido.");
        }
        const parts = candidate.content.parts;
        if (!parts || parts.length === 0) {
            throw new Error("Gemini no devolvió partes de texto.");
        }
        const rawText = parts[0].text;
        if (!rawText) {
            throw new Error("Gemini no devolvió texto.");
        }
        return rawText.trim();
    }
    else {
        let success = false;
        const maxAttempts = api_keys.length;
        let currentAttempt = 0;
        let currentKeyIndex = count % api_keys.length;
        let modifiedCode = "";
        while (currentAttempt < maxAttempts && !success) {
            const currentKey = api_keys[currentKeyIndex];
            vscode.window.setStatusBarMessage(`Intentando con API Key ${currentKeyIndex + 1}...`, 500);
            try {
                modifiedCode = await callOpenRouterModel(prompt, modelId, currentKey);
                vscode.window.showInformationMessage(`✅ API Key ${currentKeyIndex + 1} funcionó correctamente.`);
                success = true;
            }
            catch (error) {
                const errorMessage = error.response?.data?.error?.message || error.message || "Error desconocido";
                vscode.window.showWarningMessage(`❌ API Key ${currentKeyIndex + 1} falló: ${errorMessage}`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                currentKeyIndex = (currentKeyIndex + 1) % api_keys.length;
                currentAttempt++;
            }
        }
        if (!success) {
            throw new Error("Todas las claves de API fallaron.");
        }
        count = currentKeyIndex;
        return modifiedCode;
    }
}
function extractCodeBlock(text) {
    const match = text.match(/```(?:\w+)?\n([\s\S]*?)\n```/);
    return match ? match[1].trim() : text;
}
async function modifyCodeWithFullContext(editor, pickedModel, userRequest) {
    const document = editor.document;
    const selection = editor.selection;
    const fullCode = document.getText();
    const selectedCode = document.getText(selection);
    const isSelection = !selection.isEmpty;
    const languageId = document.languageId;
    const fileName = path.basename(document.fileName);
    // Prompt mejorado con contexto completo
    const contextPrompt = isSelection
        ? `Archivo: ${fileName} (${languageId})\n\n**CÓDIGO COMPLETO DEL ARCHIVO (para contexto):**\n\`\`\`${languageId}\n${fullCode}\n\`\`\`\n\n**CÓDIGO SELECCIONADO A MODIFICAR:**\n\`\`\`${languageId}\n${selectedCode}\n\`\`\`\n\nSolicitud: "${userRequest}"\n\nModifica SOLO la sección seleccionada, manteniendo compatibilidad con el resto del código. Devuelve SOLO el código modificado sin explicaciones ni marcas de código.`
        : `Archivo: ${fileName} (${languageId})\n\n**CÓDIGO COMPLETO:**\n\`\`\`${languageId}\n${fullCode}\n\`\`\`\n\nSolicitud: "${userRequest}"\n\nModifica el código según la solicitud. Devuelve SOLO el código modificado sin explicaciones ni marcas de código.`;
    return await callAI(contextPrompt, pickedModel.modelId, pickedModel.engine);
}
function activate(context) {
    const modifyCodeCommand = vscode.commands.registerCommand("grLeviatan.modifyCode", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No hay editor activo.");
            return;
        }
        const pickedModel = await selectModel();
        if (!pickedModel)
            return;
        const userRequest = await vscode.window.showInputBox({
            prompt: `Describe la mejora (Modelo: ${pickedModel.label})`
        });
        if (!userRequest)
            return;
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Generando con ${pickedModel.label}...`,
            cancellable: false
        }, async (progress) => {
            try {
                const modifiedCode = await modifyCodeWithFullContext(editor, pickedModel, userRequest);
                const cleanCode = extractCodeBlock(modifiedCode);
                const edit = new vscode.WorkspaceEdit();
                const selection = editor.selection;
                const range = selection.isEmpty
                    ? new vscode.Range(0, 0, editor.document.lineCount, 0)
                    : selection;
                edit.replace(editor.document.uri, range, cleanCode);
                await vscode.workspace.applyEdit(edit);
                vscode.window.showInformationMessage(`✅ Código actualizado con ${pickedModel.label}`);
            }
            catch (error) {
                vscode.window.showErrorMessage(`❌ ${error.message}`);
            }
        });
    });
    const refactorCodeCommand = vscode.commands.registerCommand("grLeviatan.refactorCode", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No hay editor activo.");
            return;
        }
        const pickedModel = await selectModel();
        if (!pickedModel)
            return;
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Refactorizando con ${pickedModel.label}...`,
            cancellable: false
        }, async (progress) => {
            try {
                const modifiedCode = await modifyCodeWithFullContext(editor, pickedModel, "Refactoriza este código para mejorar legibilidad, rendimiento y mantenerlo según best practices. Mantén la misma funcionalidad.");
                const cleanCode = extractCodeBlock(modifiedCode);
                const edit = new vscode.WorkspaceEdit();
                const selection = editor.selection;
                const range = selection.isEmpty
                    ? new vscode.Range(0, 0, editor.document.lineCount, 0)
                    : selection;
                edit.replace(editor.document.uri, range, cleanCode);
                await vscode.workspace.applyEdit(edit);
                vscode.window.showInformationMessage(`✅ Código refactorizado`);
            }
            catch (error) {
                vscode.window.showErrorMessage(`❌ ${error.message}`);
            }
        });
    });
    const explainCodeCommand = vscode.commands.registerCommand("grLeviatan.explainCode", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No hay editor activo.");
            return;
        }
        const pickedModel = await selectModel();
        if (!pickedModel)
            return;
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Explicando con ${pickedModel.label}...`,
            cancellable: false
        }, async (progress) => {
            try {
                const document = editor.document;
                const selection = editor.selection;
                const fullCode = document.getText();
                const selectedCode = document.getText(selection);
                const prompt = selection.isEmpty
                    ? `Explica detalladamente qué hace este código:\n\n\`\`\`\n${fullCode}\n\`\`\``
                    : `Explica detalladamente qué hace esta sección de código:\n\n\`\`\`\n${selectedCode}\n\`\`\`\n\nContexto del archivo completo:\n\`\`\`\n${fullCode}\n\`\`\``;
                const explanation = await callAI(prompt, pickedModel.modelId, pickedModel.engine);
                vscode.window.showInformationMessage(explanation.substring(0, 200) + "...");
                // Mostrar en un panel
                const channel = vscode.window.createOutputChannel("Leviatan - Explicación");
                channel.clear();
                channel.append(explanation);
                channel.show();
            }
            catch (error) {
                vscode.window.showErrorMessage(`❌ ${error.message}`);
            }
        });
    });
    const fixErrorCommand = vscode.commands.registerCommand("grLeviatan.fixError", async (diagnostic) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No hay editor activo.");
            return;
        }
        const pickedModel = await selectModel();
        if (!pickedModel)
            return;
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Corrigiendo error con ${pickedModel.label}...`,
            cancellable: false
        }, async (progress) => {
            try {
                const document = editor.document;
                const fullCode = document.getText();
                const errorLine = document.lineAt(diagnostic.range.start.line).text;
                const errorMessage = diagnostic.message;
                const prompt = `Archivo: ${path.basename(document.fileName)}\n\nCódigo completo:\n\`\`\`\n${fullCode}\n\`\`\`\n\nError en línea ${diagnostic.range.start.line + 1}:\n- Línea: ${errorLine}\n- Error: ${errorMessage}\n\nCorrige SOLO la línea con error manteniendo compatibilidad con el resto del código. Devuelve SOLO el código corregido sin explicaciones.`;
                const fixedCode = await callAI(prompt, pickedModel.modelId, pickedModel.engine);
                const cleanCode = extractCodeBlock(fixedCode);
                const edit = new vscode.WorkspaceEdit();
                edit.replace(document.uri, diagnostic.range, cleanCode);
                await vscode.workspace.applyEdit(edit);
                vscode.window.showInformationMessage(`✅ Error corregido`);
            }
            catch (error) {
                vscode.window.showErrorMessage(`❌ ${error.message}`);
            }
        });
    });
    context.subscriptions.push(modifyCodeCommand);
    context.subscriptions.push(refactorCodeCommand);
    context.subscriptions.push(explainCodeCommand);
    context.subscriptions.push(fixErrorCommand);
    vscode.commands.registerCommand("grLeviatan.fixDiagnostic", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No hay editor activo.");
            return;
        }
        // Obtener diagnósticos en el editor actual
        const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);
        if (diagnostics.length === 0) {
            vscode.window.showInformationMessage("No hay errores en este archivo.");
            return;
        }
        // Si hay solo uno, corregir directamente
        if (diagnostics.length === 1) {
            vscode.commands.executeCommand("grLeviatan.fixError", diagnostics[0]);
            return;
        }
        // Si hay múltiples, mostrar selector
        const selected = await vscode.window.showQuickPick(diagnostics.map((d, i) => ({
            label: `Línea ${d.range.start.line + 1}: ${d.message.substring(0, 50)}`,
            description: d.source || "Desconocido",
            diagnostic: d
        })), { placeHolder: "Selecciona el error a corregir" });
        if (selected) {
            vscode.commands.executeCommand("grLeviatan.fixError", selected.diagnostic);
        }
    });
}
function deactivate() { }
