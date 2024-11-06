const { test, expect } = require("@playwright/test");
const { FretePage } = require("../pages/fretePage"); // Certifique-se de que o caminho está correto

let page;
test.beforeEach(async ({ page, context }) => {
  // Navegar para a URL da aplicação
  await page.goto("https://web.superfrete.com/#/calcular-correios"); // Substitua pela URL real

  //Limpar todos os cookies
  await context.clearCookies();
  // Limpar localStorage
  await page.evaluate(() => {
    localStorage.clear();
  });

});

test("Calcular frete usando correios", async ({ page }) => {
  // Instanciar a classe FretePage corretamente
  const fretePage = new FretePage(page); // A variável de instância deve ser `fretePage`

  // Preencher os campos
 
  await fretePage.fillOriginPostcode("01001-000"); // CEP de origem
  await fretePage.fillSelectWeight(); //Selecionar o peso
  await fretePage.fillPackageDetails("2", "10", "20"); // Detalhes do pacote (altura, largura, comprimento)
  await fretePage.fillDestinationPostcode("20040-000"); // CEP de destino
  await fretePage.calculateFrete(); // Calcular o frete
  await fretePage.selectFreteType();//Seleciona primeira modalidade PAC ou Sedex
  await fretePage.emitirFrete();
  await fretePage.selectQuantityShipping();
  await fretePage.asserts();


  await page.pause();

  // // Adicione verificações conforme necessário (por exemplo, verificar se os resultados apareceram)
  // const resultado = page.locator("SELECIONE A MODALIDADE");
  // await expect(resultado).toBeVisible(); // Exemplo de verificação
});
