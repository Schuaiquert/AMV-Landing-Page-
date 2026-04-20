# AMV Refrigeração – Landing Page

Landing page institucional para a **AMV Refrigeração**, empresa de conserto e manutenção de eletrodomésticos localizada em Rio das Ostras – RJ.

---

## Estrutura do Projeto

```
landingpage/
├── index.html          # Estrutura e conteúdo da página
├── TECNOLOGIAS.md      # Este arquivo
├── css/
│   └── style.css       # Estilos, variáveis CSS e responsividade
├── js/
│   └── main.js         # Lógica de animações e comportamento
└── img/
    ├── WhatsApp Image 2026-04-20 at 11.32.51.jpeg
    ├── WhatsApp Image 2026-04-20 at 11.32.51(1).jpeg
    └── WhatsApp Image 2026-04-20 at 11.34.06.jpeg
```

---

## Tecnologias Utilizadas

### Linguagens

| Tecnologia | Versão | Uso |
|---|---|---|
| HTML5 | — | Estrutura semântica da página |
| CSS3 | — | Estilização, variáveis, grid, animações |
| JavaScript (ES6+) | — | Comportamento e interações |

### Bibliotecas Externas (CDN)

| Biblioteca | Versão | Finalidade | Link |
|---|---|---|---|
| **AOS** (Animate on Scroll) | 2.3.4 | Animações de entrada ao rolar a página | [unpkg.com/aos](https://unpkg.com/aos@2.3.4/dist/aos.js) |
| **Font Awesome** | 6.5.0 | Ícones vetoriais (serviços, contato, WhatsApp) | [cdnjs.cloudflare.com](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css) |
| **Google Fonts – Poppins** | — | Tipografia moderna (pesos 300, 400, 600, 700, 800) | [fonts.googleapis.com](https://fonts.googleapis.com) |

### Recursos CSS Notáveis

- **CSS Custom Properties (variáveis)** – paleta de cores centralizada em `:root`
- **CSS Grid** – layout de 2 colunas (hero, about) com fallback responsivo
- **CSS Animations / Keyframes** – `spin-slow`, `float-up`, `bounce`, `pulse-wa`
- **`clamp()`** – tipografia fluida sem media queries extras
- **`backdrop-filter: blur()`** – efeito glassmorphism na navbar
- **`object-fit: cover` + `object-position`** – recorte inteligente das fotos

---

## Seções da Página

1. **Hero** – apresentação principal com foto do técnico e CTA
2. **Trust Bar** – barra de diferenciais rápidos
3. **Serviços** – cards animados: Geladeira, Freezer, Máquina de Lavar, Ar Condicionado
4. **Sobre** – fotos sobrepostas + lista de diferenciais da empresa
5. **Contato** – cards com telefone, endereço e horário + botão WhatsApp
6. **Footer** – rodapé com dados da empresa
7. **Botão flutuante** – atalho fixo para o WhatsApp

---

## Como Abrir Localmente

Basta abrir o arquivo `index.html` diretamente no navegador — não requer servidor ou build.

```bash
# Ou via terminal, na pasta do projeto:
start index.html   # Windows
open index.html    # macOS
```

---

## Contato da Empresa

**AMV Refrigeração** · Alcimar  
📱 (22) 99803-3365  
📍 Rua Aquelino Borges, 22 – Cidade Beira Mar, Rio das Ostras – RJ
