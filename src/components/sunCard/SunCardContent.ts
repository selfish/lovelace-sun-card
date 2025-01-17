import { html, TemplateResult } from "lit";

import { ISunCardConfig, TSunCardData } from "../../types";
import { HelperFunctions } from "../../utils/HelperFunctions";
import { SunCardFooter } from "./SunCardFooter";
import { SunCardGraph } from "./SunCardGraph";
import { SunCardHeader } from "./SunCardHeader";

export class SunCardContent {
  private config: ISunCardConfig;
  private data: TSunCardData;

  constructor(config: ISunCardConfig, data: TSunCardData) {
    this.config = config;
    this.data = data;
  }

  render(): TemplateResult {
    return html`
      <ha-card>
        <div class="sun-card ${this.config.darkMode ? "sun-card-dark" : ""}">
          ${this.showHeader() ? this.renderHeader() : HelperFunctions.nothing()}
          ${this.renderGraph()}
          ${this.showFooter() ? this.renderFooter() : HelperFunctions.nothing()}
        </div>
      </ha-card>
    `;
  }

  private renderHeader(): TemplateResult {
    return new SunCardHeader(this.config, this.data).render();
  }

  private renderGraph(): TemplateResult {
    return new SunCardGraph(this.data).render();
  }

  private renderFooter(): TemplateResult {
    return new SunCardFooter(this.config, this.data).render();
  }

  private showHeader(): boolean {
    // logic based on config
    return true;
  }

  private showFooter(): boolean {
    // logic based on config
    return true;
  }
}
