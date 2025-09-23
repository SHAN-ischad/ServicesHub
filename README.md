# ServicesHub

## Descrição

**ServicesHub** é uma aplicação desenvolvida com [Expo](https://expo.dev/) e [React Native](https://reactnative.dev/), utilizando o roteamento do Expo Router e estilização com [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native). O objetivo do projeto é conectar prestadores de serviços a clientes de forma eficiente e confiável, promovendo oportunidades para todos os envolvidos.

## Estrutura do Projeto

```
assets/
  fonts/
    JetBrainsMono-Bold.ttf
  images/
    (diversos ícones e logos)
src/
  app/
    _layout.tsx         # Componente principal, carrega fontes e define navegação
    index.tsx           # Tela inicial (Login e apresentação)
    Drawer/
      _layout.tsx
      homeHub.tsx
  css/
    global.css          # Estilos globais para NativeWind
    globalStyles.tsx    # Estilos globais em JS/TS (cores, fontes)
  hooks/
    (hooks customizados)
.vscode/
  settings.json
metro.config.js         # Configuração do Metro bundler para NativeWind
tailwind.config.js      # Configuração do Tailwind/NativeWind
babel.config.js         # Configuração do Babel para NativeWind
tsconfig.json           # Configuração do TypeScript
package.json            # Dependências e scripts do projeto
```

## Tecnologias Utilizadas

- **Expo**: Plataforma para desenvolvimento React Native.
- **React Native**: Framework para desenvolvimento mobile.
- **Expo Router**: Navegação baseada em arquivos.
- **NativeWind**: Utilização de classes Tailwind CSS no React Native.
- **TypeScript**: Tipagem estática para JavaScript.
- **Custom Fonts**: Fonte JetBrainsMono-Bold carregada globalmente.

## Principais Funcionalidades

- **Tela Inicial**: Apresentação da plataforma e área de login.
- **Estilização**: Uso de Tailwind CSS via NativeWind e estilos globais via StyleSheet.
- **Fontes Customizadas**: Fonte JetBrainsMono-Bold aplicada globalmente.
- **Navegação**: Estrutura pronta para navegação com Expo Router.

## Como Rodar o Projeto

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o projeto:
   ```sh
   npm start
   ```

3. Siga as instruções do Expo para rodar no emulador, dispositivo físico ou web.

## Observações

- Certifique-se de que o arquivo de fonte está em `assets/fonts/JetBrainsMono-Bold.ttf`.
- O carregamento das fontes é feito no arquivo `src/app/_layout.tsx`.
- O NativeWind depende da configuração correta do `metro.config.js` e do arquivo CSS global.

---