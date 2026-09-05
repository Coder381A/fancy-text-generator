<div align="center">

# ✨ Fancy Text Generator

**An ultra-fast, zero-dependency Unicode typography engine & modern responsive web application.**  
*Transform standard ASCII text into 50+ aesthetic fonts, gothic script, vaporwave, zalgo glitch text, and decorative frames.*

[![CI Workflow](https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=github-actions)](https://github.com/Coder381A/fancy-text-generator/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen?style=for-the-badge)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge)](CONTRIBUTING.md)

[🚀 Live Interactive Demo](https://Coder381A.github.io/fancy-text-generator/) • [📖 API Documentation](#-library-api-reference) • [✨ Supported Styles](#-supported-styles-matrix) • [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## 🌟 Highlights & Features

- ⚡ **Blazing Fast**: Zero dependencies, sub-millisecond conversion with direct Unicode lookup tables.
- 🎨 **50+ Typography Styles**: Math bold/italic, Gothic Fraktur, Cursive script, Small caps, Vaporwave fullwidth, Inverted/Upside-down, Bubbles, and Ciphers.
- 👾 **Zalgo / Glitch Generator**: Customizable diacritical chaos slider with independent upward, middle, and downward combining marks.
- 👑 **Aesthetic Decorator Builder**: Instant wings (`꧁༺ 𝒯𝑒𝓍𝓉 ༻꧂`), stars, ribbons, floral borders, and kaomoji faces.
- 📱 **Modern Responsive PWA**: Theme switcher (Dark, Light, Cyberpunk, Nord), one-click copy with toast feedback, and URL hash sharing.
- 📊 **Real-Time Text Metrics**: Live UTF-8 byte counter, grapheme cluster analyzer, word count, and character statistics.
- 🛡️ **Surrogate-Pair & SMP Safe**: Correctly handles Unicode Supplementary Multilingual Planes (U+1D400–U+1D7FF) and historic Unicode math holes.
- 📦 **Dual Export**: Usable as an **NPM library** (`import { transformText } from 'fancy-text-generator'`) or as a standalone **Single Page Web Application**.

---

## 📸 Interactive Showcase

| Style Name | Sample Output | Category |
| :--- | :--- | :--- |
| **Cursive Script** | 𝒯𝒽𝑒 𝓆𝓊𝒾𝒸𝓀 𝒷𝓇𝑜𝓌𝓃 𝒻𝑜𝓍 | 🖋️ Cursive & Script |
| **Bold Gothic Fraktur** | 𝕿𝖍𝖊 𝖖𝖚𝖎𝖈𝖐 𝖇𝖗𝖔𝖜𝖓 𝖋𝖔𝖝 | 🏰 Gothic & Medieval |
| **Double-Struck** | 𝕋𝕙𝕖 𝕢𝕦𝕚𝕔𝕜 𝕓𝕣𝕠𝕨𝕟 𝕗𝕠𝕩 | 🏰 Gothic & Medieval |
| **Small Capitals** | ᴛʜᴇ ǫᴜɪᴄᴋ ʙʀᴏᴡɴ ғᴏx | 🌸 Aesthetic & Vaporwave |
| **Vaporwave / Fullwidth**| Ｔｈｅ　ｑｕｉｃｋ　ｂｒｏｗｎ | 🌸 Aesthetic & Vaporwave |
| **Inverted / Upside Down**| xoɟ uʍoɹq ʞɔᴉnb ǝɥ┴ | 🌸 Aesthetic & Vaporwave |
| **Bubble / Circled** | Ⓣⓗⓔ ⓠⓤⓘⓒⓚ ⓑⓡⓞⓦⓝ | ✨ Decorative & Enclosed |
| **Negative Squared** | 🆃🅷🅴 🆀🆄🅸🅲🅺 🅱🆁🅾🆆🅽 | ✨ Decorative & Enclosed |
| **Strikethrough** | T̶h̶e̶ ̶q̶u̶i̶c̶k̶ ̶b̶r̶o̶w̶n̶ | ✨ Decorative & Enclosed |
| **1337 Leetspeak** | 7h3 qu1ck 8r0wn f0x | 🔒 Ciphers & Tech |
| **Telegraphic Morse** | - .... . / --.- ..- .. -.-. -.- | 🔒 Ciphers & Tech |
| **Royal Wings Frame** | ꧁༺ 𝕿𝖍𝖊 𝖖𝖚𝖎𝖈𝖐 𝖇𝖗𝖔𝖜𝖓 𝖋𝖔𝖝 ༻꧂ | 👑 Aesthetic Decorator |

---

## 🚀 Quick Start (Web App)

### 1. Clone & Install
```bash
git clone https://github.com/Coder381A/fancy-text-generator.git
cd fancy-text-generator
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static bundle will be generated in `./dist`.

---

## 📦 Library API Reference

You can import and use the transformation engine directly in your Node or browser applications:

```typescript
import {
  transformText,
  generateZalgo,
  applyDecorator,
  DECORATOR_PRESETS,
  analyzeText
} from 'fancy-text-generator';

// 1. Transform text with any of the 50+ style IDs
const gothic = transformText("Antigravity Engine", "bold-fraktur");
console.log(gothic); // 𝕬𝖓𝖙𝖎𝖌𝖗𝖆𝖛𝖎𝖙𝖞 𝕰𝖓𝖌𝖎𝖓𝖊

// 2. Generate Zalgo / Glitch text with customized chaos level
const glitch = generateZalgo("Corrupted Signal", { intensity: 5, up: true, down: true });
console.log(glitch);

// 3. Apply aesthetic decorative frames & wings
const decorated = applyDecorator("Champion", DECORATOR_PRESETS[0]);
console.log(decorated); // ꧁༺ Champion ༻꧂

// 4. Analyze Unicode metrics & UTF-8 byte length
const metrics = analyzeText("𝕬𝖓𝖙𝖎𝖌𝖗𝖆𝖛𝖎𝖙𝖞");
console.log(metrics.byteLength); // Accurate UTF-8 bytes
console.log(metrics.graphemeCount); // Accurate grapheme count
```

---

## 🔬 Unicode Technical Deep-Dive

Many basic Unicode font converters fail on specific characters (such as `h`, `B`, `C`, `e`, or `o`) because the Unicode consortium defined some Mathematical Alphanumeric characters in earlier blocks (like *Letterlike Symbols* U+2100–U+214F).

### Handled Unicode Edge Cases:
- **Planck Constant `ℎ` (U+210E)**: Substituted when mapping math italics `h`.
- **Script Gaps**: `ℬ` (U+212C), `ℰ` (U+2130), `ℱ` (U+2131), `ℋ` (U+210B), `ℐ` (U+2110), `ℒ` (U+2112), `ℳ` (U+2133), `ℛ` (U+211B), `ℯ` (U+212F), `ℊ` (U+210A), `ℴ` (U+2134).
- **Fraktur Gaps**: `ℭ` (U+212D), `ℌ` (U+210C), `ℑ` (U+2111), `ℜ` (U+211C), `ℨ` (U+2128).
- **Blackboard Bold Gaps**: `ℂ` (U+2102), `ℍ` (U+210D), `ℕ` (U+2115), `ℙ` (U+2119), `ℚ` (U+211A), `ℝ` (U+211D), `ℤ` (U+2124).
- **Surrogate Pair Safety**: All text transformations operate on full Unicode codepoints (`Array.from()` & `Intl.Segmenter`) preventing string splitting bugs in JavaScript UTF-16 representations.

---

## 🧪 Running Tests

The test suite runs with zero external test runner dependencies:

```bash
npm test
```

---

## 📁 Repository Structure

```
fancy-text-generator/
├── .github/
│   └── workflows/
│       ├── ci.yml               # Automated multi-version Node CI
│       └── deploy.yml           # Automated GitHub Pages deployment
├── src/
│   ├── core/                    # Headless Unicode Engine
│   │   ├── unicode-maps.ts      # Exhaustive mapping lookup tables
│   │   ├── transforms.ts        # 50+ Typography transforms
│   │   ├── zalgo.ts             # Zalgo / Glitch generator
│   │   ├── decorators.ts        # Frames, wings & kaomojis
│   │   ├── metrics.ts           # Text statistics & UTF-8 counter
│   │   └── index.ts             # Core API exports
│   ├── ui/                      # Web Application UI
│   │   ├── app.ts               # SPA controller & state manager
│   │   ├── styles.css           # Theme tokens & glassmorphic layout
│   │   └── toast.ts             # Accessible toast notifications
│   └── index.ts                 # Main bundle entry
├── tests/
│   └── run-tests.js             # Standalone test suite
├── index.html                   # Semantic HTML5 SPA
├── package.json                 # Project configuration
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite build configuration
├── CONTRIBUTING.md              # Contributor guidelines
├── CODE_OF_CONDUCT.md           # Community guidelines
├── SECURITY.md                  # Security & vulnerability reporting
└── LICENSE                      # MIT License
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Coder381A/fancy-text-generator/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

<div align="center">
  <sub>Built with modern web standards and ❤️ for the open-source community.</sub>
</div>
