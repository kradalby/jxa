#!/usr/bin/env osascript -l JavaScript

contacts = Application("Contacts");
contacts.activate();
contacts.includeStandardAdditions = true;

function confirm(text) {
  try {
    contacts.displayDialog(text);
    return true;
  } catch (e) {
    return false;
  }
}

console.log("Number of contacts: ", contacts.people.length);
for (var index = 0; index < contacts.people.length; index++) {
  var contact = contacts.people[index];
  if (contact.birthDate()) {
    console.log(
      "Birthday found for: " + contact.firstName() + " " + contact.lastName()
    );
    var d = confirm(
      "Delete the birthday of " + contact.firstName() + " " + contact.lastName()
    );
    if (d) {
      contact.birthDate = null;
    }
    contacts.save();
  } else {
    console.log(
      "No birthday found for: " + contact.firstName() + " " + contact.lastName()
    );
  }
}
contacts.save();
