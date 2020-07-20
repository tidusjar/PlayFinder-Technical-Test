import {Component, Input, OnChanges} from '@angular/core';
import {PlayData} from '../../models/playfinder.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnChanges {
    @Input() data: PlayData[] = [];

    public pagedData: PlayData[] = [];

    public pageNumber = 1;
    public itemsPerPage = 10;
    public paginationRangeStart = 0;
    public paginationRangeEnd = 10;
    public itemsOnPage = 10;

    constructor(
    ) {

    }

    ngOnChanges() {
        this.reset();
        this.setPaginationRange();
        this.setPagedData();
    }

    reset() {
        this.pageNumber = 1;
        this.itemsPerPage = 10;
    }

    setPagedData() {
        this.pagedData = [];

        this.data.forEach((item: PlayData, index: number) => {
            if ((index) >= this.paginationRangeStart && (index) < this.paginationRangeEnd) {
                this.pagedData.push(item);
            }
        });

        this.itemsOnPage = this.pagedData.length
    }

    setPaginationRange() {
        this.paginationRangeStart = (this.pageNumber - 1) * this.itemsPerPage;
        this.paginationRangeEnd = this.paginationRangeStart + this.itemsPerPage;
    }

    onNext() {
        if (this.itemsOnPage < this.itemsPerPage) return;

        this.pageNumber++;
        this.setPaginationRange();
        this.setPagedData();
    }

    onPrevious() {
        if (this.pageNumber === 1) return;

        this.pageNumber--;
        this.setPaginationRange();
        this.setPagedData();
    }
}

