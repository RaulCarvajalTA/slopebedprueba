import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DocumentationComponent } from './documentation.component';
import { DocuemntationRoutingModule } from './documentation-routing.module';
import { CommonUtilsModule } from 'src/app/common/common-utils.module';



@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DocuemntationRoutingModule,
    CommonUtilsModule
  ],
  exports: [
    DocumentationComponent
  ]
})
export class DocumentationModule { }
