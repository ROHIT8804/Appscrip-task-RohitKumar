import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss']
})
export class FiltersPanelComponent {
  @Output() filtersChanged = new EventEmitter<any>();

  filters = {
    customizable: false,
    idealFor: '',
    occasion: '',
    work: '',
    fabric: '',
    segment: '',
    suitableFor: '',
    rawMaterials: '',
    pattern: ''
  };

  idealForOptions = ['Men', 'Women', 'Kids'];

  onFilterChange() {
    this.filtersChanged.emit(this.filters);
  }
}
