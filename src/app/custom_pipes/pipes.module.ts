import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

// import {HeaderModule} from "./modules/header/header.module";
import {TruncateStringPipe} from './truncate_pipe';
import {TimeAgoPipe} from './timeago_pipe';

import {ExactTruncateStringPipe} from './exact_truncate_pipe';
import {IntToStringPipe} from './inttostring_pipe';
import {RemoveWhenZeroPipe} from './removewhenzero_pipe';
import {OrderBy} from './orderby_pipe';


@NgModule({
    declarations: [ OrderBy, TimeAgoPipe, ExactTruncateStringPipe, TruncateStringPipe, IntToStringPipe, RemoveWhenZeroPipe ],
    bootstrap:    [ ],
    exports: [ OrderBy, ExactTruncateStringPipe, TruncateStringPipe, IntToStringPipe, TimeAgoPipe, RemoveWhenZeroPipe],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PipesModule { }