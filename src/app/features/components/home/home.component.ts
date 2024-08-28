
import { Component, OnInit } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ServeclassService } from 'src/app/shared/services/serveclass.service';
import { Servein } from 'src/app/domain/servein';
@Component({
  selector: 'app-dashboard',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  outputurl: any[] = [];
    images:any[] = [
      { url: 'https://www.livelaw.in/h-upload/2022/11/09/750x450_443369-supreme-court-sc-06.jpg', 
        quote: 'A lawyerâ€™s highest calling is to fight for justice, not just to win cases.', 
        heading:'Nani Palkhivala',
        smallImage: ['https://www.livelaw.in/h-upload/2019/04/29/750x450_360385-kolkata-high-court-5.jpg',
          'https://lawtrend.in/wp-content/uploads/2023/02/sc-calcutta-hc.jpeg',
          'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/Supreme_court_1200x768_0.jpeg?VersionId=H816wCgbveg215RT3d6g3oNY29HJ1Ksg',
          'https://as2.ftcdn.net/v2/jpg/02/60/93/25/1000_F_260932572_riuGAml810510dpqPw7liuUIzPpsvqsc.jpg',
          
        ] },
      { url: 'https://static.vecteezy.com/system/resources/thumbnails/030/706/490/small/statue-of-lady-justice-fairness-law-ai-photo.jpg',
         quote: 'The law should be a guide to human behavior, not a weapon to punish.', 
         heading:'P. Chidambaram',
         smallImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2h26CpBK0R46rCW8LYgw1gXwcm95S7T9Ng&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45rBJu9c3UnYIAmyXNiq1fkW1kF3XSzm4Ow&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhzOyUg4HsOa4BXZ2LlLozSp6zBvdqEoxBQ&s',
          
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyrYn4TRpJ8eu1qV8-77Da0UH81_St_QsWA&s',]},
      { url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/31/full/1690808739-8838.jpeg', 
        quote: 'The liberties of none are safe unless the liberties of all are protected.', 
        heading:'Justice William O. Douglas',
        smallImage: ['https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/bombay-high-court-140821572-16x9_8.jpg?VersionId=TLhcUdeGUmzgJgMHnJDi83e8mqL7YYNQ&size=690:388',
          'https://www.shutterstock.com/image-photo/chennai-tamilnadu-india-feb-01-600nw-2163537161.jpg',
          'https://media.istockphoto.com/id/1442120245/photo/beautiful-shot-of-the-high-court-for-the-state-of-telangana-with-surrounding-trees-in-india.jpg?s=612x612&w=0&k=20&c=LqApZ_WZ0qLQmUBccBXEGW0M3TeqP4KOtmSzsjL2Vqg=',
          
          'https://cdnbbsr.s3waas.gov.in/s3ec01bbb001ba009ed11717eaec9305b2/uploads/2023/02/2023022252.jpg', 
        ]},
      { url: 'https://www.shutterstock.com/image-photo/chennai-tamilnadu-india-feb-01-260nw-2163537161.jpg',
         quote: 'The law must evolve to reflect the changing values and needs of society.', 
         heading:'Vikram Chandra' ,
         smallImage: ['https://cdnbbsr.s3waas.gov.in/s3ec01494ba9ff03bdad881378a6fd4092/uploads/2022/11/2022111729.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsrUwW8v7v7f1-nlc3qAXo29Qn5hYPWdaKA&s',
          'https://www.shutterstock.com/image-photo/chennai-tamilnadu-india-feb-01-260nw-2163537161.jpg',
          
          'https://lawtrend.in/wp-content/uploads/2023/02/sc-calcutta-hc.jpeg',
        ]},
      // Add more images and quotes as needed
    ];
responsiveOptions: CarouselResponsiveOptions[]|undefined;
indicators: any;

constructor(private sc: ServeclassService) {}  
ngOnInit(): void {
  this.sc.geturllist().subscribe((response: Servein) => {
    this.outputurl = [
      { title: 'Cases', value: response.cases, icon: 'pi-folder-open', iconBg: 'red-bg' },
      { title: 'Lawyers', value: response.lawyers, icon: 'pi-users', iconBg: 'purple-bg' },
      { title: 'Clients', value: response.clients, icon: 'pi-users', iconBg: 'green-bg' },
      { title: 'Firms', value: response.Firms, icon: 'pi-home', iconBg: 'blue-bg' },
      { title: 'Closed Cases', value: response.closedCases, icon: 'pi-book', iconBg: 'orange-bg' },
      { title: 'Active Users', value: response.activeCases, icon: 'pi-book', iconBg: 'yellow-bg' }
    ];
  });
}
}