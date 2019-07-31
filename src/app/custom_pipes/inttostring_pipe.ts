import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
		name:	'intToString'
})

export class IntToStringPipe	implements	PipeTransform	{
	transform(number: any)	{
		let value = parseInt(number);
		if (value > 999) {
			let suffixes = ["", "K", "M", "B","T"];
		    let suffixNum = Math.floor((""+value).length/3);
		    let shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
		    //if (shortValue % 1 != 0) { let shortNum = shortValue.toFixed(1)};
		    return shortValue+suffixes[suffixNum];
			// return	`${formattedSize}	${unit}`;
		}
		else {
			return value;
		}	
	}
}