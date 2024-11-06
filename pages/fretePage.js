const { expect } = require("@playwright/test");
class FretePage {
  constructor(page) {
    this.page = page;
    // Seletor para os campos e botões
    this.closedChat = 'button[aria-label="Fechar chat ao vivo"]';
    this.originPostcodeInput = "#originPostcode";
    this.destinationPostcodeInput = "#destinationPostcode";
    this.weightInput = "#weight";
    this.heightInput = "#packageHeight";
    this.widthInput = "#packageWidth";
    this.lengthInput = "#packageDepth";
    this.calculateButton = "#calculator-discounted-shipping-button";
    this.weightEnterButton = 'li[data-value="userWrite"]';
    this.selectQuantityShippingPrimary = 'button:has-text("0 - 1 envios")';
    //Validar depois de calcular frete
    this.modalidadeText = this.page
      .locator('div:has-text("SELECIONE A MODALIDADE")')
      .first();
    this.compartilharButton = this.page.locator(
      'button:has-text("Compartilhar")'
    );
    this.radioFrete = this.page.locator('[data-testid="freight-type-radio"]');
    this.emitirFreteComDescontoButton = this.page
      .locator('[data-testid="order-init-button"]')
      .first();
    this.modalMessageEnviosFrete = this.page.locator(
      "h2#alert-dialog-slide-title"
    ); //Quantos envios você costuma fazer por mês?
  }

  // // // Método para navegar até a página de frete
  // async navigateToFrete() {
  //   await this.page.goto("https://web.superfrete.com/#/calcular-correios");
  // }

  // Métodos para preencher os campos
  async fillOriginPostcode(postcode) {
    await this.page.fill(this.originPostcodeInput, postcode);
  }

  async fillDestinationPostcode(postcode) {
    await this.page.fill(this.destinationPostcodeInput, postcode);
  }

  async fillPackageDetails(weight, width, length) {
    await this.page.fill(this.heightInput, weight);
    await this.page.fill(this.widthInput, width);
    await this.page.fill(this.lengthInput, length);
  }

  async fillSelectWeight() {
    await this.page.click(this.weightInput); // Clique no combobox para abrir a lista de opções
    await this.page.click('li[data-value="1"]');
  }

  async calculateFrete() {
    await this.page.click(this.calculateButton);
    //Verifica texto "SELECIONE A MODALIDADE"
    await expect(this.modalidadeText).toBeVisible();
    //Verifica botão "Compartilhar"
    await expect(this.compartilharButton).toBeVisible();
  }

  async selectFreteType() {
    await this.radioFrete.first().click();
    await expect(this.emitirFreteComDescontoButton).toBeVisible();
  }
  async emitirFrete() {
    await this.emitirFreteComDescontoButton.first().click();
    await expect(this.modalMessageEnviosFrete).toBeVisible();
  }

  async selectQuantityShipping() {
    await this.page.click(this.selectQuantityShippingPrimary); // Clique no combobox para abrir a lista de opções
  }

  async asserts() {
    await expect(this.page).toHaveURL('https://web.superfrete.com/#/auth/phone');
  }
}

module.exports = { FretePage }; // Certifique-se que a classe está sendo exportada corretamente
