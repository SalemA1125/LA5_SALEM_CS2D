// Simple hash function (returns index)
function hashFunction(name) {
  return name.charCodeAt(0) % 10;
}

// Initialize customer hash table (size 10)
let customerHashTable = new Array(10).fill(null).map(() => []);

// Function to add customer to hash table
function addCustomer(name) {
  let index = hashFunction(name);
  customerHashTable[index].push(name);
  console.log(`Customer added: ${name} (Index: ${index}, Number: ${customerHashTable[index].length})`);
}

// Function to service customer
function serviceCustomer(number, index) {
  if (index >= 0 && index < customerHashTable.length && customerHashTable[index].length >= number) {
    let customerName = customerHashTable[index].splice(number - 1, 1)[0];
    console.log(`Servicing customer: ${customerName} (Index: ${index}, Number: ${number})`);
    console.log("Updated Hash Table:");
    console.log(customerHashTable);
  } else {
    console.log("Invalid index or number. Please try again.");
  }
}

// Main program
function main() {
  // Add initial customers
  let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
  customers.forEach(customer => addCustomer(customer));

  while (true) {
    console.log("\nCustomer Service Options:");
    console.log("1. Service customer");
    console.log("2. Exit");

    let choice = prompt("Enter choice: ");

    if (choice == 1) {
      let index = parseInt(prompt("Enter index (0-9): "));
      let number = parseInt(prompt("Enter customer number to service: "));
      serviceCustomer(number, index);
    } else if (choice == 2) {
      break;
    } else {
      alert("Invalid choice. Please try again.");
    }
  }
}

main();
