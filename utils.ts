export interface MaxUsedLangProps {
  lang: string,
  count: number,
}

const getMaxUsedLanguage = (lbr: MaxUsedLangProps[]) => {
  let maxUsedLang = {
    lang: lbr[0].lang,
    count: lbr[0].count,
  }

  lbr.forEach(lang => {
    if(lang.count > maxUsedLang.count){
      console.log("dfgdgdgf")
      maxUsedLang = lang
    }
  });
  return maxUsedLang;
}

const getArticles = (word: string) => {
  if(word.toLocaleLowerCase().startsWith("a")) return "an"
  else if(word.toLocaleLowerCase().startsWith("e")) return "an"
  else if(word.toLocaleLowerCase().startsWith("i")) return "an"
  else if(word.toLocaleLowerCase().startsWith("o")) return "an"
  else if(word.toLocaleLowerCase().startsWith("u")) return "an"
  else return "a";
}

export { getMaxUsedLanguage, getArticles }