import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorService } from './services/color/color.service';
import { SvgNodeService } from './services/svg-node/svg-node.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ColorService, SvgNodeService],
})
export class CoreModule {}
