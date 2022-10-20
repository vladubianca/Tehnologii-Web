const formatString = (s, ...format) => {
  let modified = s;
  for (let i = 0; i < format.length; i++) {
    if (modified.indexOf("{" + i + "}") !== -1) {
      modified = modified.replace("{" + i + "}", format[i]);
    }
  }
  return modified;
};

console.log(
  formatString("This is a {0} string and we've {1} it", "nice", "formatted")
);

//Implementați o funcție de formatare a unui string care suportă parametrii numiți.
//Exemplu: "un {substantiv} este {adjectiv}" să poată fi formatat în "un căluț este drăguț"

const formatare = (s, subst, adj) => {
  let modified = s.replace("{substantiv}", subst).replace("{adjectiv}", adj);
  return modified;
};

console.log(formatare("un {substantiv} este {adjectiv}", "calut", "dragut"));
