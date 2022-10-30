//1//

//  კონკრეტული თარიღის ჩაწერისას აგდებს იმ კონკრეტულ დღეს ამ შემთხვევაში კი მიმდინარე დღეს.
const currentDay = new Date();
const day = currentDay.getDay();

switch (currentDay) {
    case 0:
        day = 'Sunday';
        break;
        case 1:
            day = 'Monday';
            break;
            case 2:
                day = 'Tuesday';
                break;
                case 3:
                    day = 'Wednesday';
                    break;
                    case 4:
                        day = 'Thursday';
                        break;
                        case 5:
                        day = 'friday';
                        break;
                        case 6:
                            day = 'Saturday';

}
// console.log (day);

// 2 // 

for ( let i = 0; i < 50; i++){
    //   console.log(i);

}

// 3 // 

let i = 0;

while (i <150 ){
    i++;
   
    //    console.log(i);
 }

//4 // 

let t = 0;

do {
    t++;
    // console.log(t);
}
while( t < 100);

  // 5 //

  let array = [];
  for ( let g = 0; g <100; g ++){
    array.push(g);
  }

//   console.log(array);

// დავალებაში მითითებულია რომ i უნდა განვსაზღვროთ ყველგან ჩავთვალე რომ გადამწყვეტი მნიშვნელობა არ აქვს მაგას მაშინ უნდა ჩამეკომენტა:)) 