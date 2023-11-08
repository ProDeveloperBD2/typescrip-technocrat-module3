{
  /* --Type Guards-- */
  /* typeof --> Type Guards */
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add(5, 5);
  console.log(result1);
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My Name Is ${user.name} and My Role Is ${user.role}`);
    } else {
      console.log(`My Name Is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "Jhankar Mahbub",
  };
  const adminUser: AdminUser = {
    name: "Asratul Hasan",
    role: "admin",
  };
  getUser(adminUser);
}
