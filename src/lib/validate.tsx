export const validateText = (
  text: string,
  number: number,
  msgEmpty: string,
  msgNumber: string
) => {
  if (text.trim().length === 0) {
    return msgEmpty;
  } else if (text.trim().length < number) {
    return `${msgNumber}`;
  }
  return "";
};

export const validateEmail = (
  email: string,
  msgEmpty: string,
  msgCorrect: string
) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim().length === 0) {
    return msgEmpty;
  } else if (!emailRegex.test(email)) {
    return msgCorrect;
  }
  return "";
};

export const validatePolicy = (isAgreed: boolean, msg: string) => {
  if (!isAgreed) {
    return msg;
  } else return "";
};
