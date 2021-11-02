function taggedTemplate(texts, ...values) {
  console.log(texts, values);
  return (
    texts.map((t, i) => {
      return `${t!=' ' ? `<em>${t}</em>` : ''} ${values[i]!=undefined ? `<strong>${values[i]}</strong>` : ''}`      
    }).join("")
    );
}

export default taggedTemplate;