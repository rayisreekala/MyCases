import { Component } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent {




// isClicked:boolean=false  


//   Upload(){
// this.isClicked=!this.isClicked;
//   }

Upload(){
  
}
}


// import { Component } from '@angular/core';
// import { MessageService, PrimeNGConfig} from 'primeng/api';
// import { FileUploadModule } from 'primeng/fileupload';
// import { ButtonModule } from 'primeng/button';
// import { CommonModule } from '@angular/common';
// import { BadgeModule } from 'primeng/badge';
// import { HttpClientModule } from '@angular/common/http';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { ToastModule } from 'primeng/toast';

// @Component({
//     selector: 'app-document',
//     templateUrl: './document.component.html',
//     styleUrls: ['./document.component.scss'],
//     standalone: true,
//     imports: [FileUploadModule, ButtonModule, BadgeModule, ProgressBarModule, ToastModule, HttpClientModule, CommonModule],
//     providers: [MessageService]
// })
// export class FileUploadTemplateDemo {
//     files = [];

//     totalSize : number = 0;

//     totalSizePercent : number = 0;

//     constructor(private config: PrimeNGConfig, private messageService: MessageService) {}

//     choose(event, callback) {
//         callback();
//     }

//     onRemoveTemplatingFile(event, file, removeFileCallback, index) {
//         removeFileCallback(event, index);
//         this.totalSize -= parseInt(this.formatSize(file.size));
//         this.totalSizePercent = this.totalSize / 10;
//     }

//     onClearTemplatingUpload(clear) {
//         clear();
//         this.totalSize = 0;
//         this.totalSizePercent = 0;
//     }

//     onTemplatedUpload() {
//         this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
//     }

//     onSelectedFiles(event) {
//         this.files = event.currentFiles;
//         this.files.forEach((file) => {
//             this.totalSize += parseInt(this.formatSize(file.size));
//         });
//         this.totalSizePercent = this.totalSize / 10;
//     }

//     uploadEvent(callback) {
//         callback();
//     }

//     formatSize(bytes) {
//         const k = 1024;
//         const dm = 3;
//         const sizes = this.config.translation.fileSizeTypes;
//         if (bytes === 0) {
//             return `0 ${sizes[0]}`;
//         }

//         const i = Math.floor(Math.log(bytes) / Math.log(k));
//         const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

//         return `${formattedSize} ${sizes[i]}`;
//     }
// }