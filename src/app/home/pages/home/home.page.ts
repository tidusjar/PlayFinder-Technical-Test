import {Component} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-base-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})

export class HomePageComponent {
    constructor(
        public homeService: HomeService,
        private route: ActivatedRoute
    ) {
        const pitchIdParam = this.route.snapshot.paramMap.get('pitchId') || '';
        const startDateParam = this.route.snapshot.paramMap.get('startDate') || '';
        const endDateParam = this.route.snapshot.paramMap.get('endDate') || '';

        if (pitchIdParam.length && startDateParam.length && endDateParam.length) {
            this.homeService.setControl('pitchId', pitchIdParam);
            this.homeService.setControl('startDate', startDateParam);
            this.homeService.setControl('endDate', endDateParam);

            this.homeService.fetchUsingHttpAndNGRX(pitchIdParam, startDateParam, endDateParam);
        }
    }
}
