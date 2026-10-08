/* Dados do restaurante. Para vender a outra pizzaria ou restaurante, troque só este arquivo. */
window.CARDAPIO = {
  nome: "Casa do Forno",
  slogan: "Pizzaria artesanal · massa de 48 h · Lisboa",
  whatsapp: "351910000000", // número que recebe os pedidos (351 + 9 dígitos)
  taxaServico: 0,           // em Portugal normalmente não há taxa de serviço; ponha 0.1 para cobrar 10%
  /* MB WAY de demonstração: troque pelo número real do cliente */
  mbway: { numero: "910000000", nome: "CASA DO FORNO" },
  /* preço do tamanho Grande = preço base (Média) × fator, arredondado a 0,50 € */
  tamanhos: [
    { id: "M", nome: "Média", detalhe: "6 fatias", fator: 1 },
    { id: "G", nome: "Grande", detalhe: "8 fatias", fator: 1.35 }
  ],
  bordas: [
    { id: "", nome: "Sem orla recheada", preco: 0 },
    { id: "queijo", nome: "Queijo fundido", preco: 2 },
    { id: "requeijao", nome: "Requeijão", preco: 2 },
    { id: "chocolate", nome: "Chocolate", preco: 2.5 }
  ],
  categorias: [
    { id: "tradicionais", nome: "Clássicas" },
    { id: "especiais", nome: "Especiais" },
    { id: "doces", nome: "Doces" },
    { id: "bebidas", nome: "Bebidas" }
  ],
  /* cores: [massa/molho, queijo, cobertura1, cobertura2] usadas na ilustração */
  itens: [
    { id: 1, cat: "tradicionais", foto: "margherita", nome: "Margherita", desc: "Molho de tomate italiano, mozzarella de búfala, manjericão fresco e azeite.", preco: 11, tag: "Mais pedida", cores: ["#c0392b", "#f4e4b8", "#3f7d3a", "#a8321f"] },
    { id: 2, cat: "tradicionais", foto: "calabresa", nome: "Pepperoni e Cebola Roxa", desc: "Pepperoni artesanal fatiado, cebola roxa, azeitonas e orégano.", preco: 11.5, cores: ["#c0392b", "#f4e4b8", "#a8321f", "#6b2d5c"] },
    { id: 3, cat: "tradicionais", nome: "Fiambre e Cogumelos", desc: "Fiambre, cogumelos frescos, mozzarella e orégano.", preco: 12, cores: ["#c0392b", "#f4e4b8", "#e8a0a0", "#8a6b4a"] },
    { id: 4, cat: "tradicionais", nome: "Quatro Queijos", desc: "Mozzarella, provolone, gorgonzola e parmesão.", preco: 13, cores: ["#d9a441", "#f7e9bd", "#e6c36a", "#8aa0b8"] },
    { id: 5, cat: "especiais", foto: "burrata", nome: "Burrata e Pesto", desc: "Burrata cremosa, pesto de manjericão, tomate confitado e pinhões.", preco: 15, tag: "Chef", cores: ["#d9a441", "#f7f1df", "#6f9a3a", "#c0392b"] },
    { id: 6, cat: "especiais", nome: "Presunto e Rúcula", desc: "Presunto cru curado, rúcula e lascas de grana padano.", preco: 16, cores: ["#c0392b", "#f4e4b8", "#d98a8a", "#5b8c3a"] },
    { id: 7, cat: "especiais", nome: "Trufada", desc: "Creme de cogumelos, mozzarella, funghi e azeite trufado.", preco: 17, tag: "Novidade", cores: ["#7a5a3a", "#f4e4b8", "#8a6b4a", "#4a3626"] },
    { id: 8, cat: "doces", nome: "Chocolate e Morango", desc: "Chocolate de leite, morangos frescos e raspas.", preco: 9, cores: ["#4a2a1a", "#6b3a22", "#d63a4a", "#d63a4a"] },
    { id: 9, cat: "doces", nome: "Banana e Canela", desc: "Banana caramelizada, canela, leite condensado e açúcar amarelo.", preco: 8, cores: ["#d9a441", "#f4e4b8", "#e9d36b", "#8a5a2a"] },
    { id: 10, cat: "bebidas", nome: "Refrigerante em lata", desc: "Coca-Cola, Fanta ou Sprite, 33 cl.", preco: 2, bebida: true },
    { id: 11, cat: "bebidas", nome: "Sumo natural 40 cl", desc: "Laranja, limão ou maracujá, feito na hora.", preco: 3.5, bebida: true },
    { id: 12, cat: "bebidas", nome: "Cerveja 33 cl", desc: "Super Bock ou Sagres, 33 cl.", preco: 2.5, bebida: true }
  ]
};
