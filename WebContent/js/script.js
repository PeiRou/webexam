//隨機產生不重覆的n個數字
	function getRandomArray(minNum, maxNum, n) {	
		var rdmArray = [n];		//儲存產生的陣列
	 
		for(var i=0; i<n; i++) {
			var rdm = 0;		//暫存的亂數
	 
			do {
				var exist = false;			//此亂數是否已存在
				rdm = getRandom(minNum, maxNum);	//取得亂數
	 
				//檢查亂數是否存在於陣列中，若存在則繼續回圈
				if(rdmArray.indexOf(rdm) != -1) exist = true;
	 
			} while (exist);	//產生沒出現過的亂數時離開迴圈
	 
			rdmArray[i] = rdm;
		}
		return rdmArray;
	}
	function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
		return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
	}