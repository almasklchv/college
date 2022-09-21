begin
  var number: integer;
  var numberInStr: string;
  var sum: integer;
  var i: integer;
  sum := 0;
  
  write('Введите число: ');
  read(number);
  str(number, numberInStr);
  
  for i := 1 to length(numberInStr) do begin
    sum += sqr(StrToInt(copy(numberInStr, i, 1)));
  end;
  
  write(sum);
    
end.