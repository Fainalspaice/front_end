# Projeto Front-end

Aplicação de catálogo de produtos feita com React, TypeScript e Vite.

## Estrutura

```text
src/
├── assets/       # Imagens e outros arquivos estáticos
├── components/   # Navbar, carrossel, cards, modal, navegação de marcas e footer
├── hooks/        # Hooks React
├── pages/        # Páginas compostas pela aplicação
├── types/        # Tipos e interfaces TypeScript
├── utils/        # Funções utilitárias
├── App.tsx       # Componente principal
└── main.tsx      # Inicialização do React
```

Os estilos dos componentes usam Sass (`.scss`). Os preços da API são tratados
como centavos e formatados para reais na interface.

## Executar localmente

1. Configure `VITE_URL_SITE` no arquivo `.env` com a URL base da API.
2. Instale as dependências com `npm install`.
3. Inicie o servidor com `npm run dev`.

Para validar o projeto, use `npm run build` e `npm run lint`.
