/**
 * @description This function take users and gender of user and calculate total balance by gender.
 * @param {Array<object>} users - Array of users.
 * @param {string} gender - Gender of user.
 * @returns {number} - Sum of all balances by gender.
 */

const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

const getTotalBalanceByGender = (users, gender) => {
  const balances = users
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => {
      return totalBalance + user.balance;
    }, 0);
  return balances;
}


console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863