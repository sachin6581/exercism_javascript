//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isSilence = message => message.trim().length === 0;
const isShouting = message => /[a-z]/i.test(message) && message === message.toUpperCase();
const isQuestion = message => message.trim().endsWith('?');
const isShoutingQuestion = message => isShouting(message) && isQuestion(message);

const responses = {
  'silence' : 'Fine. Be that way!',
  'shoutingQuestion' : 'Calm down, I know what I\'m doing!',
  'shouting' : 'Whoa, chill out!',
  'default' : 'Whatever.'
};


export const hey = message => {

  if(isSilence(message))
    return responses.silence;

  if(isShoutingQuestion(message))
    return responses.shoutingQuestion;

  if(isShouting(message))
    return responses.shouting;

  return responses.default;

}