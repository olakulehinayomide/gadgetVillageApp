import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
		name:	'exacttrunc',
		pure: true
})

@Injectable()
export class ExactTruncateStringPipe	implements	PipeTransform	{
	transform(string: string,	length:	number): string	{
		if (string == null || string == undefined) {
			return string;
		}
		else {
			if (string.length > length) {
		      return string.substring(0, length);
		    }
		    else {
		      return string;
		    }
		}
		// return	`${formattedSize}	${unit}`;
	}
}