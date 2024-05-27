import { TestBed } from '@angular/core/testing';

import { CourseVideoService } from './course-video.service';

describe('CourseVideoService', () => {
  let service: CourseVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
