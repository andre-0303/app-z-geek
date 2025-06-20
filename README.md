
# 🎮 Z-Geek - App de Indicação de Jogos

Aplicativo mobile desenvolvido em **React Native + Expo**, que permite visualizar uma lista de jogos recomendados, trazendo descrição, imagem e informações dos jogos de forma rápida, organizada e bonita.

## 🚀 Funcionalidades

- ✅ Visualizar uma lista de jogos.
- ✅ Ver imagens dos jogos em um layout estilo grid (tipo Netflix).
- ✅ Abrir um modal com a descrição completa do jogo.
- ✅ Interface responsiva e moderna.
- ✅ Layout escuro com paleta roxa.
- ✅ Tela de loading durante o carregamento dos dados.
- ✅ Navegação entre telas (Home → Games).

## 🔗 API de Jogos

Os dados dos jogos são consumidos de uma API REST pública criada para este app:

https://api-jogos-uxuc.onrender.com/api/games

## 📁 Estrutura de Pastas

```
.
├── App.tsx                  # Arquivo principal com navegação
├── components/              # Componentes reutilizáveis
│   └── GameCard.tsx         # Card de cada jogo
├── screens/                 # Telas do aplicativo
│   ├── HomeScreen.tsx       # Tela inicial
│   └── GamesScreen.tsx      # Tela com lista dos jogos
└── assets/                  # Fontes, imagens e recursos
```

## 🧠 Tecnologias e Bibliotecas

- React Native
- Expo
- React Navigation
- TypeScript
- Fetch API para requisições HTTP

## 🖥️ Pré-requisitos

- Node.js instalado ✅
- Expo CLI instalado ✅
- Um emulador Android/iOS ou dispositivo físico ✅

## ⚙️ Como Rodar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/andre-0303/app-z-geek.git
```

2. **Acesse a pasta do projeto:**

```bash
cd jogos-app
```

3. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

4. **Inicie o projeto:**

```bash
npx expo start
# ou
expo start
```

5. **Execute no dispositivo físico:**

- Baixe o aplicativo **Expo Go** na Play Store ou App Store.
- Escaneie o QR Code que aparece no terminal ou navegador.

## 📱 Telas

- Tela Inicial
- Tela de Lista de Jogos com Grid
- Modal com descrição dos jogos

## ✨ Melhorias Futuras

- Sistema de favoritos.
- Buscar jogos por nome.
- Sistema de avaliação dos usuários.
- Splash Screen mais elaborada.
- Animações na navegação.

## 🤝 Contribuição

Contribuições são bem-vindas! Fique à vontade para abrir issues e pull requests.

---

Feito com ❤️ por [Bandeira Dev].
