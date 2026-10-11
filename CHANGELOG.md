# Changelog

## [1.9.0]
### Adicionado
- Deploy automático no GitHub Pages com GitHub Actions: a cada fusão em `main`, o fluxo corre os testes, faz o build com Vite e publica a pasta `dist/`
- Secção "Deploy" no README com o endereço público e o processo de configuração

### Alterado
- `vite.config.js` usa `base: "./"` e as imagens usam caminhos relativos, para a página funcionar na subpasta `/gestor-tarefas/`

## [1.8.0]
### Adicionado
- Ilustração otimizada na página: WebP com alternativa JPEG, três larguras (480, 800 e 1280 px) e `<picture>` com `srcset` e `sizes`

## [1.7.1]
### Corrigido
- Removido ficheiro criado por engano no repositório

## [1.7.0]
### Adicionado
- Build de produção com Vite (npm run build) e minificação de CSS e JS

## [1.6.0]
### Adicionado
- Modo escuro (automático e manual)
### Corrigido
- Contraste do contorno de foco no tema claro

## [1.5.0]
### Adicionado
- Interface web acessível (index.html) com landmarks semânticos e WAI-ARIA

## [1.4.0]
### Adicionado
- Testes unitários (python -m unittest -v)
### Alterado
- README com URL de clonagem real e secção de testes
### Nota
- As etiquetas v1.1.0, v1.2.0 e v1.3.0 foram criadas antes de o código correspondente estar no repositório (só o CHANGELOG foi atualizado). As funcionalidades que anunciam (testes, interface web acessível e modo escuro) são entregues de facto nas versões 1.4.0, 1.5.0 e 1.6.0.

## [1.3.0]
### Adicionado
- Modo escuro (automático e manual)
### Corrigido
- Contraste do contorno de foco no tema claro

## [1.2.0]
### Adicionado
- Interface web acessível (index.html) com landmarks e WAI-ARIA

## [1.0.1]
### Corrigido
- Validação de descrições vazias ao adicionar tarefas

## [1.0.0]
### Adicionado
- Criar, listar e concluir tarefas
- Interface de linha de comandos
