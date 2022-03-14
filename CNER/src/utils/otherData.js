let otherData = {
  id: '',
  his: '',
  bah: '',
  blh: '',
  zyh: '',
  age: '',
  gender: '',
  admission_time: '',
  descharge_time: '',
  chief_complaint: '',
  present_history: '',
  past_history: '',
  menstrual_history: '',
  personal_history: '',
  family_history: '',
  physical_examination: '',
  auxiliary_examination: '',
  primary_diagnosis: ''
}
let OtherArr = []
for (let key in otherData) {
  otherData[key] = 1;
}
for (let i = 0; i < 2; i++) {
  OtherArr.push(otherData)
}
export default OtherArr;
