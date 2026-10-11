"""Testes unitários. Executar com: python -m unittest -v"""
import os
import tempfile
import unittest

import listar
import tarefas


class TestTarefas(unittest.TestCase):
    def setUp(self):
        self.pasta = tempfile.TemporaryDirectory()
        tarefas.FICHEIRO = os.path.join(self.pasta.name, "tarefas.json")

    def tearDown(self):
        self.pasta.cleanup()

    def test_adicionar_tarefa(self):
        resultado = tarefas.adicionar("Estudar GitFlow")
        self.assertEqual(len(resultado), 1)
        self.assertFalse(resultado[0]["concluida"])

    def test_descricao_vazia_e_rejeitada(self):
        with self.assertRaises(ValueError):
            tarefas.adicionar("   ")

    def test_concluir_tarefa(self):
        tarefas.adicionar("Fazer testes")
        listar.concluir(1)
        self.assertTrue(tarefas.carregar()[0]["concluida"])


if __name__ == "__main__":
    unittest.main()
