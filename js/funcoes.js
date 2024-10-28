function alterarQtd(produto, acao) {
  const qtd = document.getElementById(`qtd_${produto}`);
  const valor = document.getElementById(`valor_${produto}`);
  const total = document.getElementById(`total_${produto}`);
  const subtotal = document.getElementById(`subtotal`);

  switch (acao) {
    case "adicionar": {
      qtd.innerHTML++;

      total.innerHTML = (Number(total.innerHTML) + Number(valor.innerHTML)).toFixed(2);

      subtotal.innerHTML = (Number(subtotal.innerHTML) + Number(valor.innerHTML)).toFixed(2);

      break;
    }
    case "retirar": {
      if (qtd.innerHTML > 0) {
        qtd.innerHTML--;

        total.innerHTML = (Number(total.innerHTML) - Number(valor.innerHTML)).toFixed(2);

        subtotal.innerHTML = (Number(subtotal.innerHTML) - Number(valor.innerHTML)).toFixed(2);
      }

      break;
    }
  }
}
