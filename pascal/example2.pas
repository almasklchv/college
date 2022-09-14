begin
  var a, b, c: real; // инициализация переменных
  a := 2.5; // присваиваем значения
  b := 3.0;
  writeln(a, b); // вывод в консоль
  c := a; a := b; b := c;
  write(a, b);
end.