let alunos = [];
let editIndex = -1;

const form = document.getElementById("formAluno");
const tabela = document.getElementById("tabelaAlunos");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;
    const matricula = document.getElementById("matricula").value;

    if (editIndex === -1) {
        //Cadastro
        alunos.push({nome, idade, curso, matricula});
    } else {
        //Edição
        alunos[editIndex] = { nome, idade, curso, matricula};
        editIndex = -1;
    }
    form.reset();
    renderTabela();
});
    function renderTabela() {
        tabela.innerHTML = "";
        alunos.forEach((aluno, index) =>{
            const row = `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.curso}</td>
                <td>${aluno.matricula}</td>
                <td>
                    <button class="edit" onclick="editarAluno(${index})">Editar</button>
                    <button class="delete" onclick="excluirAluno(${index})">Excluir</button>
                </td>
            </tr>
            `;
            tabela.innerHTML += row;
        });
    }
    function editarAluno(index) {
        const aluno = alunos[index];
        document.getElementById("nome").value = aluno.nome;
        document.getElementById("idade").value = aluno.idade;
        document.getElementById("curso").value = aluno.curso;
        document.getElementById("matricula").value = aluno.matricula;
        editIndex = index;
    }
    function excluirAluno(index) {
        alunos.splice(index, 1);
        renderTabela();
    }
