const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies(a, b, callback) {
  setTimeout(() => {
    a.push(b);
    callback(a);
  }, 1000);
}
getCookies(cookies, newCookie, function (a) {
  a.forEach((c) => {
    console.log(c.name);
    document.write(c.name);
  });
  //  console.log(cookies);
});
// Progression 2: using setTimeout()

//Progression 3: Create a function to creat cookies

// Progression 5: calling function
