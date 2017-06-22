function isStregnthPassword(password){
  if(!password){
    return false;
  }
  var length = password.length;
  var chineseChars = password.match(/[\u4e00-\u9fa5]/g);
  if(chineseChars){
    length += chineseChars.length;
  }
  return length >= 8;
}