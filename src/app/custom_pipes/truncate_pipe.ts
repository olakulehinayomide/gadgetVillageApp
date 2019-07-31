import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
		name:	'trunc'
})

export class TruncateStringPipe	implements	PipeTransform	{
	transform(string: string,	length:	number): string	{
		if (string == null || string == undefined){
			return string;
		}
		else {
			if (string.length > length) {
		      return string.substring(0, length - 3) + "...";
		    }
		    else {
		      return string;
		    }
		}
		
		// return	`${formattedSize}	${unit}`;
	}
}