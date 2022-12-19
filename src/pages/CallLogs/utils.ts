const OPTIONS = ["Archieve","Status","Un Archieve"];
const LABELS = ["Call Time","Direction","Duration","From","To","VIA","CREATED AT","STATUS","ACTION"]
const VOICE_MAIL = 'Voice Mail';
const ANSWERED = 'Answered';
const MISSED = 'Missed';
export {OPTIONS, LABELS}

export const decideColor = (callType:string):string => {
  switch(callType){
    case ANSWERED:
      return 'cyan';
    case MISSED:
      return 'red';
    case VOICE_MAIL:
      return '#000088'
  }
  return '#000000';
}
