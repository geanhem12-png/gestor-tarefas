# Gestor de Tarefas

Aplicação de linha de comandos, em Python, para gerir tarefas pessoais. Projeto académico de controlo de versões com **GitFlow**, **Conventional Commits** e **Versionamento Semântico**.

## Requisitos
- Python 3.8 ou superior
- Git

## Instalação
```bash
git clone <url-do-repositorio>
cd gestor-tarefas
```

## Utilização
```bash
python main.py adicionar "Estudar GitFlow"
python main.py listar
python main.py concluir 1
```

## Estrutura do projeto
```
gestor-tarefas/
├── main.py       # interface de linha de comandos
├── tarefas.py    # criação e armazenamento de tarefas
├── listar.py     # listar e concluir tarefas
├── CHANGELOG.md  # histórico de versões
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
- `chore:` tarefas de manutenção

## Versionamento semântico
Formato `MAJOR.MINOR.PATCH`: MAJOR para alterações incompatíveis, MINOR para novas funcionalidades compatíveis, PATCH para correções. Ver [CHANGELOG.md](CHANGELOG.md).
