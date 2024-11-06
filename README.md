# Superfrete Playwright

Este repositório contém testes automatizados para a aplicação **Superfrete** usando o framework **Playwright**.

## Objetivo

O objetivo deste projeto é garantir a qualidade e a robustez da plataforma **Superfrete** por meio de testes E2E (end-to-end). Utilizando o Playwright, os testes abrangem cenários críticos da aplicação, como fluxos de login, navegação entre páginas e interações com elementos da interface do usuário, para assegurar que a experiência do usuário seja consistente e sem erros.

## Tecnologias Utilizadas

- **Playwright**: Framework de automação de testes para navegadores.
- **Node.js**: Ambiente de execução para o Playwright.
- **Jest** (opcional): Framework de testes para rodar os testes e gerar os relatórios.

## Estrutura do Projeto

- **tests/**: Contém os testes E2E da aplicação, organizados de acordo com os módulos da plataforma.
- **pages/**: Padrão de **Page Object**, onde as interações com os elementos de cada página são abstraídas em classes.
- **config/**: Configurações do Playwright, como browsers, tempo de espera e opções específicas para os testes.

## Como Rodar os Testes

Siga as instruções abaixo para rodar os testes localmente:

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/DavidCoelho95/superfrete-playwright.git
cd superfrete-playwright
```
### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar os Testes
```bash
npx playwright test
```





