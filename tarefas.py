"""Gestor de tarefas simples com armazenamento em JSON."""
import json
import os

FICHEIRO = "tarefas.json"


def carregar():
    if not os.path.exists(FICHEIRO):
        return []
    with open(FICHEIRO, encoding="utf-8") as f:
        return json.load(f)


def guardar(tarefas):
    with open(FICHEIRO, "w", encoding="utf-8") as f:
        json.dump(tarefas, f, ensure_ascii=False, indent=2)


def adicionar(descricao):
    if not descricao.strip():
        raise ValueError("A descrição não pode estar vazia.")
    tarefas = carregar()
    tarefas.append({"descricao": descricao, "concluida": False})
    guardar(tarefas)
    return tarefas
