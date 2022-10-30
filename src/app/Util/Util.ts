import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const apiUrl = localStorage.getItem('apiUrl') ?? environment.apiUrl;
export const token = JSON.parse(localStorage.getItem('admin') as string)
  ? JSON.parse(localStorage.getItem('admin') as string).data
  : null;

console.log("L:kbhjgbibhjdssd'< tok", token);
export const headers = new HttpHeaders({
  'auth-header': token ?? '',
});

export const doctorInterceptor = function (doctorList: any) {
  let { data }: { data: Array<any> } = doctorList;

  data = data.map((e: any) => ({
    doctorsName: `${e.firstName} ${e.lastName}`,
    speciality: `${e.specialization
      .map((elem: any) => elem.specialityName)
      .join(' ')}`,
    experience: e.overallExperience,
    appointmentNo: '',
  }));

  return { status: doctorList.status, data };
};
export const hospitalInterceptor = function (hospitalList: any) {
  let { data }: { data: Array<any> } = hospitalList;

  data = data.map((e: any) => ({
    hospitalName: e?.name,
    city: e?.address?.city.name,
    locality: e?.address?.locality.name,
    appointmentNo: '',
  }));

  return { status: hospitalList.status, data, message: hospitalList.message };
};

export const patientInterceptor = (patientList: any) => {
  console.log(':lkjbhjnjhbnjbhknjkbh sd', patientList);
  let { data }: { data: Array<any> } = patientList;

  data = data.map((e: any) => ({}));
  return { status: patientList.status, data, message: patientList.message };
};
