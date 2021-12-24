import { CollegeService } from './college/college.service';
import { ProfileService } from './profile/profile.service';
import { StudentService } from './student/student.service';

export default [
 /* PLOP_EXPORT_MODULE */
 {
  provide: 'IStudentService',
  useClass: StudentService,
 },
 {
  provide: 'IProfileService',
  useClass: ProfileService,
 },
 {
  provide: 'ICollegeService',
  useClass: CollegeService,
 },
];
