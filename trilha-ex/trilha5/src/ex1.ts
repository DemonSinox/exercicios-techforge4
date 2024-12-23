// 1. Sistema de Tarefas e Projetos
// Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

// Crie duas subclasses: Project e DailyTasks.
// Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
// DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
// Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
// Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos

abstract class TaskManager {
    protected tasks: Set<{ name: string; type: string }> = new Set();
  
    abstract addTask(task: { name: string; type: string }): void;
    abstract listTasks(): string[];
  }
  
  class Project extends TaskManager {
    addTask(task: { name: string; type: string }): void {
      if (task.type !== "project") {
        throw new Error("Esta tarefa deve ser do tipo 'project'.");
      }
      const taskKey = JSON.stringify(task);
      if ([...this.tasks].find(t => JSON.stringify(t) === taskKey)) {
        throw new Error("Essa tarefa ja existe no projeto.");
      }
      this.tasks.add(task);
    }
  
    listTasks(): string[] {
      return [...this.tasks]
        .filter(task => task.type === "project")
        .map(task => task.name);
    }
  }
  
  class DailyTasks extends TaskManager {
    addTask(task: { name: string; type: string }): void {
      if (task.type !== "daily") {
        throw new Error("Esta tarefa deve ser do tipo 'daily'.");
      }
      const taskKey = JSON.stringify(task);
      if ([...this.tasks].find(t => JSON.stringify(t) === taskKey)) {
        throw new Error("Essa tarefa ja existe nas tarefas diarias.");
      }
      this.tasks.add(task);
    }
  
    listTasks(): string[] {
      return [...this.tasks]
        .filter(task => task.type === "daily")
        .map(task => task.name);
    }
  }
  
  const projectManager = new Project();
  const dailyManager = new DailyTasks();
  
  try {
    projectManager.addTask({ name: "Implementar API", type: "project" });
    projectManager.addTask({ name: "Testar modulo de login", type: "project" });
    dailyManager.addTask({ name: "Fazer cafe", type: "daily" });
    dailyManager.addTask({ name: "Revisar emails", type: "daily" });
  
    console.log("Tarefas do projeto:", projectManager.listTasks());
    console.log("Tarefas diarias:", dailyManager.listTasks());
  
    projectManager.addTask({ name: "Testar modulo de login", type: "project" });
  } catch (error) {
    console.error("Erro:", (error as Error).message);
  }
  