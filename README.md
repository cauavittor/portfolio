# Portfolio - Cauã Vitor Braga Novaes

Portfolio pessoal desenvolvido com **Next.js 14**, **React 18** e **TypeScript**.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilização
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/cauavittor/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
```

## 🏗️ Estrutura do Projeto

```
portfolio/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/             # Componentes React
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── SocialLinks.tsx
│   └── Footer.tsx
├── pages/                  # Arquivos HTML originais
│   ├── perfil.html
│   └── styles.css
├── package.json            # Dependências
├── next.config.js          # Configuração Next.js
├── tsconfig.json           # Configuração TypeScript
├── vercel.json             # Configuração Vercel
└── README.md
```

## 🎨 Componentes

- **Header** - Informações do perfil
- **Navigation** - Menu de navegação
- **About** - Seção sobre mim
- **Skills** - Habilidades técnicas
- **Projects** - Projetos realizados
- **Contact** - Formulário de contato
- **SocialLinks** - Links das redes sociais
- **Footer** - Rodapé do site

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. O Vercel detectará automaticamente que é um projeto Next.js
3. O deploy será feito automaticamente

### Outras plataformas
- **Netlify**: Configure o build command como `npm run build`
- **Railway**: Funciona nativamente com Next.js
- **Heroku**: Adicione o buildpack do Node.js

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔗 Links

- **Site Principal:** `seudominio.vercel.app`
- **GitHub:** [@cauavittor](https://github.com/cauavittor)
- **LinkedIn:** [Cauã Vitor Braga Novaes](https://www.linkedin.com/in/cauavittorbraga)
- **Instagram:** [@cauavittor](https://www.instagram.com/cauavittor)

## 📧 Contato

- **Email:** contato@cauavittor.com
- **WhatsApp:** [Link do WhatsApp]

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento local
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 