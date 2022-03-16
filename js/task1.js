window.onload = function () {
   let iA = Number(prompt('Input initial amount, min 1000'));
   let nY = Number(prompt('Input number of years, min 1:'));
   let pY = Number(prompt('Input percentage of year, max 100:'));

   let tP = (iA / 100) * pY;
   let tA = iA + tP;

   // Берем первоначальный взнос, чтобы к нему прибавлять все операции
   let tProfit = iA;

   // Создаем цикл увеличивая значение i от нуля до nY инкрементом +1
   for (let i = 0; i < nY; i++) {
      // Берем введенный процент pY от первого вклада
      let percent = (tProfit * pY) / 100;
      // Прибавляем процент каждый проход цикла:
      tProfit += percent;
   }

   // Вычитаем из общей суммы первоначальный взнос:
   let tPFinal = tProfit - iA;

   // ---------------------------------------------------------------------------------
   // Проверка на целые числа - выводить ли две цифры после запятой:
   let tPCeliy;
   if (Number.isInteger(tP)) {
      tPCeliy = tP;
   } else {
      tPCeliy = tP.toFixed(2);
   }

   let tACeliy;
   if (Number.isInteger(tA)) {
      tACeliy = tA;
   } else {
      tACeliy = tA.toFixed(2);
   }

   let tPCeliyFinal;
   if (Number.isInteger(tPFinal)) {
      tPCeliyFinal = tPFinal;
   } else {
      tPCeliyFinal = tPFinal.toFixed(2);
   }

   let tACeliyFinal;
   if (Number.isInteger(tProfit)) {
      tACeliyFinal = tProfit;
   } else {
      tACeliyFinal = tProfit.toFixed(2);
   }
   // ---------------------------------------------------------------------------------

   // Проверяем введенные данные:
   if (
      (iA, nY, pY !== null) &&
      !isNaN(iA, nY, pY) &&
      iA >= 1000 &&
      nY >= 1 &&
      Number.isInteger(nY) &&
      pY <= 100
   ) {
      alert(
         `Initial amount: ${iA}
Number of years: ${nY}
Percentage of year: ${pY}

1 Year

Total profit: ${tPCeliy}
Total amount: ${tACeliy}

${nY} Year
Total profit: ${tPCeliyFinal}
Total amount: ${tACeliyFinal}`
      );
   } else {
      alert('Invalid input data');
   }
};
