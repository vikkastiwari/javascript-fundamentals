const google = "google";
const fb = null;

if (google) {
  console.log("I execute - BLOCK 1");
}

/*
falsy and truthy values are different from false and true
falsy and truthy are partially false or true
to make it best behind the scenes - we use double shots(!!)
yes it gives same result but performance wise it is best practice to use !!
refer docs - https://airbnb.io/javascript/#type-casting--coercion (22.6 Booleans: eslint)
*/
 
if (!!fb) {
  console.log("I execute - BLOCK 2");
}
