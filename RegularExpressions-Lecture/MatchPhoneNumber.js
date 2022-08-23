function bonus(numbers) {
    let pattern = /\+359([-| ])2\1\d{3}\1\d{4}\b/g;
    let validPhone = "";
    let phoneNumbers = numbers[0];
    let validPhones = [];
    while((validPhone = pattern.exec(phoneNumbers)) != null) {
      validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(", "));
  }