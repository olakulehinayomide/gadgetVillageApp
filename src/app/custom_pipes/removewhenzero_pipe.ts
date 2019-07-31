import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
		name:	'removewhenzero',
		pure: false
})

export class RemoveWhenZeroPipe	implements	PipeTransform	{
	transform(number: any)	{
		if (number < 1) {
			return null;
		}
		else {
			return number;
		}
	}
}