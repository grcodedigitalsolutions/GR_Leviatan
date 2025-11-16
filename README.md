<table>
  <tr>
    <td width="150">
      <img src="https://github.com/grcodedigitalsolutions/GR_Leviatan/blob/main/assets/Leviatan.png?raw=true"" width="100%" style="display:block;">
    </td>
    <td>
      <h1>GR Leviatan</h1>
      <em>“Tu Asistente de Codificación Impulsado por más de 40 modelos de IA”</em>
    </td>
  </tr>
</table>

![Banner](https://img.shields.io/badge/GR_Leviatan-v3.0.0-blueviolet?style=for-the-badge\&logo=visual-studio-code)


## 💡 Sobre GR_Leviatan

**GR_Leviatan** es una **extensión privada para VS Code** que convierte tu flujo de trabajo en algo **rápido, intuitivo y potente**.
Gracias a **Google Gemini y Otros Modelos de IA**, puedes:

* Analizar y modificar **fragmentos o archivos completos** de código.
* Solicitar **refactorizaciones, optimizaciones o correcciones** en lenguaje natural.
* Colaborar en equipo con **clave API centralizada** y `.env`.

> ⚠️ **Nota:** Esta extensión es privada y solo funciona con la clave API proporcionada.

---

## ✨ Características Destacadas

| ⚡ Funcionalidad                   | 📌 Detalle                                                             |
| --------------------------------- | ---------------------------------------------------------------------- |
| **Modificación Rápida**           | Refactoriza, optimiza o corrige errores con un solo comando.           |
| **Integración Total**             | Ejecuta cambios directamente desde VS Code sin abrir otra herramienta. |
| **Trabajo en Equipo**             | Todos usan la misma clave API, fácil de gestionar en `.env`.           |
| **Compatibilidad Multi-lenguaje** | `.js`, `.ts`, `.py`, `.cpp`, `.cs` y más.                              |
| **Control Total**                 | Selecciona fragmentos o envía todo el archivo al mismo tiempo.         |

---

## 🎨 Badges & Estado

![VS Code](https://img.shields.io/badge/VS_Code-Compatible-brightgreen?style=for-the-badge\&logo=visual-studio-code)
![Node.js](https://img.shields.io/badge/Node.js-Required-green?style=for-the-badge\&logo=node.js)
![Status](https://img.shields.io/badge/Status-Beta-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)

---

## ⚙️ Instalación y Configuración

> 💡 **Tip:** Haz esto en un entorno limpio de VS Code para evitar conflictos.

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/grcodedigitalsolutions/GR_Leviatan.git
cd GR_Leviatan
```

### 2️⃣ Instalar Dependencias

```bash
npm install
```

### 3️⃣ Configurar la Clave API

Para que GR_Leviatan funcione correctamente necesitas **crear tus propias claves API**. Las claves del 2 al 5 son **opcionales** y deben provenir de cuentas diferentes en OpenRouter.

| Servicio | Badge | Pasos para generar la API |
|----------|-------|---------------------------|
| **Gemini (Google)** | <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width="120"/> | 1. Ve a [Google Cloud Console](https://console.cloud.google.com/).  
2. Crea un proyecto nuevo o selecciona uno existente.  
3. Habilita el API de **Gemini (Google GenAI)**. |
| **OpenRouter** | <img src="https://openrouter.ai/favicon.ico" alt="OpenRouter" width="32"/> | 1. Ve a [OpenRouter](https://openrouter.ai/settings/keys).  
2. Inicia sesión o crea una cuenta nueva.  
3. Genera tus claves API (puedes generar varias, cada una desde cuentas distintas si quieres usar claves de repuesto).  
⚠️ Nota: Las claves 2️ al 6 son opcionales y sirven como respaldo. Se recomienda crearlas desde cuentas diferentes. |


### Tu `.env` debera quedar de este modo

```text
GEMINI_API_KEY="TU_API_KEY_DE_GEMINI"

API_KEY_1="API_KEY_DE_OPENROUTER"
API_KEY_2="API_KEY_OPCIONAL_CUENTA2"
API_KEY_3="API_KEY_OPCIONAL_CUENTA3"
API_KEY_4="API_KEY_OPCIONAL_CUENTA4"
API_KEY_5="API_KEY_OPCIONAL_CUENTA5"
API_KEY_6="API_KEY_OPCIONAL_CUENTA6"
````

# 🧠 Modelos Disponibles 

---

## 🔵 Google

[![Gemini 2.5 Flash - Principal](https://img.shields.io/badge/Gemini_2.5_Flash-FFD700?style=for-the-badge&logoUrl=https://static.cdnlogo.com/logos/g/69/google-gemini.svg)](#)
[![Gemini 2.0 Flash Experimental](https://img.shields.io/badge/Gemini_2.0_Flash_Exp-4285F4?style=for-the-badge&logo=google)](#)  
[![Gemma 3n 2B](https://img.shields.io/badge/Gemma_3n_2B-4285F4?style=for-the-badge&logo=google)](#)  
[![Gemma 3n 4B](https://img.shields.io/badge/Gemma_3n_4B-4285F4?style=for-the-badge&logo=google)](#)  
[![Gemma 3 4B](https://img.shields.io/badge/Gemma_3_4B-4285F4?style=for-the-badge&logo=google)](#)  
[![Gemma 3 12B](https://img.shields.io/badge/Gemma_3_12B-4285F4?style=for-the-badge&logo=google)](#)  
[![Gemma 3 27B](https://img.shields.io/badge/Gemma_3_27B-4285F4?style=for-the-badge&logo=google)](#)

---

## 🟣 Meta – Llama

[![Llama 4 Scout](https://img.shields.io/badge/Llama_4_Scout-6E60F6?style=for-the-badge\&logo=meta)](#)
[![Llama 3.3 70B Instruct](https://img.shields.io/badge/Llama_3.3_70B_Instruct-6E60F6?style=for-the-badge\&logo=meta)](#)
[![Llama 3.3 8B Instruct](https://img.shields.io/badge/Llama_3.3_8B_Instruct-6E60F6?style=for-the-badge\&logo=meta)](#)
[![Llama 3.2 3B Instruct](https://img.shields.io/badge/Llama_3.2_3B_Instruct-6E60F6?style=for-the-badge\&logo=meta)](#)

---

## 🟥 Alibaba – Qwen

[![Qwen3 Coder 480B A35B](https://img.shields.io/badge/Qwen3_Coder_480B_A35B-D32F2F?style=for-the-badge)](#)
[![Qwen3 235B A22B](https://img.shields.io/badge/Qwen3_235B_A22B-D32F2F?style=for-the-badge)](#)
[![Qwen3 30B A3B](https://img.shields.io/badge/Qwen3_30B_A3B-D32F2F?style=for-the-badge)](#)
[![Qwen3 14B](https://img.shields.io/badge/Qwen3_14B-D32F2F?style=for-the-badge)](#)
[![Qwen3 4B](https://img.shields.io/badge/Qwen3_4B-D32F2F?style=for-the-badge)](#)
[![Qwen2.5 VL 32B](https://img.shields.io/badge/Qwen2.5_VL_32B-D32F2F?style=for-the-badge)](#)
[![Qwen2.5 Coder 32B](https://img.shields.io/badge/Qwen2.5_Coder_32B-D32F2F?style=for-the-badge)](#)
[![Qwen2.5 72B](https://img.shields.io/badge/Qwen2.5_72B-D32F2F?style=for-the-badge)](#)

---

## 🟨 DeepSeek

[![DeepSeek R1](https://img.shields.io/badge/DeepSeek_R1-F9A825?style=for-the-badge)](#)
[![DeepSeek R1 0528](https://img.shields.io/badge/DeepSeek_R1_0528-F9A825?style=for-the-badge)](#)
[![DeepSeek R1T Chimera](https://img.shields.io/badge/DeepSeek_R1T-Chimera-F9A825?style=for-the-badge)](#)
[![DeepSeek R1T2 Chimera](https://img.shields.io/badge/DeepSeek_R1T2-Chimera-F9A825?style=for-the-badge)](#)
[![DeepSeek R1 0528 Qwen3 8B](https://img.shields.io/badge/DeepSeek_R1_0528_Qwen3_8B-F9A825?style=for-the-badge)](#)
[![DeepSeek R1 Distill Llama 70B](https://img.shields.io/badge/DeepSeek_R1_Distill_Llama_70B-F9A825?style=for-the-badge)](#)
[![DeepSeek V3 0324](https://img.shields.io/badge/DeepSeek_V3_0324-F9A825?style=for-the-badge)](#)

---

## 🔵 Mistral

[![Mistral Nemo Free](https://img.shields.io/badge/Mistral_Nemo-00A3E0?style=for-the-badge)](#)
[![Mistral 7B Instruct](https://img.shields.io/badge/Mistral_7B_Instruct-00A3E0?style=for-the-badge)](#)
[![Mistral 7B](https://img.shields.io/badge/Mistral_7B-00A3E0?style=for-the-badge)](#)
[![Mistral Small 3](https://img.shields.io/badge/Mistral_Small_3-00A3E0?style=for-the-badge)](#)
[![Mistral Small 3.2 24B](https://img.shields.io/badge/Mistral_Small_3.2_24B-00A3E0?style=for-the-badge)](#)

---

## 🟩 NVIDIA

[![Nemotron Nano 12B V2 VL](https://img.shields.io/badge/Nemotron_12B_VL-43A047?style=for-the-badge\&logo=nvidia)](#)
[![Nemotron Nano 9B V2](https://img.shields.io/badge/Nemotron_9B_V2-43A047?style=for-the-badge\&logo=nvidia)](#)

---

## 🟫 Microsoft

[![MAI DS R1](https://img.shields.io/badge/MAI_DS_R1-0078D4?style=for-the-badge\&logo=microsoft)](#)

---

## 🟧 TNG Tech

[![DeepSeek R1T Chimera](https://img.shields.io/badge/R1T_Chimera-FF8F00?style=for-the-badge)](#)
[![DeepSeek R1T2 Chimera](https://img.shields.io/badge/R1T2_Chimera-FF8F00?style=for-the-badge)](#)

---

## 🟦 Z-AI

[![GLM 4.5 Air](https://img.shields.io/badge/GLM_4.5_Air-1E88E5?style=for-the-badge)](#)

---

## 🟧 Kwaipilot

[![KAT-Coder-Pro V1](https://img.shields.io/badge/KAT_Coder_Pro_V1-FF7043?style=for-the-badge)](#)

---

## 🟨 Meituan

[![LongCat Flash Chat](https://img.shields.io/badge/LongCat_Flash_Chat-F9A825?style=for-the-badge)](#)

---

## 🟦 OpenAI OSS

[![GPT-OSS 20B](https://img.shields.io/badge/GPT_OSS_20B-6E60F6?style=for-the-badge\&logo=openai)](#)

---

## 🟫 Venice / Cognitive Computations

[![Venice Uncensored](https://img.shields.io/badge/Venice_Uncensored-5D4037?style=for-the-badge)](#)

---

## 🟩 ArliAI

[![QwQ 32B RpR v1](https://img.shields.io/badge/QwQ_32B_RpR_v1-4CAF50?style=for-the-badge)](#)

---

## 🟥 Alibaba – Tongyi

[![Tongyi DeepResearch 30B A3B](https://img.shields.io/badge/Tongyi_DeepResearch_30B-A3B-D32F2F?style=for-the-badge)](#)

---

## 🚀 Tabla de Clasificación por Modelo

[![Tabla Preview](assets/tabla_preview.png)](assets/calificacion.md)


### 4️⃣ Ejecutar en VS Code

1. Abre el proyecto.
2. Presiona `F5` o ve a **Run → Start Debugging**.
3. Se abrirá una **nueva ventana** de VS Code en **modo desarrollo de extensión**.

---

## 🚀 Cómo Usar GR_Leviatan

```text
1. Abre cualquier archivo de código (.js, .ts, etc.)
2. Selecciona el bloque de código (o deja todo sin seleccionar)
3. Abre la Paleta de Comandos (Cmd/Ctrl + Shift + P)
4. Selecciona: "GR Leviatan: Modificar Código"
5. Ingresa tu solicitud en lenguaje natural:
   - "Refactoriza esta función usando Async/Await"
   - "Agrega manejo de errores Try/Catch"
```

> ✅ La IA procesará el código y aplicará los cambios automáticamente.

---

## 📚 Tips Avanzados

> 💡 **Tip de Productividad:**
> Combina GR_Leviatan con snippets de VS Code para acelerar aún más tus refactorizaciones.


---

## 📂 Estructura del Proyecto

```text
GR_Leviatan/
├─ src/           # Código principal de la extensión
├─ package.json   # Dependencias y scripts
├─ README.md      # Este archivo
└─ .env           # Clave API compartida
```

---

## 💌 Contribuciones y README

```bash
git add README.md
git commit -m "docs: Añadir README ultra llamativo"
git push origin main
```

> 🙌 Siempre mantén tu README actualizado para el equipo.

---

## 📎 Recursos

* [VS Code Marketplace](https://marketplace.visualstudio.com/)
* [Documentación Node.js](https://nodejs.org/en/docs/)
* [Google Gemini AI](https://developers.google.com/)

---

## 🏆 Créditos

**GR Code Digital Solutions** – Equipo de desarrollo y mantenimiento.
💻 Creado para hacer que cada línea de código cuente.

---

##  📄 Licencia

**Licencia Personalizada Privada**
[Licencia](LICENCE)


---