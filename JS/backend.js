document.getElementById('formTabela').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const apelido = document.getElementById('apelido').value;
  
    if (nome && idade && email && apelido) {
      const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
      const novaLinha = tabela.insertRow();
  
      const celulaNome = novaLinha.insertCell(0);
      const celulaIdade = novaLinha.insertCell(1);
      const celulaEmail = novaLinha.insertCell(2);
      const celulaApelido = novaLinha.insertCell(3);
  
      celulaNome.textContent = nome;
      celulaIdade.textContent = idade;
      celulaEmail.textContent = email;
      celulaApelido.textContent = apelido;
  
      this.reset();
    }
  });
  
  function baixarCSV() {
    const linhas = [['Nome', 'Idade', 'email', 'apelido']];
    const rows = document.querySelectorAll('#tabela tbody tr');
  
    rows.forEach(row => {
      const cols = row.querySelectorAll('td');
      const linha = Array.from(cols).map(td => td.textContent);
      linhas.push(linha);
    });
  
    // Aqui usamos ponto e vírgula como separador
    let csv = linhas.map(linha => linha.join(';')).join('\n');
  
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'tabela.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  
  