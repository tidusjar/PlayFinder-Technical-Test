import {Component} from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
    selector: 'app-search-template',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
    constructor(public homeService: HomeService) {}
}

