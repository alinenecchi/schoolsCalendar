export const getWordBetweenTwoCharacters = (link, start, end) => {
  return link.split(start).pop().split(end)[0].trim();
};

export const getYoutubeEmbedLink = (link) => {
  const startReg = new RegExp(`/?v=|youtu.be/|embed/`, "gi");
  const endReg = new RegExp(/\?|&/, "gi");
  const embedLink = getWordBetweenTwoCharacters(link, startReg, endReg);

  if (embedLink && embedLink.length >= 11) {
    return `https://www.youtube.com/embed/${embedLink}?showinfo=0&rel=0`;
  } else {
    return null;
  }
};

export const removeTagsHTML = (str) => str.replace(/<[^>]*>?/gm, "").trim();

export const scrollIntoViewOptions = {
  behavior: "smooth",
  block: "nearest",
  inline: "nearest",
};

export function validateEmail(email) {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
}

export function validatePassword(password) {
  //Deve ter tamanho mínimo 6 e no máximo 15 caracteres.
  //Deve ter somente letras e numero e caractere especial(!#@$%&)
  //Deve ter no mínimo uma letra maiúscula e minúscula.
  //Deve ter no mínimo um numero.
  //Deve ter no mínimo caractere especial(!#@$%&)
  let regex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
  if (regex.test(password)) {
    return true;
  } else {
    return false;
  }
}
export function validateName(name) {
  // Regex para duas strings, separadas com espaço e com no mínimo 3 caracteres. Aceita acentuação e rejeita números.
  var regex = new RegExp(
    /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi
  );
  let currentName = name;
  let response = regex.test(currentName);
  if (currentName?.length >= 3 && response) {
    return true;
  }
  return false;
}
