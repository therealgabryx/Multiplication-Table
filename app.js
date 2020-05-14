function exec() {
  showTable();
}

function showTable() {
  document.write('<table style="border: solid 1px black; border-collapse: collapse; width: 30%">');
  for (i = 1; i <= 10; i++) {
    document.write('<tr style="border: solid 1px black">');
    for (j = 1; j <= 10; j++) {
      document.write('<td  style="border: solid 1px black; text-align:center; padding: 3%;">');
      document.write(i * j);
      document.write('</td>');
    }
    document.write('</tr>');
  }
  document.write('</table>');
}
