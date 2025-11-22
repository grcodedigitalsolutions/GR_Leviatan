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

![Powered by TypeScript](https://img.shields.io/badge/Powered%20by-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Powered by JavaScript](https://img.shields.io/badge/Powered%20by-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)

## 💡 Sobre GR_Leviatan

**GR_Leviatan** es una **extensión privada para VS Code** que convierte tu flujo de trabajo en algo **rápido, intuitivo y potente**.
Gracias a **Google Gemini y Otros Modelos de IA**, puedes:

* Analizar y modificar **fragmentos o archivos completos** de código.
* Solicitar **refactorizaciones, optimizaciones o correcciones** en lenguaje natural.
* Colaborar en equipo con **clave API centralizada** y `.env`.

> ⚠️ **Nota:** Esta extensión es privada y solo funciona con la clave API proporcionada.

### 🔄 Flujo de Trabajo

```mermaid
graph TD
    A[👤 Usuario] -->|Selecciona Código| B(📝 Editor VS Code)
    B -->|Cmd+Alt+L| C{🤖 GR Leviatan}
    C -->|Elige Modelo| D[🧠 IA Cloud]
    D -->|Procesa Solicitud| E[⚡ Código Mejorado]
    E -->|Reemplaza| B
    style C fill:#8A2BE2,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#4285F4,stroke:#333,stroke-width:2px,color:#fff
```

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

---

### 3️⃣ Configurar la Clave API

Para que **GR_Leviatan** funcione correctamente necesitas crear **tus propias claves API**.
Las claves del **2 al 5** son **opcionales** y deben provenir de cuentas diferentes en **OpenRouter**.

---

| Servicio            | Badge                                                                                                          | Pasos para generar la API                                                                                                                                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Gemini (Google)** | <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width="120"/> | 1. Ve a <a href="https://console.cloud.google.com/">Google Cloud Console</a>.<br>2. Crea un proyecto nuevo o selecciona uno existente.<br>3. Habilita el API de <b>Gemini (Google GenAI)</b>.                                                                                    |
| **OpenRouter**      | <img src="https://openrouter.ai/favicon.ico" alt="OpenRouter" width="32"/>                                     | 1. Ve a <a href="https://openrouter.ai/settings/keys">OpenRouter / Keys</a>.<br>2. Inicia sesión o crea una cuenta nueva.<br>3. Genera tus claves API (puedes generar varias desde cuentas diferentes).<br><b>Nota:</b> Las claves 2 al 6 son opcionales y sirven como respaldo. |

---

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

```mermaid
pie title Distribución de Modelos por Proveedor
    "Google" : 30
    "Meta (Llama)" : 15
    "Alibaba (Qwen)" : 20
    "DeepSeek" : 15
    "Mistral" : 10
    "Otros" : 10
```

<details>
<summary><strong>👇 Ver Lista Completa de Modelos Soportados</strong></summary>
<br>

---
<table align="center" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td valign="middle">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Google-gemini-icon.svg/768px-Google-gemini-icon.svg.png"
        width="48"
        height="48"
        alt="Google Gemini Icon"
      />
    </td>
    <td valign="middle" style="padding-left: 8px; font-weight: 900; font-size: 24px;">
      Google Gemini — Modelo Principal
    </td>
  </tr>
</table>




<div align="center">

  <!-- GIF con marco con degradado -->
  <div style="
    display: inline-block;
    padding: 8px;
    border-radius: 20px;
    background: linear-gradient(90deg, #3da7f7, #b96dff, #ff2f4b);
  ">
    <img 
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1cJJpYKfjg1ne1k2Jq7sCkDxyUWEBz8TD0lF32W8CLDtcvw8BxDsHE3m57gaVxCrQyB9vSsOFpG3wxbpmzUIOsjEpsUm38XZTRn52r3Oi2Fr2-Dk3jttOU1Sf6uL5O5bd2jCPC0ZCZdZGZ1IWputGeSxPupTM5PkWHj1365MBiDy5bPq7v431BRDOCNw/s16000/5bbeb59b-6362-4a56-b836-4c1a59f24b86.gif"
      width="480"
      style="border-radius: 16px;"
    />
  </div>

  <br><br>

  <!-- Badge con ícono customizado -->  
  <img 
  src="https://img.shields.io/badge/Google_Gemini_2.5_Flash-Modelo_Principal-1a1a1a?style=for-the-badge&logo=google&logoColor=000000&color=3da7f7&labelColor=9b30ff&cacheSeconds=0"
  height="80"
/>


  <p style="
    font-size: 18px; 
    color: #e7d3ff; 
    margin-top: 18px;
  ">
    Motor de IA principal basado en <b>Gemini 2.5 Flash</b> — <b>Google DeepMind</b>
  </p>

</div>


---

## 🔵 Google

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

---

## 🟥 Alibaba – Tongyi

[![Tongyi DeepResearch 30B A3B](https://img.shields.io/badge/Tongyi_DeepResearch_30B-A3B-D32F2F?style=for-the-badge)](#)

---

</details>

## 🚀 Tabla de Clasificación por Modelo (Click para ver completa)

[![Tabla Preview](assets/tabla_preview.png)](assets/calificacion.md)

---

###   Ejecutar en VS Code

```text
1. Abre el proyecto.
2. Presiona `F5` o ve a **Run → Start Debugging**.
3. Se abrirá una **nueva ventana** de VS Code en **modo desarrollo de extensión**.
````

---

## 🚀 Cómo Usar GR_Leviatan

### ⌨️ Atajo Rápido
**`Cmd + Alt + L`** (Mac) o **`Ctrl + Alt + L`** (Windows/Linux)

### 📝 Pasos
1. **Abre un archivo** de código (`.js`, `.ts`, `.py`, etc.).
2. **Selecciona el código** que quieres modificar.
   > *Si no seleccionas nada, se enviará todo el archivo.*
3. Presiona el atajo **`Cmd + Alt + L`** o usa `F1` y busca **"GR Leviatan: Modificar Código"**.
4. **Elige un modelo** de la lista (Gemini, Mistral, Llama, etc.).
5. **Escribe tu instrucción** en el cuadro de texto.
   * Ej: *"Refactoriza esto para usar async/await"*
   * Ej: *"Añade comentarios explicativos"*
6. ¡Listo! La IA aplicará los cambios automáticamente.

---

## 🛠️ Solución de Problemas

### ❌ Error: "Todas las claves de API fallaron"
* Verifica que tu archivo `.env` esté en la raíz del proyecto.
* Asegúrate de que las claves API en `.env` sean válidas y tengan crédito (si aplica).
* Revisa tu conexión a internet.

### ❌ El modelo no devuelve nada
* Algunos modelos gratuitos pueden estar saturados. Intenta con otro modelo de la lista.
* Intenta simplificar tu solicitud o seleccionar un fragmento de código más pequeño.

## 📚 Tips Avanzados

> 💡 **Tip de Productividad:**
> Combina GR_Leviatan con snippets de VS Code para acelerar aún más tus refactorizaciones.


---

## 📂 Estructura del Proyecto

```text
GR_LEVIATAN/
├─ .github/        # Archivos de configuración de GitHub
│  ├─ ISSUE_TEMPLATE
│  ├─ FUNDING.yml      # Configuración de financiación
│  └─ PULL_REQUEST_TEMPLATE.md
├─ assets/         # Archivos de recursos (imágenes, calificaciones)
│  ├─ calificacion.md
│  ├─ Leviatan.png
│  └─ tabla_preview.png
├─ docs/           # Documentación y licencias traducidas
│  ├─ LICENCE_DE
│  ├─ LICENCE_EN
│  ├─ LICENCE_ES
│  ├─ LICENCE_FR
│  └─ LICENCE_PT
├─ node_modules/   # Dependencias de Node.js
├─ out/            # Salida de la compilación (e.g., extension.js)
├─ src/            # Código fuente principal
│  └─ extension.ts
├─ .env            # Variables de entorno compartidas (e.g., clave API)
├─ .gitignore      # Archivo para ignorar en Git
├─ LICENCE         # Licencia principal del proyecto
├─ package-lock.json # Bloqueo de dependencias
├─ package.json    # Metadatos y scripts del proyecto
├─ README.md       # Este archivo
└─ tsconfig.json   # Configuración de TypeScript
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

## 💙 Apoya El Proyecto
<center>
Si este proyecto te ha sido útil, considera apoyarlo a través de **GitHub Sponsors**.  
Tu contribución ayuda a mantener el desarrollo activo y mejorar futuras versiones.

</center>

---

<div align="center">

  <img 
    src="https://avatars.githubusercontent.com/u/186231665?v=4" 
    width="90" 
    style="border-radius: 50%; margin-bottom: 12px;"
  />

  <p style="font-size: 22px; font-weight: 800; margin: 0;">
    JoseEduardoGR
  </p>

  <p>
    <strong>Desarrollador • Python • C++ • Node</strong><br/>
    🚀 Avanza aunque duela, cada salto te acerca a la versión que nadie creía posible.
  </p>

  <p>
    <a href="https://github.com/JoseEduardoGR?tab=followers">
      ⭐ Seguir en GitHub
    </a>
  </p>

  <a href="https://github.com/sponsors/JoseEduardoGR">
    <img 
      src="https://img.shields.io/badge/Sponsor_Me-FF4081?style=for-the-badge&logo=githubsponsors&logoColor=white"
      height="44"
    />
  </a>

</div>

---

## 📄 Licencia

Esta obra está protegida por una **Licencia Personalizada Privada**  
*(inspirada en la Business Source License 1.1)*

Puedes consultar las versiones disponibles en su **idioma respectivo**:

- [Español](docs/LICENCE_ES)  
- [English](docs/LICENCE_EN)  
- [Deutsch](docs/LICENCE_DE)  
- [Français](docs/LICENCE_FR)  
- [Português](docs/LICENCE_TP) 

---