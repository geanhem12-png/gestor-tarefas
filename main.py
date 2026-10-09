import sys
import tarefas
import listar

AJUDA = "Uso: python main.py [adicionar <texto> | listar | concluir <n>]"

if len(sys.argv) < 2:
    print(AJUDA)
elif sys.argv[1] == "adicionar":
    tarefas.adicionar(" ".join(sys.argv[2:]))
elif sys.argv[1] == "listar":
    listar.listar()
elif sys.argv[1] == "concluir":
    listar.concluir(int(sys.argv[2]))
else:
    print(AJUDA)
