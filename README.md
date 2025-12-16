# ⏱️ Cronômetro Online — JavaScript


  Um cronômetro online moderno e funcional, desenvolvido com HTML, CSS e JavaScript, ideal para medição de tempo prática e precisa.
Além das funções básicas (Iniciar/Pausar), este projeto permite **avançar** e **retroceder** o tempo, além de salvar tempos utilizando `localStorage`, garantindo que os dados persistam mesmo após recarregar a página.

---

## ✨ Funcionalidades Avançadas

| Ícone | Recurso | Descrição |
| :--- | :--- | :--- |
| ▶️ | **Iniciar/Retomar** | Começa a contagem ou retoma de onde parou. |
| ⏸️ | **Pausar** | Para a contagem a qualquer momento. |
| 🔄 | **Zerar** | Reinicia o cronômetro. |
| ⏪ | **Retroceder** | Volta 10 segundos na contagem. |
| ⏩ | **Avançar** | Avança 10 segundos na contagem. |
| 💾 | **Salvar Tempo** | Armazena o tempo atual no navegador. |
| 📦 | **Persistência de Dados** | Tempos salvos persistem via `localStorage`. |
| 🧹 | **Limpar Tempos** | Remove todos os tempos salvos do navegador. |

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura base da aplicação.
* **CSS3:** Estilização moderna, **gradientes** e **animações**.
* **JavaScript:** Lógica do cronômetro, controle de estado e **armazenamento local** (`localStorage`).

---

## 🧠 Como o Jogo Funciona

* **Formatação:** O tempo é contado em segundos e exibido no formato **HH:MM:SS**.
* **Contagem:** Utiliza `setInterval` para atualizar o tempo a cada segundo.
* **Controle de Estado:** O estado do cronômetro é gerenciado por uma *flag* (`running`), evitando execuções simultâneas ou inesperadas.
* **Persistência:** Os tempos salvos são armazenados no `localStorage`, garantindo que fiquem disponíveis mesmo após atualizar a página.

---

## 🎨 Destaques Visuais (CSS)

O design combina estética moderna com usabilidade:

* **Fundo:** Gradiente marcante **roxo → azul**.
* **Container Central:** Bordas arredondadas, **efeito glassmorphism** e sombra suave.
* **Botões:**
    * Organizados em coluna, facilitando o uso.
    * Cores diferenciadas por função.
    * Animações de `hover` e *feedback* visual ao interagir.
* **Lista de Tempos Salvos:** Lista estilizada com **rolagem automática** e efeito de destaque ao passar o mouse.

---

## 💡 Possíveis Melhorias Futuras

* Marcação de **voltas (laps)**.
* Opção de **Exportar** tempos salvos para arquivo.
* Modo escuro/claro com transição suave.
* Efeitos sonoros ao iniciar/pausar.
* **Versão mobile-first** com interface otimizada.

---

## 📄 Licença

Projeto livre para fins educacionais e estudos.

