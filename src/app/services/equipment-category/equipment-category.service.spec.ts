import { TestBed } from '@angular/core/testing';

import { EquipmentCategoryService } from './equipment-category.service';

describe('EquipmentCategoryService', () => {
  let service: EquipmentCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipmentCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
