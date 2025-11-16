import * as dotenv from "dotenv";
import * as vscode from "vscode";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";
import * as path from "path";

dotenv.config({
    path: path.resolve(__dirname, "../.env")  // SUBE UN NIVEL
});
// --- Claves directamente en el código (SOLO DESARROLLO LOCAL) ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

var count = 1;

let api_keys: string[] = [
    process.env.API_KEY_1!,
    process.env.API_KEY_2!,
    process.env.API_KEY_3!,
    process.env.API_KEY_4!,
    process.env.API_KEY_5!,
    process.env.API_KEY_6!,
];
console.log("key1: ",api_keys[0])
const geminiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function callOpenRouterModel(prompt: string, modelId: string, api_key: string): Promise<string> {
    const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: modelId,
            messages: [{ role: "user", content: prompt }],
            temperature: 0.6,
            max_tokens: 2000,
        },
        {
            headers: {
                "Authorization": `Bearer ${api_key}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://gr-code-digital.com",
                "X-Title": "GR Leviatan Extension"
            },
            timeout: 60000,
        }
    );

    const content = response.data?.choices?.[0]?.message?.content;
    if (!content) throw new Error("El modelo no devolvió contenido.");
    return content.trim();
}

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand("grLeviatan.modifyCode", async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No hay editor activo.");
            return;
        }

        const selection = editor.selection;
        const code = selection.isEmpty ? editor.document.getText() : editor.document.getText(selection);

        // ✅ MODELOS GRATIS ACTUALIZADOS (todos sin consumir crédito)
        const modelOptions = [
            // Google (gratis con tu clave)
            { label: "Gemini (gemini-2.5-flash)", description: "Google — rápido y funcional", modelId: "gemini-2.5-flash", engine: "Gemini" },
            
            { label: "Mistral 7B", description: "Open-source, rápido y eficiente en generación de texto.", modelId: "mistralai/mistral-7b-instruct:free", engine: "Free" },
            { label: "Kwaipilot: KAT-Coder-Pro V1", description: "Optimizado para programación autónoma y tareas de ingeniería real, con ejecución precisa de código.", modelId: "kwaipilot/kat-coder-pro:free", engine: "Free" },
            { label: "NVIDIA: Nemotron Nano 12B 2 VL", description: "Multimodal de 12B, destaca en análisis de video y documentos, rápido y eficiente.", modelId: "nvidia/nemotron-nano-12b-v2-vl:free", engine: "Free" },
            { label: "Tongyi DeepResearch 30B A3B", description: "Especializado en investigación profunda y razonamiento de largo plazo, consistente y confiable.", modelId: "alibaba/tongyi-deepresearch-30b-a3b:free", engine: "Free" },
            { label: "Meituan: LongCat Flash Chat", description: "Modelo MoE ultrarrápido para conversaciones largas, activa parámetros eficientemente para mayor velocidad.", modelId: "meituan/longcat-flash-chat:free", engine: "Free" },
            { label: "NVIDIA: Nemotron Nano 9B V2", description: "Razonamiento general eficiente, ideal para tareas de análisis y generación de texto.", modelId: "nvidia/nemotron-nano-9b-v2:free", engine: "Free" },
            { label: "OpenAI: gpt-oss-20b", description: "Genera y razona texto eficientemente, con arquitectura MoE para tareas complejas.", modelId: "openai/gpt-oss-20b:free", engine: "Free" },
            { label: "Z.AI: GLM 4.5 Air", description: "Versión ligera de GLM-4.5, rápida en respuestas y razonamiento, con modos híbridos.", modelId: "z-ai/glm-4.5-air:free", engine: "Free" },
            { label: "Qwen: Qwen3 Coder 480B A35B", description: "Programación autónoma y manejo de repositorios grandes, con activación selectiva eficiente.", modelId: "qwen/qwen3-coder:free", engine: "Free" },
            { label: "Venice: Uncensored", description: "Control total del usuario, sin filtros ni alineación, ideal para instrucciones avanzadas y personalización.", modelId: "cognitivecomputations/dolphin-mistral-24b-venice-edition:free", engine: "Free" },
            { label: "Google: Gemma 3n 2B", description: "Ligero y multimodal, eficiente en texto, imagen y audio, ideal para dispositivos con pocos recursos.", modelId: "google/gemma-3n-e2b-it:free", engine: "Free" },
            { label: "TNG: DeepSeek R1T2 Chimera", description: "Razonamiento potente, rápido y eficiente, excelente para análisis de largo contexto y diálogos abiertos.", modelId: "tngtech/deepseek-r1t2-chimera:free", engine: "Free" },
            { label: "Mistral: Mistral Small 3.2 24B", description: "Generación de texto e imágenes, seguimiento de instrucciones y uso de herramientas con salidas estructuradas.", modelId: "mistralai/mistral-small-3.2-24b-instruct:free", engine: "Free" },
            { label: "DeepSeek: DeepSeek R1 0528 Qwen3 8B", description: "Razonamiento profundo en matemáticas, programación y lógica, transfiriendo eficiencia a modelos más pequeños.", modelId: "deepseek/deepseek-r1-0528-qwen3-8b:free", engine: "Free" },
            { label: "DeepSeek: R1 0528", description: "Razonamiento avanzado de alto rendimiento, comparable con modelos de referencia en tareas complejas.", modelId: "deepseek/deepseek-r1-0528:free", engine: "Free" },
            { label: "Google: Gemma 3n 4B", description: "Procesa texto, imagen y audio con eficiencia en dispositivos limitados, óptimo para tareas locales y privadas.", modelId: "google/gemma-3n-e4b-it:free", engine: "Free" },
            { label: "Meta: Llama 3.3 8B Instruct", description: "Variante ultrarrápida para respuestas inmediatas, ideal para chat y generación de texto rápida.", modelId: "meta-llama/llama-3.3-8b-instruct:free", engine: "Free" },
            { label: "Qwen: Qwen3 4B", description: "Alterna entre razonamiento lógico y diálogo eficiente, excelente para chats, instrucciones y flujos complejos.", modelId: "qwen/qwen3-4b:free", engine: "Free" },
            { label: "Qwen: Qwen3 30B A3B", description: "Alto rendimiento en razonamiento y diálogo, activa selectivamente 3.3B de 30.5B parámetros y soporta contextos largos.", modelId: "qwen/qwen3-30b-a3b:free", engine: "Free" },
            { label: "Qwen: Qwen3 14B", description: "Versátil en razonamiento y diálogo, multilingüe y capaz de manejar contextos muy extensos.", modelId: "qwen/qwen3-14b:free", engine: "Free" },
            { label: "Qwen: Qwen3 235B A22B", description: "Modelo MoE con enorme capacidad, razonamiento avanzado, soporte multilingüe y contextos de hasta 131K tokens.", modelId: "qwen/qwen3-235b-a22b:free", engine: "Free" },
            { label: "TNG: DeepSeek R1T Chimera", description: "Razonamiento eficiente y generación de texto optimizada para instrucciones y análisis rápido.", modelId: "tngtech/deepseek-r1t-chimera:free", engine: "Free" },
            { label: "Microsoft: MAI DS R1", description: "Mejora de DeepSeek R1 con mayor seguridad y apertura, optimizado en tareas multilingües y éticamente alineadas.", modelId: "microsoft/mai-ds-r1:free", engine: "Free" },
            { label: "ArliAI: QwQ 32B RpR v1", description: "Diálogos largos y creativos, manteniendo coherencia, diversidad estilística y roleplay avanzado.", modelId: "arliai/qwq-32b-arliai-rpr-v1:free", engine: "Free" },
            { label: "Meta: Llama 4 Scout", description: "Multimodal, 12 idiomas, contextos gigantes, optimizado para chat, código y razonamiento visual.", modelId: "meta-llama/llama-4-scout:free", engine: "Free" },
            { label: "Qwen: Qwen2.5 VL 32B Instruct", description: "Razonamiento matemático, análisis visual y generación de texto y código con alta precisión.", modelId: "qwen/qwen2.5-vl-32b-instruct:free", engine: "Free" },
            { label: "DeepSeek: DeepSeek V3 0324", description: "Modelo MoE de última generación, alto rendimiento en múltiples tareas y razonamiento rápido.", modelId: "deepseek/deepseek-chat-v3-0324:free", engine: "Free" },
            { label: "Google: Gemma 3 4B", description: "Multimodal, eficiente, soporta 128K tokens, 140+ idiomas y destaca en razonamiento y código.", modelId: "google/gemma-3-4b-it:free", engine: "Free" },
            { label: "Google: Gemma 3 12B", description: "Multimodal, eficiente en tareas de texto, código e imágenes, con soporte para contextos largos y multilingüe.", modelId: "google/gemma-3-12b-it:free", engine: "Free" },
            { label: "Google: Gemma 3 27B", description: "Multimodal, alto rendimiento en razonamiento y código, contextos largos y excelente modelo abierto.", modelId: "google/gemma-3-27b-it:free", engine: "Free" },
            { label: "Mistral: Mistral Small 3", description: "Generación de texto e imágenes con instrucciones y herramientas, optimizado para tareas variadas.", modelId: "mistralai/mistral-small-24b-instruct-2501:free", engine: "Free" },
            { label: "DeepSeek: R1 Distill Llama 70B", description: "Versión destilada de DeepSeek R1, mantiene razonamiento avanzado y eficiencia en modelos más grandes.", modelId: "deepseek/deepseek-r1-distill-llama-70b:free", engine: "Free" },
            { label: "DeepSeek: R1", description: "Modelo base de DeepSeek, eficiente en razonamiento y generación de texto para tareas generales.", modelId: "deepseek/deepseek-r1:free", engine: "Free" },
            { label: "Google: Gemini 2.0 Flash Experimental", description: "Optimizado para pruebas de generación rápida, razonamiento y tareas experimentales de texto.", modelId: "google/gemini-2.0-flash-exp:free", engine: "Free" },
            { label: "Meta: Llama 3.3 70B Instruct", description: "Variante de alta capacidad para generación de texto rápida y razonamiento avanzado.", modelId: "meta-llama/llama-3.3-70b-instruct:free", engine: "Free" },
            { label: "Qwen2.5 Coder 32B Instruct", description: "Optimizado en generación de código, razonamiento y manejo de contextos largos, con precisión y eficiencia.", modelId: "qwen/qwen-2.5-coder-32b-instruct:free", engine: "Free" },
            { label: "Meta: Llama 3.2 3B Instruct", description: "Ligero y rápido, ideal para tareas de chat, generación de texto e instrucciones simples.", modelId: "meta-llama/llama-3.2-3b-instruct:free", engine: "Free" },
            { label: "Qwen2.5 72B Instruct", description: "Alta capacidad para razonamiento, código y tareas multilingües complejas, con soporte de contextos extensos.", modelId: "qwen/qwen-2.5-72b-instruct:free", engine: "Free" },
            { label: "Nous: Hermes 3 405B Instruct", description: "Modelo masivo para tareas multilingües, razonamiento y generación avanzada de texto y código.", modelId: "nousresearch/hermes-3-llama-3.1-405b:free", engine: "Free" },
            { label: "Mistral: Mistral Nemo", description: "Generación rápida y eficiente de texto con soporte para instrucciones y tareas generales.", modelId: "mistralai/mistral-nemo:free", engine: "Free" },
            { label: "Mistral: Mistral 7B Instruct", description: "Versión instruida para generación rápida, precisa y confiable en tareas variadas.", modelId: "mistralai/mistral-7b-instruct:free", engine: "Free" }

        ];

        const pickedModel = await vscode.window.showQuickPick(modelOptions, {
            placeHolder: "Selecciona un modelo GRATIS para modificar tu código",
            canPickMany: false
        });

        if (!pickedModel) {
            vscode.window.showInformationMessage("No se seleccionó ningún modelo.");
            return;
        }

        if (pickedModel.engine === "Gemini" && !geminiClient) {
            vscode.window.showErrorMessage("Error con Gemini.");
            return;
        }

        const userRequest = await vscode.window.showInputBox({
            prompt: `Describe la mejora (Modelo: ${pickedModel.label})`
        });

        if (!userRequest) return;

        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: `Generando con ${pickedModel.label}...`,
            cancellable: false
        }, async (progress) => {
            try {
                const fullPrompt = `Actúa como asistente de codificación. Modifica este código según la solicitud. **SOLO devuelve el código modificado, sin explicaciones, sin marcas extra.**

Solicitud: "${userRequest}"

Código:
\`\`\`
${code}
\`\`\``;

                var modifiedCode: string = "";

                if (pickedModel.engine === "Gemini") {
                    progress.report({ message: "Enviando a Gemini..." });

                    const result = await geminiClient.models.generateContent({
                        model: pickedModel.modelId,
                        contents: fullPrompt,
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

                    modifiedCode = rawText.trim();
                } else {
                    // Nueva lógica para probar cada API key individualmente
                    let success = false;
                    const maxAttempts = api_keys.length;
                    let currentAttempt = 0; 
                    let currentKeyIndex = count % api_keys.length; 
                    while (currentAttempt < maxAttempts && !success) {
                        const currentKey = api_keys[currentKeyIndex];
                        
                        vscode.window.setStatusBarMessage(`Intentando con API Key ${currentKeyIndex + 1}...`, 500);

                        
                        try {
                            modifiedCode = await callOpenRouterModel(fullPrompt, pickedModel.modelId, currentKey);
                            
                            // Si llega aquí, la API funcionó
                            vscode.window.showInformationMessage(`✅ API Key ${currentKeyIndex + 1} funcionó correctamente.`);
                            success = true;
                        } catch (error: any) {
                            // Mostrar el error específico de esta API key
                            const errorMessage = error.response?.data?.error?.message || error.message || "Error desconocido";
                            vscode.window.showWarningMessage(`❌ API Key ${currentKeyIndex + 1} falló: ${errorMessage}`);
                            
                            // Esperar 2 segundos antes de intentar la siguiente
                            await new Promise(resolve => setTimeout(resolve, 2000));
                            
                            // Avanzar al siguiente índice
                            currentKeyIndex = (currentKeyIndex + 1) % api_keys.length;
                            currentAttempt++;
                        }
                    }

                    if (!success) {
                        throw new Error("Todas las claves de API fallaron.");
                    }
                    
                    // Actualizar el contador global para la próxima vez
                    count = currentKeyIndex;
                }

                const match = modifiedCode.match(/```(?:\w+)?\n([\s\S]*?)\n```/);
                if (match) modifiedCode = match[1].trim();

                const edit = new vscode.WorkspaceEdit();
                const range = selection.isEmpty
                    ? new vscode.Range(0, 0, editor.document.lineCount, 0)
                    : selection;
                edit.replace(editor.document.uri, range, modifiedCode);

                await vscode.workspace.applyEdit(edit);
                vscode.window.showInformationMessage(`✅ Código actualizado con ${pickedModel.label}`);
            } catch (error: any) {
                vscode.window.showErrorMessage(`❌ ${error.message}`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

/*
genera un codigo en python para la simulacion de un render de un cubo en 3D con tkinter

genera un codigo en ruby para la simulacion de un render de un cubo en 3D con gtk3
npx tsc
*/