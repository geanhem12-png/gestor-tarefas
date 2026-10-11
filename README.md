# Gestor de Tarefas

Aplicação de linha de comandos, em Python, para gerir tarefas pessoais. Projeto académico de controlo de versões com **GitFlow**, **Conventional Commits** e **Versionamento Semântico**.

## Requisitos
- Python 3.8 ou superior
- Git
- Node.js 18 ou superior (apenas para a página web e o build)

## Instalação
```bash
git clone https://github.com/geanhem12-png/gestor-tarefas.git
cd gestor-tarefas
```
A aplicação de linha de comandos usa apenas a biblioteca padrão do Python. Para a página web:
```bash
npm install
```

## Utilização
```bash
python main.py adicionar "Estudar GitFlow"
python main.py listar
python main.py concluir 1
```

## Testes
```bash
python -m unittest -v
```

## Página web acessível
`index.html` é uma interface web com HTML semântico (`header`, `nav`, `main`, `footer`, `section`) e atributos WAI-ARIA (diálogo modal, mensagens de estado e erro, formulário com `label`). Inclui modo escuro, automático (`prefers-color-scheme`) e manual (botão no cabeçalho), com rácios de contraste WCAG.

## Build de produção
O [Vite](https://vite.dev) empacota e minifica o CSS e o JavaScript da página web (configuração em `vite.config.js`):
```bash
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção na pasta dist/
npm run preview   # testar a build
```

## Estrutura do projeto
```
gestor-tarefas/
├── main.py            # interface de linha de comandos
├── tarefas.py         # criação e armazenamento de tarefas
├── listar.py          # listar e concluir tarefas
├── test_tarefas.py    # testes unitários
├── index.html         # página web acessível
├── src/               # estilo.css e app.js
├── vite.config.js     # configuração do build
├── package.json
├── CHANGELOG.md       # histórico de versões
└── README.md
```

## Estratégia de ramificação (GitFlow)
| Branch | Função |
|--------|--------|
| `main` | Código estável; cada versão tem uma tag |
| `develop` | Integração do desenvolvimento contínuo |
| `feature/*` | Novas funcionalidades, criadas a partir de `develop` |
| `release/*` | Preparação de versões, a partir de `develop` |
| `hotfix/*` | Correções urgentes, a partir de `main` |

## Convenção de commits
Segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` nova funcionalidade (sobe MINOR)
- `fix:` correção de falha (sobe PATCH)
- `docs:` documentação
- `test:` testes
- `build:` sistema de build
- `chore:` tarefas de manutenção

## Versionamento semântico
Formato `MAJOR.MINOR.PATCH`: MAJOR para alterações incompatíveis, MINOR para novas funcionalidades compatíveis, PATCH para correções. Ver [CHANGELOG.md](CHANGELOG.md).
