# Portfólio de Victor Diniz

Portfólio pessoal em React 19 e Vite 7, com páginas para início, projetos, experiência, sobre e contato.

## Desenvolvimento

Requer Node.js compatível com Vite 7.

```sh
npm install
npm run dev
```

## Validação e build

```sh
npm run lint
npm run build
npm run preview
```

## Conteúdo

Os dados de projetos, tecnologias e experiências ficam em `src/data.js`. Preencha ali informações adicionais verificáveis antes de publicar estudos de caso completos. Os detalhes atuais dos projetos exibem somente o que já existia no portfólio.

## Rotas e publicação

As rotas são tratadas pela aplicação e o arquivo `vercel.json` encaminha URLs diretas para o app. A Vercel pode publicar normalmente a partir do repositório GitHub após o push para a branch conectada. Não há deploy automático configurado neste projeto.
