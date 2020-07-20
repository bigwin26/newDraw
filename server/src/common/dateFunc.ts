//오늘부터 특정날짜까지 몇일남았는지 리턴하는 함수
//@param release_date; ex)2020-07-20 16:00:00
//return number; ex) 오늘부터 특정일까지 2일 남았다면 2 리턴
export function getDiffDays(release_date: string) {
  const releaseDay: any = new Date(release_date);
  const currDay: any = new Date();
  const diffDays = Math.floor(
    (releaseDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24),
  );
  return diffDays;
}

//특정시간을 뺀 시간 리턴
//@param date; ex) 2020-07-20 16:00:00
//@param min; ex) 120
//return number; ex) (2020-07-20 16:00:00, 1)값 넣으면 1분을 뺀 ms리턴
export function getleftTime(date: string, min: number) {
  ///1000ms = 1초, 60000 = 1분, 300000 = 5분
  const _date: any = new Date(date);
  const minusTime = min * 60000;
  const leftTime = _date - minusTime;
  return leftTime;
}
