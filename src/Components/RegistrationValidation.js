function Validation(values) {
  let errors = {};
  const fname_pattern = /[a-zA-Z]{1,20}/;
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const birthday_pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!values.fname) {
    errors.fname = "Full name should not be empty";
  } else if (!fname_pattern.test(values.fname)) {
    errors.fname = "Invalid name format";
  }

  if (!values.email) {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.birthday) {
    errors.birthday = "Date of birth should not be empty";
  } else if (!birthday_pattern.test(values.birthday)) {
    errors.birthday = "Invalid date format";
  }

  if (!values.radio) {
    errors.radio = "Please select where you heard about the event";
  }

  return errors;
}
export default Validation;
