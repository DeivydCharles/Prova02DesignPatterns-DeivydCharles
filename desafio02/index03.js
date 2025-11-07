class ProjectItem {
  constructor(name) {
    this.name = name;
  }

  showDetails(indent = "") {
    throw new Error("Este método deve ser implementado pelas subclasses.");
  }

  add(item) {}
  remove(item) {}
}

class Task extends ProjectItem {
  constructor(name) {
    super(name); 
  }

  showDetails(indent = "") {
    console.log(`${indent}Tarefa: ${this.name}`);
  }
}

class Project extends ProjectItem {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(item) {
    this.children.push(item);
  }

  remove(item) {
    this.children = this.children.filter(child => child !== item);
  }

  showDetails(indent = "") {
    console.log(`${indent}Projeto: ${this.name}`);

    this.children.forEach((child) => {
      child.showDetails(indent + "  ");
    });
  }
}

const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");

const p = new Project("Lançamento v1.0");
p.add(t1);
p.add(t2);

const t3 = new Task("Definir arquitetura");
const t4 = new Task("Configurar CI/CD");
const pInfra = new Project("Infraestrutura");
pInfra.add(t3);
pInfra.add(t4);

p.add(pInfra);

p.showDetails();