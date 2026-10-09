"""Listar e concluir tarefas."""
from tarefas import carregar, guardar


def listar():
    for i, t in enumerate(carregar(), start=1):
        estado = "x" if t["concluida"] else " "
        print(f"{i}. [{estado}] {t['descricao']}")


def concluir(numero):
    tarefas = carregar()
    tarefas[numero - 1]["concluida"] = True
    guardar(tarefas)
