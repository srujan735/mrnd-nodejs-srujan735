
exports.Sum = function(num1, num2){
	return num2+num1;
}

exports.SumOfArray = function(arrayOfNums){
	var len=arrayOfNums.length;
	var sum=0;
	for(var i=0;i<len;i++)
	{
		sum+=arrayOfNums[i];
	}
	return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var temp=[];
	var sum=0;
	for(var i=0;i<arrayOfNums.length;i++)
	{
		var a=temp.indexOf(arrayOfNums[i]);
		if(a==-1)
		{
			sum+=arrayOfNums[i];
			temp.push(arrayOfNums[i]);
		}
	}
	return sum;
}

exports.ReverseString = function(str){
	var str1="";
	for(var i=str.length-1;i>=0;i--)
	{
		str1+=str.charAt(i);

		/*str1=str.charAt(i);
		str.charAt(i)=str.charAt(str.length-1-i)
		str.charAt(str.length-1-i)=str1;*/
	}
	return str1;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	for(var i=0;i<arrayOfStrings.length;i++)
	{
		var str=arrayOfStrings[i];
		var str1="";
	for(var j=str.length-1;j>=0;j--)
	{
		str1+=str.charAt(j);
	}
	arrayOfStrings[i]=str1;
	}

	return arrayOfStrings;

}