## Aplicação do vídeo do Youtube: Brincando com NextJS, GraphQL e Prisma juntos

## Do Professor Bonieky Lacerda

- npx create-next-app --typescript
- npm i -D prisma
- npm i @prisma/client
- npx prisma init
- npx prisma db push
- npx prisma generate
- npm i graphql apollo-server-micro micro micro-cors
- npm i -D @types/micro-cors
- npm i @graphql-codegen/cli
- npx graphql-codegen init
- npm i -D @graphql-codegen/typescript-resolvers
- npm run codegen
- npm i @apollo/client

- NextJS = Framework de React
- GRaphQl = Graph Query Language
  para criar apis
  site.com/api/graphql
  query {
    posts {
      id
      title
    }
  }
- Prisma = ORM