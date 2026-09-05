import { TRANSFORMS, TransformDefinition } from "../core/transforms.js";
import { generateZalgo } from "../core/zalgo.js";
import { DECORATOR_PRESETS, applyDecorator } from "../core/decorators.js";
import { analyzeText } from "../core/metrics.js";
import { showToast } from "./toast.js";

interface AppState {
  inputText: string;
  selectedCategory: string;
  searchQuery: string;
  zalgoIntensity: number;
  activeTheme: string;
  selectedDecoratorId: string;
}

const DEFAULT_SAMPLE_TEXT = "Antigravity Unicode Typography";

export class FancyTextApp {
  private state: AppState = {
    inputText: DEFAULT_SAMPLE_TEXT,
    selectedCategory: "all",
    searchQuery: "",
    zalgoIntensity: 4,
    activeTheme: "dark",
    selectedDecoratorId: "none"
  };

  private inputEl!: HTMLTextAreaElement;
  private charCountEl!: HTMLElement;
  private wordCountEl!: HTMLElement;
  private byteCountEl!: HTMLElement;
  private cardsContainer!: HTMLElement;
  private searchInput!: HTMLInputElement;
  private zalgoSlider!: HTMLInputElement;
  private zalgoValEl!: HTMLElement;
  private themeSelect!: HTMLSelectElement;
  private decoratorSelect!: HTMLSelectElement;

  public init(): void {
    this.cacheElements();
    this.bindEvents();
    this.loadUrlState();
    this.applyTheme(this.state.activeTheme);
    this.render();
  }

  private cacheElements(): void {
    this.inputEl = document.getElementById("main-input") as HTMLTextAreaElement;
    this.charCountEl = document.getElementById("metric-chars") as HTMLElement;
    this.wordCountEl = document.getElementById("metric-words") as HTMLElement;
    this.byteCountEl = document.getElementById("metric-bytes") as HTMLElement;
    this.cardsContainer = document.getElementById("cards-grid") as HTMLElement;
    this.searchInput = document.getElementById("search-input") as HTMLInputElement;
    this.zalgoSlider = document.getElementById("zalgo-slider") as HTMLInputElement;
    this.zalgoValEl = document.getElementById("zalgo-val") as HTMLElement;
    this.themeSelect = document.getElementById("theme-select") as HTMLSelectElement;
    this.decoratorSelect = document.getElementById("decorator-select") as HTMLSelectElement;
  }

  private bindEvents(): void {
    // Live input transformation
    this.inputEl.addEventListener("input", () => {
      this.state.inputText = this.inputEl.value || DEFAULT_SAMPLE_TEXT;
      this.updateMetrics();
      this.renderCards();
      this.syncUrlState();
    });

    // Category tabs
    const tabButtons = document.querySelectorAll<HTMLButtonElement>(".tab-btn");
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.selectedCategory = btn.dataset.category || "all";
        this.renderCards();
      });
    });

    // Search query
    this.searchInput.addEventListener("input", () => {
      this.state.searchQuery = this.searchInput.value.toLowerCase().trim();
      this.renderCards();
    });

    // Zalgo chaos slider
    this.zalgoSlider.addEventListener("input", () => {
      this.state.zalgoIntensity = parseInt(this.zalgoSlider.value, 10);
      this.zalgoValEl.textContent = this.state.zalgoIntensity.toString();
      this.renderCards();
    });

    // Decorator dropdown
    this.decoratorSelect.addEventListener("change", () => {
      this.state.selectedDecoratorId = this.decoratorSelect.value;
      this.renderCards();
    });

    // Theme selector
    this.themeSelect.addEventListener("change", () => {
      this.applyTheme(this.themeSelect.value);
    });

    // Quick action buttons
    document.getElementById("btn-clear")?.addEventListener("click", () => {
      this.inputEl.value = "";
      this.inputEl.focus();
      this.state.inputText = "";
      this.updateMetrics();
      this.renderCards();
    });

    document.getElementById("btn-paste")?.addEventListener("click", async () => {
      try {
        const clipboardText = await navigator.clipboard.readText();
        if (clipboardText) {
          this.inputEl.value = clipboardText;
          this.state.inputText = clipboardText;
          this.updateMetrics();
          this.renderCards();
          showToast("Pasted from clipboard!");
        }
      } catch {
        showToast("Clipboard access denied. Please paste manually.");
      }
    });

    document.getElementById("btn-share")?.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href);
      showToast("Shareable link copied to clipboard!");
    });
  }

  private applyTheme(theme: string): void {
    this.state.activeTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    if (this.themeSelect) this.themeSelect.value = theme;
  }

  private loadUrlState(): void {
    if (window.location.hash) {
      const hashContent = decodeURIComponent(window.location.hash.substring(1));
      if (hashContent.trim()) {
        this.state.inputText = hashContent;
        this.inputEl.value = hashContent;
      }
    } else {
      this.inputEl.value = this.state.inputText;
    }
  }

  private syncUrlState(): void {
    if (this.state.inputText && this.state.inputText !== DEFAULT_SAMPLE_TEXT) {
      window.history.replaceState(null, "", `#${encodeURIComponent(this.state.inputText)}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  private updateMetrics(): void {
    const textToAnalyze = this.inputEl.value;
    const metrics = analyzeText(textToAnalyze);
    this.charCountEl.textContent = metrics.charCount.toString();
    this.wordCountEl.textContent = metrics.wordCount.toString();
    this.byteCountEl.textContent = `${metrics.byteLength} B`;
  }

  private render(): void {
    this.populateDecorators();
    this.updateMetrics();
    this.renderCards();
  }

  private populateDecorators(): void {
    if (!this.decoratorSelect) return;
    this.decoratorSelect.innerHTML = `<option value="none">No Decorator (Plain)</option>`;
    for (const dec of DECORATOR_PRESETS) {
      const opt = document.createElement("option");
      opt.value = dec.id;
      opt.textContent = `${dec.name} (${dec.prefix}Text${dec.suffix})`;
      this.decoratorSelect.appendChild(opt);
    }
  }

  private renderCards(): void {
    const rawText = this.state.inputText || DEFAULT_SAMPLE_TEXT;
    const activeDecorator = DECORATOR_PRESETS.find((d) => d.id === this.state.selectedDecoratorId);

    const filtered = TRANSFORMS.filter((t) => {
      const matchesCategory =
        this.state.selectedCategory === "all" || t.category === this.state.selectedCategory;
      const matchesSearch =
        !this.state.searchQuery ||
        t.name.toLowerCase().includes(this.state.searchQuery) ||
        t.description.toLowerCase().includes(this.state.searchQuery);
      return matchesCategory && matchesSearch;
    });

    this.cardsContainer.innerHTML = "";

    // Insert Zalgo dynamic card if category allows
    if (this.state.selectedCategory === "all" || this.state.selectedCategory === "glitch") {
      const zalgoTransformed = generateZalgo(rawText, {
        intensity: this.state.zalgoIntensity
      });
      const finalZalgo = activeDecorator ? applyDecorator(zalgoTransformed, activeDecorator) : zalgoTransformed;
      this.cardsContainer.appendChild(
        this.createCardElement({
          id: "zalgo-dynamic",
          name: `Zalgo Glitch (Level ${this.state.zalgoIntensity})`,
          category: "glitch",
          description: "Chaotic void combining diacritics",
          transform: () => finalZalgo
        }, finalZalgo)
      );
    }

    // Render standard transform cards
    for (const transform of filtered) {
      let transformed = transform.transform(rawText);
      if (activeDecorator) {
        transformed = applyDecorator(transformed, activeDecorator);
      }
      this.cardsContainer.appendChild(this.createCardElement(transform, transformed));
    }
  }

  private createCardElement(transform: TransformDefinition, outputText: string): HTMLElement {
    const card = document.createElement("div");
    card.className = "font-card";

    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${transform.name}</h3>
        <span class="card-tag">${transform.category}</span>
      </div>
      <div class="card-output">${this.escapeHtml(outputText)}</div>
      <div class="card-footer">
        <span style="font-size: 0.75rem; color: var(--text-muted);">${transform.description}</span>
        <button class="copy-btn" data-text="${encodeURIComponent(outputText)}">
          <svg style="width:14px;height:14px;" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          Copy
        </button>
      </div>
    `;

    const copyBtn = card.querySelector(".copy-btn") as HTMLButtonElement;
    copyBtn.addEventListener("click", () => {
      const textToCopy = decodeURIComponent(copyBtn.dataset.text || "");
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${transform.name}" to clipboard!`);
      });
    });

    return card;
  }

  private escapeHtml(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
