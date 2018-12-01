function calcMath() {
    var profitPercent; //interest depending on portfolio type
    var profit; // investment amount * interest
    var totalRevenue; //investment + profit
    var resultPortfolio; //chosen portfolio
    var investSumm = document.getElementById("investment").value;
    var investPeriod = document.getElementById("period").value;
    
    
    if (document.getElementById("credit").checked) {
    	profitPercent = 0.2;
    	resultPortfolio = "Conservative";
    }	else if
    	(document.getElementById("debit").checked) {
    	profitPercent = 0.4;
    	resultPortfolio = "Balanced";
    }	else {
    	profitPercent = 0.5;
    	resultPortfolio = "Agressive";
    }



  	profit = (investSumm * profitPercent) * investPeriod;
    totalRevenue = Number(investSumm) + Number(profit);
    
    document.getElementById("resInv").innerHTML = "$" + investSumm;
    document.getElementById("resPeriod").innerHTML = investPeriod + " mo";
	document.getElementById("resPortf").innerHTML = resultPortfolio;
    document.getElementById("total-profit").innerHTML = "$" + profit;
    document.getElementById("total-revenue").innerHTML = "$" + totalRevenue;

}
