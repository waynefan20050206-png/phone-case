const form = document.getElementById('searchForm');
const wordInput = document.getElementById('wordInput');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const word = wordInput.value.trim();
  if (!word) return;

  resultDiv.innerHTML = `<p>🔍 searching "${word}"...</p>`;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) throw new Error("There is no result");
    const data = await response.json();

    const entry = data[0];
    const phonetic = entry.phonetic || (entry.phonetics[0]?.text ?? "");
    let html = `<h2>${entry.word}</h2>`;
    if (phonetic) html += `<p><em>/${phonetic}/</em></p>`;

    entry.meanings.forEach(meaning => {
      html += `<div class="meaning">
                 <p class="partOfSpeech">${meaning.partOfSpeech}</p>`;
      meaning.definitions.forEach((def, i) => {
        html += `<p>${i + 1}. ${def.definition}</p>`;
      });
      html += `</div>`;
    });

    resultDiv.innerHTML = html;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">❌ Can not find "${word}" ，try again。</p>`;
  }
});
