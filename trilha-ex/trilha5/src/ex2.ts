// 2. Inventário de Itens
// Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para objetos com TypeScript

// Crie duas subclasses WarehouseInventory e StoreInventory.
// WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
// StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
// Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.

abstract class Inventory {
    protected items: Record<string, number> = {};
  
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
  }
  
  class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
      if (quantity <= 0) {
        throw new Error("A quantidade deve ser maior que zero.");
      }
      this.items[item] = (this.items[item] || 0) + quantity;
    }
  
    removeItem(item: string): void {
      if (!this.items[item]) {
        throw new Error("Item nao encontrado no inventario.");
      }
      delete this.items[item];
    }
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  class StoreInventory extends Inventory {
    private maxQuantity = 10;
  
    addItem(item: string, quantity: number): void {
      if (quantity <= 0) {
        throw new Error("A quantidade deve ser maior que zero.");
      }
      const currentQuantity = this.items[item] || 0;
      const newQuantity = currentQuantity + quantity;
      if (newQuantity > this.maxQuantity) {
        throw new Error(
          `A quantidade de ${item} excede o limite permitido de ${this.maxQuantity}.`
        );
      }
      this.items[item] = newQuantity;
    }
  
    removeItem(item: string): void {
      if (!this.items[item]) {
        throw new Error("Item nao encontrado no inventario.");
      }
      delete this.items[item];
    }
  
    getInventory(): Record<string, number> {
      return this.items;
    }
  }
  
  const warehouse = new WarehouseInventory();
  const store = new StoreInventory();
  
  try {
    warehouse.addItem("Cimento", 500);
    warehouse.addItem("Areia", 300);
    store.addItem("Chocolate", 5);
    store.addItem("Sorvete", 10);
  
    console.log("Inventario do armazem:", warehouse.getInventory());
    console.log("Inventario da loja:", store.getInventory());
  
    store.addItem("Chocolate", 6);
  } catch (error) {
    console.error("Erro:", (error as Error).message);
  }
  
  try {
    warehouse.removeItem("Areia");
    console.log("Inventario do armazem apos remocao:", warehouse.getInventory());
  } catch (error) {
    console.error("Erro:", (error as Error).message);
  }
  